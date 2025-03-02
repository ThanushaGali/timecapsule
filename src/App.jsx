import React, { useState, useEffect } from "react";
import axios from "axios";
import Events from "./components/Events";
import Births from "./components/Births";
import Deaths from "./components/Deaths";

import "./index.css";  // Global styles
import "./App.css";    // Component styles

const App = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState({ events: [], births: [], deaths: [] });
  const [loading, setLoading] = useState(false);
  


  useEffect(() => {
    fetchTimeCapsuleData();
  }, [date]);

  const fetchTimeCapsuleData = async () => {
    setLoading(true);
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    try {
      const [eventsRes, birthsRes, deathsRes] = await Promise.all([
        axios.get(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`),
        axios.get(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`),
        axios.get(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/deaths/${month}/${day}`)
      ]);
  
      setData({
        events: eventsRes.data.events || [],
        births: birthsRes.data.births || [],
        deaths: deathsRes.data.deaths || [],
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      setData({ events: [], births: [], deaths: [] });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="container">
      <h1>📜 Daily Time Capsule</h1>
      <input
        type="date"
        value={date.toISOString().split("T")[0]}
        onChange={(e) => setDate(new Date(e.target.value))}
      />
      {loading ? <p>Loading...</p> : (
        <>
          <Events events={data.events} />
          <Births births={data.births} />
          <Deaths deaths={data.deaths} />
        </>
      )}
    </div>
  );
};

export default App;
