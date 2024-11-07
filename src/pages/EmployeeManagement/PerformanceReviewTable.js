// PerformanceReviewTable.js
import React, { useState, useEffect } from 'react';
// import { fetchPerformanceReviews } from '../../services/reviewService';
import { fetchPerformanceReviews } from '../../services/reviewService';


const PerformanceReviewTable = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchPerformanceReviews().then((data) => {
    console.log("performancereviw",data)
    setReviews(data)
  });
  }, []);

  return (

    <div className="performance-review-table bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Performance Reviews</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Review Period</th>
            <th>Rating</th>
            <th>Manager Comments</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.period}</td>
              <td>{review.rating}</td>
              <td>{review.managerComments}</td>
              <td>{review.date}</td>        
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 
  );
};

export default PerformanceReviewTable;
