import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😍": "Smiling face with heart eyes",
  "😑": "Expressionless face",
  "😕": "Confused face",
  "😲": "Shocking face",
  "🥶": "Cold face"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState();

  function emojiDictionaryHandler(e) {
    var input = e.target.value;
    var meaning = emojiDictionary[input];

    if (meaning === undefined) {
      meaning = "We don't have in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside outt!</h1>
      <input onChange={emojiDictionaryHandler} />
      <h2>{meaning}</h2>
      <h3>Emoji we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ cursor: "pointer", fontSize: "2rem", padding: "0.5rem" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
