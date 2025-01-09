'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { useLocalization } from '../../../context/LocalizationContextProvider';

const ArticleDetail = ({ id }) => {
  console.log('id', id);
  
  const { messages } = useLocalization();
  const article = messages.articles[id - 1]; 
  
  if (!article) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-500">Article not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 mb-5">
      <h1 className="text-3xl font-bold font-balham text-[#927034] mb-4">{article.title}</h1>
      <div className="flex justify-between items-center text-gray-600 text-sm mt-6">
        <span className="font-medium">
          <strong>Category:</strong> {article.category}
        </span>
      </div>
      <div className="flex flex-col justify-start items-start text-gray-600 text-sm mb-6">
        <span>
          <strong>Date:</strong> {article.date}
        </span>
        <span>
          <strong>Writer:</strong> {article.writer}
        </span>
      </div>
      <div className="prose prose-lg max-w-none mb-6 text-justify lg:p-6 sm:p-8" dangerouslySetInnerHTML={{ __html: article.content }} />
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">References</h2>
        <ul className="list-disc list-inside text-blue-600 pl-4">
          {article.references.map((ref, index) => (
            <li key={index}>
              <a href={ref.url} className="hover:underline" target="_blank" rel="noopener noreferrer">
                {ref.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ArticleDetail.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    references: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default ArticleDetail;