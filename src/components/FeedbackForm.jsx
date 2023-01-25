import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "./context/FeedbackContext";

export default function FeedbackForm({handleAdd}) {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [letterCount, setLetterCount] = useState(0);
  const [rating, setRating] = useState(10);

  const {addFeedback, feedbackEdit, updateFeedbackData} = useContext(FeedbackContext);

  useEffect(()=>{
    console.log(feedbackEdit)
    if(feedbackEdit.edit === true){
      setIsDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  
  const clearForm = ()=>{
    setText("");
    setLetterCount(0);
    setIsDisabled(true);
    setRating(10);
  }

  const handleChange = (e) => {
    if (text === "") {
      setIsDisabled(true);
      setMessage(null);
    } else if (text.length !== "" && text.trim().length < 5) {
      setIsDisabled(true);
      setMessage("Review atleast be more than 5 characters");
    } else {
      setIsDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
    setLetterCount(text.length + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length > 5){
      const newFeedback = {
        id: uuidv4(),
        text: text,
        rating: rating
      }

      if(feedbackEdit.edit === true){
        updateFeedbackData(feedbackEdit.item.id, newFeedback);
        clearForm();
        feedbackEdit.edit = false;
      }
      else{
        addFeedback(newFeedback);
        clearForm();
      }

    }
  }



  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you like to rate our service?</h2>
        <RatingSelect select={(rating) => { setRating(rating) }} />
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type={"submit"} isDisabled={isDisabled}>
            Send
          </Button>
        </div>

        <div className="review-count">
          <div className="count">{letterCount}</div>
          {message && <div className="message">{message}</div>}
        </div>
      </form>

    </Card>
  );
}
