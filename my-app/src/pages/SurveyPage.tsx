import React, { useState } from 'react';
import '../styles/SurveyPage.css';

interface SurveyAnswers {
  activity: string | null;
  style: string | null;
}

const SurveyPage: React.FC = () => {
  const [answers, setAnswers] = useState<SurveyAnswers>({
    activity: null,
    style: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleActivityClick = (activity: string) => {
    setAnswers((prev) => ({ ...prev, activity }));
  };

  const handleStyleClick = (style: string) => {
    setAnswers((prev) => ({ ...prev, style }));
  };

  const handleSubmit = () => {
    if (answers.activity && answers.style) {
      setSubmitted(true);
    } else {
      alert('Please answer both questions!');
    }
  };

  return (
    <div className="survey-container">
      {!submitted ? (
        <>
          <h1>Take our survey and get a generated playlist on what you like!</h1>
          <div className="question">
            <h3>What are you wanting to do?</h3>
            <div className="options">
              <button onClick={() => handleActivityClick('Party')} className='button'>Party</button>
              <button onClick={() => handleActivityClick('Chill')} className='button'>Chill</button>
              <button onClick={() => handleActivityClick('Workout')} className='button'>Workout</button>
              <button onClick={() => handleActivityClick('Study')} className='button'>Study</button>
            </div>
          </div>
          <div className="question">
            <h3>What is your clothing style?</h3>
            <div className="options">
              <button onClick={() => handleStyleClick('Trendy')} className='button'>Trendy</button>
              <button onClick={() => handleStyleClick('Casual')} className='button'>Casual</button>
              <button onClick={() => handleStyleClick('Vintage')} className='button'>Vintage</button>
              <button onClick={() => handleStyleClick('Western')} className='button'>Western</button>
            </div>
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </>
      ) : (
        <div className="result">
          <h2>Thanks for submitting! We are working on getting generated playlists!</h2>
          <p className='mediumText'>Activity: {answers.activity}</p>
          <p className='mediumText'>Style: {answers.style}</p>
        </div>
      )}
    </div>
  );
};

export default SurveyPage;