import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrls, setShortUrls] = useState([]);
const shortenUrl = () => {
    if (!url) return;
    const short = "https://www.google.com/" + Math.random().toString(36).substring(6, 10);
    setShortUrls([...shortUrls, { original: url, short }]);
    setUrl("");
  };
return (
    <div style={{ textAlign: "center" }}>
      <h1>Simple URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter your URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}/>
      <button onClick={shortenUrl} >Shorten</button>

  <ul>{shortUrls.map((item, index) => (
          <li key={index}>
            <b>{item.original}</b> 
            <a href={item.original}>
              {item.short}</a></li>
        ))}</ul></div>
  );
}

export default App;
 