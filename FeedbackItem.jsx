import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

// Remove handleDelete from functions below--not needed as prop after useContext; change handleDelete onclick to deleteFeedback (shows "No Feedback Yet when x is clicked onscreen")
function FeedbackItem({ item }) {
  // Add FeedbackContext instead of prop
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  
    return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)}
        className='close'>
        <FaTimes color='purple' />
      </button>

      <button onClick={() => editFeedback(item)}
        className='edit'>
        <FaEdit color='purple' />
      </button>
      
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem