import { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    // Add feedbackEdit to below function to include the value that will be returned in feedbackForm
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    // Add useEffect to take in callback and array of dependencies that will run if data is entered
    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        // Validation of text in input field
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
            // Check if text is equal to less than 10 characters to set button to not disabled
        } else if(text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        // setText state changes for whatever is typed in
        setText(e.target.value)
    }
    // Function to handle submit button
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            // Add feedbackEdit change
            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            // Change to addFeedback after useContext imported
            addFeedback(newFeedback)
            // SetText to remove text after submit button pressed
            setText('')
        }
    }


  return (
  <Card>

   <form onSubmit={handleSubmit}>
       <h2>How would you rate your service with us?
       </h2>
        <RatingSelect select={(rating) => setRating(rating)} />
       <div className='input-group'>
           
        <input 
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review' 
            value={text}
            />
        <Button 
            type='submit' isDisabled={btnDisabled}>
                Send
        </Button>
        </div>

        {message && <div className='message'>{message}</div>}
    </form>   
  </Card>

  )
}

export default FeedbackForm