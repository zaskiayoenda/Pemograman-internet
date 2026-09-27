import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./komponen/Header";
import Content from "./komponen/Content";
import Footer from "./komponen/Footer";
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}


ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);