// Bring uuid import from app.js
import { v4 as uuidv4 } from 'uuid'
import {createContext, useState} from 'react'

const FeedbackContext = createContext()

// Create a Provider to wrap in children
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1 (createContext, useState)',
            rating: 10,
        },
        {
            id: 2,
            text: 'This is feedback item 2 (createContext, useState)',
            rating: 9,
        },
        {
            id: 3,
            text: 'This is feedback item 3 (createContext, useState)',
            rating: 8,
        },
    ])
    // Add new global state to incorporate feedbackEdit
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    //----Brought addFeedback function from App.js; 
    const addFeedback = (newFeedback) => {
        // Assigns id to each new feedback comment/rating
        newFeedback.id = uuidv4()
        // Use spread operator to get current feedback items already existing and adding to the array to display on feedback cards in browser
        setFeedback([newFeedback, ...feedback])
    } 
    //----Brought deleteFeedback function from App.js; need to pass in value below to return it in window
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            // feedback.filter resets array minus the id that we're deleting
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
    }
    // Set item to be updated; pass value down through provider below
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    return ( 
        <FeedbackContext.Provider
         value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
         }}
    >
         {children} 
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;