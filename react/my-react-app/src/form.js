import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(1);
  const [comments, setComments] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && comments) {
      // Send feedback to server
      setFormSubmitted(true);
    } else {
      setErrorMessage("Error sumbiting the feedback");
    }
  };

  
  return (
    <div className="form-container">
      {formSubmitted ? (
		  <p className="success-message">Thanks for your feedback!</p>
      ) : errorMessage ? (
        <p className="error-message">{errorMessage}</p>
      ) : (
		  <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
			<center><h1>Feedback Form</h1></center>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
			  placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
			  placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <input
              type="range"
              id="rating"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="form-control"
            />
            <span className="rating-value">{rating}</span>
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments:</label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="form-control"
			  placeholder="Enter your review"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;