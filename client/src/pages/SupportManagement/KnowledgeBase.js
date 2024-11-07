// KnowledgeBase.js
import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../../services/knowledgeBaseService';

const KnowledgeBase = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchArticles().then((data) => setArticles(data));
  }, []);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search articles"
        className="mb-4 p-2 border"
      />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Date Published</th>
          </tr>
        </thead>
        <tbody>
          {filteredArticles.map((article) => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>{article.category}</td>
              <td>{article.datePublished}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KnowledgeBase;
