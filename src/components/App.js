import "../styles/App.css";
import "../styles/App.css";

import React, { useState, useEffect } from "react";

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const App = () => {

  const [previewText, setPreviewText] = useState("");

  const [quote, setQuote] = useState("");

  useEffect(() => {

    if (previewText.toLowerCase() === "forty two") {

      fetch("https://api.quotable.io/random")

        .then((response) => response.json())

        .then((data) => setQuote(data.content));

    } else {

      setQuote("");

    }

  }, [previewText]);

  const handleKeyPress = (e) => {

    const key = e.target.innerHTML;

    if (key === "Space") {

      setPreviewText((prevText) => prevText + " ");

    } else {

      setPreviewText((prevText) => prevText + key.toLowerCase());

    }

  };

  return (

    <>

      {previewText.toLowerCase() === "forty two" ? (

        <div className="quote">{quote}</div>

      ) : (

        <div className="keyboard">

          <div className="preview">{previewText}</div>

          <div>

            {keys.map((key) => (

              <button

                key={key}

                id={key === " " ? `key-space` : `key-${key}`}

                onClick={handleKeyPress}

              >

                {key === " " ? "Space" : key.toUpperCase()}

              </button>

            ))}

          </div>

        </div>

      )}

    </>

  );

};

export default App;
export default App;
