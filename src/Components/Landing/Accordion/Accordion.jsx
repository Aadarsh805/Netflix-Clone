import { useState } from "react";
import "./Accordion.css";
import Data from "./data";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const Accordion = ({ key, question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShow = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="accordion">
      <div className="accordion__questionContainer">
        <h2 className="question">{question}</h2>
        <button onClick={handleShow}>
          {showAnswer ? (
            <RemoveRoundedIcon fontSize="large" />
          ) : (
            <AddRoundedIcon fontSize="large" />
          )}
        </button>
      </div>
      <div className="accordion__answer">
        {showAnswer && <p className="answer">{answer}</p>}
      </div>
    </div>
  );
};

export default Accordion;
