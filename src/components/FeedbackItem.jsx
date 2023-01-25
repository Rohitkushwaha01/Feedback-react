import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import {FaTimes, FaEdit} from "react-icons/fa"
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

export default function Feedback({item}) {

  const {deleteFeedback, updateFeedback} = useContext(FeedbackContext);

  return (
    <>
      <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={()=>{deleteFeedback(item.id)}}>
          <FaTimes color="purple" />
        </button>
        <button className="edit" onClick={()=>{updateFeedback(item)}}>
          <FaEdit color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    </>
  );
}

Feedback.propTypes = {
  item: PropTypes.object,
}
