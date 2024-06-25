// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  const [sections] = useState([
    { id: 'intro', title: 'Introduction' },
    { id: 'auth', title: 'Authentication' },
    { id: 'endpoints', title: 'Endpoints' },
    { id: 'examples', title: 'Examples' },
    // Add more sections as needed
  ]);

  const handleSectionClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Sidebar sections={sections} onSectionClick={handleSectionClick} />
      <div className="content">
        <section id="intro">
          <h1>Introduction</h1>
          <p>Welcome to the API documentation.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
        
        </section>
        <section id="auth">
          <h1>Authentication</h1>
          <p>Details about authentication methods.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>

        </section>
        <section id="endpoints">
          <h1>Endpoints</h1>
          <p>Information about various endpoints.</p>
        </section>
        <section id="examples">
          <h1>Examples</h1>
          <p>Example usage of the API.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, harum suscipit, nostrum molestias non, perferendis magni quod obcaecati vel nobis soluta ea praesentium impedit? Magnam quam sit perspiciatis omnis!</p>

        </section>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default App;
