import "../styles/App.css";
import React, { useState, useEffect } from "react";

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const App = () => {

const [previewText, setPreviewText] = useState("");
const [quote, setQuote] = useState("");

useEffect(() => {
if (previewText === "fourty two") {
fetchQuote();
} else {
setQuote("");
}
}, [previewText]);

const handleKeyPress = (key) => {
const newPreviewText = previewText + key;
setPreviewText(newPreviewText);
};

const fetchQuote = () => {
fetch("https://api.quotable.io/random")
.then((response) => response.json())
.then((data) => {
setQuote(data.content);
})
.catch((error) => {
console.error("Error fetching quote:", error);
});
};

return (
<div className="keyboard">
<div className="preview">{previewText}</div>
{quote && <div className="quote">{quote}</div>}
<div>
{keys.map((key) => (
<button
key={key}
id={key === " " ? "key-space" : key-${key}}
onClick={() => handleKeyPress(key)}
>
{key === " " ? "Space" : key.toUpperCase()}
</button>
))}
</div>
</div>
);
};
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
