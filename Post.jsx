import {Navigate, useNavigate, Routes, Route } from 'react-router-dom'

// useParams will display the id for the Post <h1> element in browser window, so localhost:3000/post/200 displays as POST 200 
function Post() {
    // const params = useParams()
    const status = 200

    const navigate = useNavigate()
    
    const onClick = () => {
        console.log('Hello')
        navigate('/about')
    }

    if(status === 404){
       return <Navigate to='/notfound' />
    }
  return (
    <div>
        <h1>POST</h1>
        {/* <p>Name: {params.name}</p> */}
        <button onClick={onClick}>Click</button>
        <Routes>
            <Route path='/show' element={<h1>Hello World</h1>} />
        </Routes>
    </div>
  )
}

export default Post