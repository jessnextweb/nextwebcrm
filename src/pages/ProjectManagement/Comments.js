// Comments.js
import React, { useState, useEffect } from 'react';
import { fetchComments, postComment } from '../../services/chatService';

const Comments = ({ taskId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchComments(taskId).then(setComments);
  }, [taskId]);

  const handlePost = () => {
    postComment(taskId, newComment).then(() => {
      setComments([...comments, { text: newComment, user: 'You' }]);
      setNewComment('');
    });
  };

  return (
    <div className="comments bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Task Comments</h2>
      <div className="comments-list mb-4">
        {comments.map((comment, index) => (
          <div key={index}>
            <strong>{comment.user}:</strong> {comment.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-grow p-2 border rounded-l-md"
          placeholder="Add a comment..."
        />
        <button onClick={handlePost} className="bg-blue-500 text-white p-2 rounded-r-md">
          Post
        </button>
      </div>
    </div>
  );
};

export default Comments;