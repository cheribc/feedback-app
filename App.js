import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Card from './components/shared/Card.jsx'
// import { useState } from 'react'
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList'
// import FeedbackData from './data/feedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink.jsx'
import AboutPage from './pages/AboutPage.jsx'

import {FeedbackProvider} from './context/FeedbackContext'

// import Post from './components/Post.jsx'

// This will return the main app component in XML

// Removed state for feedback function below after creating useContext
function App() {
//     const [feedback, setFeedback] = useState(FeedbackData)

//------------------CONTAINER------------------------

    //PROP DRILLING
    return (
    <FeedbackProvider>
    <Router>
        <Header />
        <div className='container'>
                <Routes>
                    <Route 
                        exact path='/' 
                        element={
                       <>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                       </>
                    } 
                    ></Route>
                
                    <Route path='/about' element={<AboutPage />} /> 
                    {/* <Route path='/post/*' element={<Post />} />  */}
                    {/* <Route path='/post/:id/:name' element={<Post />} />  */}

                </Routes>
                    {/* <Card>
                        <NavLink to='/' activeClassName='active'>
                            Home
                        </NavLink>
                        <NavLink to='/about' activeClassName='active'>
                            About
                        </NavLink>
                    </Card> */}
                <AboutIconLink />
        </div>
    </Router>
    </FeedbackProvider>
    )
}

// Export app
export default App;