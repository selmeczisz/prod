import React from 'react'
import { useState } from 'react'
import { Feedback } from '../classes/Feedback.class'

export const Contact = () => {
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")

  const submitHandler=(e)=>{
    e.preventDefault()
    const userData = new Feedback(email, feedback);
    console.log(userData);

  }

  return (
    <div className='container p-5'>
      <form onSubmit={submitHandler}>
        <h3>Provide feedback </h3>
        <div >
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div >
          <label htmlFor="text">Feedback</label>
          <textarea id="text" className='form-control' rows="3" value={feedback} onChange={(e)=> setFeedback(e.target.value)}>  </textarea>
        </div>

        <button type="submit" className='btn btn-primary m-1'>Submit</button>
      </form>
    </div>
  )
}

