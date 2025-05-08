import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import News from './components/News';
import Education from './components/Education';
import Tools from './components/Tools';
import SuccessStories from './components/SuccessStories';

function App() {
  return (
    <Layout>
      <Hero />
      <News />
      <Education />
      <Tools />
      <SuccessStories />
    </Layout>
  );
}

export default App;