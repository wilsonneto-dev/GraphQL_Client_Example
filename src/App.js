import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:4000", {
        query: `
      {
        events {
          id, title, text
        }
      }
  `
      })
      .then(response => {
        setEvents(response.data.data.events);
      });
  }, []);

  return (
    <>
      {events.map(event => (
        <div key={event.id}> - {event.title}</div>
      ))}
    </>
  );
};
