/* 
 * @author Raccoon Developer
 * @date 03.25.2019
 *
 * Task for "Parent/Child component" topic
 * Set up the React app from scratch
 * Render an App component (defined in a separate file)
 * Inside App, render:
 *  * 1. A Navbar component
 *  * 2. A MainContent component
 *  * 3. A Footer component
 */

import React from 'react';

import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
