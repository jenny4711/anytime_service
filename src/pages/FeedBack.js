import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import "../FeedBack.css"

const FeedBack = () => {
  const NewItemForm={
    username:""
    
  }
const [formData,setFormData]=useState(NewItemForm)
const url='http://localhost:3000/feedback'
const url1='https://jsonplaceholder.typicode.com/posts'

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData(formData=>({
      ...formData,
      [name]:value
    }))
    console.log(formData)
  }

  const subMitHandler=(e)=>{
    e.preventDefault()
    console.log(formData)
    console.log('test')
    axios.post(url1,formData)
    .then(response =>{
      console.log(response)
      
    })
   .catch(error=>{
    console.log(error)
   })

  }



  



  

  
  return (
    <div className='FeedBack'>
    <Form className='Feedback-form' onSubmit={subMitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>username</Form.Label>
        <Form.Control name="username" value={formData.username} onChange={handleChange} type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Feedback</Form.Label>
        <Form.Control name="feedback" value={formData.feedback} onChange={handleChange} className='FeedBack-text' as="textarea" rows={3} />
      </Form.Group>
      <button>Submit</button>
  
    </Form>
    </div>
  )
}

export default FeedBack