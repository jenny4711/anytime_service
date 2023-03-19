import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../FeedBack.css";
import Button from "react-bootstrap/Button";
import { v4 as uuid } from "uuid";
import { useNavigate } from 'react-router-dom';

const FeedBack = ({ addFeedback, authen }) => {
  const NewItemForm = { id: uuid(), username: "", feedback: "" };
  const [formData, setFormData] = useState(NewItemForm);
  const [single, setSingle] = useState({});
  const [visibleBtn, setVisibleBtn] = useState(true);
 const navigate=useNavigate()

  // GET API
  const getListFromAPI = async () => {
    axios
      .get("https://my-json-server.typicode.com/jenny4711/anytime_service/feedback")
      .then((res) => {
        console.log(res.data);
        setFormData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getListFromAPI();
  }, []);

  // Post API
  const handleChange = async (e) => {
    setVisibleBtn(false);
    const { name, value } = e.target;
    setSingle({
      ...single,
      id: uuid(),
      [e.target.name]: e.target.value,
    });
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    addFeedback({ ...formData });
    setFormData(NewItemForm);
    navigate('/home');

    {
      axios
        .post("https://my-json-server.typicode.com/jenny4711/anytime_service/feedback", single)
        .then((response) => {
          console.log(response);
          
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
  };

  // DELETE API

  const removeLine = async (id) => {
    console.log(id);

    axios
      .delete(`https://my-json-server.typicode.com/jenny4711/anytime_service/feedback/${id}`)

      .catch((error) => {
        console.log(error);
      });
  };

  // display by Map

  const list = Object.values(formData).map((val) => {
    return (
      <ul key={val.id}>
        <li><strong>{val.username}</strong></li>
        <li>{val.feedback}</li>

        {authen && (
          <button value={val.id} onClick={() => removeLine(val.id)}>
            XX
          </button>
        )}
      </ul>
    );
  });

  return (
    <div className="FeedBack">
      <form className="Feedback-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>username</Form.Label>
          <Form.Control
            name="username"
            value={formData.username}
            onChange={handleChange}
            type="text"
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Feedback</Form.Label>
          <Form.Control
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="FeedBack-text"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button variant="light" type="submit">
          Submit
        </Button>
      </form>
      <div className="FeedBack-show">
        <h1>Feed Back</h1>

        {visibleBtn === true ? list : ""}
      </div>
    </div>
  );
};

export default FeedBack;
