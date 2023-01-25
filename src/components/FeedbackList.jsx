import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import FeedbackContext from "./context/FeedbackContext";
import { useContext } from "react";

export default function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)
  return (
    <>
      {!feedback || feedback.length === 0 ? (
        <Card>
          NO FEEDBACK FOUND!!!
        </Card>
      ) : (
        feedback.map((item) => {
          return (
            <FeedbackItem
              key={item.id}
              item={item}
            />
          );
        })
      )}
    </>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
