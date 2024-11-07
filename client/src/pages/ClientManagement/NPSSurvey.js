// NPSSurvey.js
import React, { useState, useEffect } from 'react';
import { fetchNPSData, submitNPSSurvey } from '../../services/npsService';
import { Line } from 'react-chartjs-2';

const NPSSurvey = () => {
  const [npsData, setNpsData] = useState([]);
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    fetchNPSData().then(data =>{
      console.log("fetchnpsdata",data)
      setNpsData(data)});
  }, []);

  const handleSubmit = () => {
    if (score !== null && feedback) {
      submitNPSSurvey({ score, feedback }).then(() => {
        setIsSubmitted(true);
        alert('Thank you for your feedback!');
      });
    } else {
      alert('Please provide both score and feedback.');
    }
  };

  const chartData = {
    labels: npsData.map(item => item.date),
    datasets: [
      {
        label: 'NPS Score',
        data: npsData.map(item => item.score),
        fill: false,
        borderColor: 'green',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
    scales: {
      x: { title: { display: true, text: 'Date' } },
      y: { title: { display: true, text: 'NPS Score' } },
    },
  };

  return (
    <div className="nps-survey bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Client Satisfaction Survey (NPS)</h2>

      {!isSubmitted ? (
        <div className="survey-form mb-6">
          <div className="mb-4">
            <label>How likely are you to recommend us (0-10)?</label>
            <input
              type="number"
              min="0"
              max="10"
              value={score || ''}
              onChange={e => setScore(Number(e.target.value))}
              className="block w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label>Your Feedback:</label>
            <textarea
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
              className="block w-full mt-1 p-2 border rounded"
              rows="3"
              placeholder="Share your experience..."
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="thank-you-message text-center">
          <p>Thank you for your feedback!</p>
        </div>
      )}

      <h3 className="text-lg font-semibold mt-6 mb-2">NPS Score Trends</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default NPSSurvey;