import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: uuidv4(),
            text: "This is the first item from the context api",
            rating: 10
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState([
        {
            item: {},
            edit: false
        }
    ])

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete the item?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }

    const addFeedback = (newFeedback) => {
        setFeedback([newFeedback, ...feedback]);
    }
    
    const updateFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        });
    }

    const updateFeedbackData = (id, newItem)=>{
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...newItem} : item));
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                addFeedback,
                deleteFeedback,
                feedbackEdit,
                updateFeedback,
                updateFeedbackData
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;