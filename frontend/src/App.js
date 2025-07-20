import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CommentAutomation from "./components/CommentAutomation";

function App() {
  const [activePage, setActivePage] = useState('overview');

  const renderActivePage = () => {
    switch (activePage) {
      case 'overview':
        return <Dashboard activePage={activePage} setActivePage={setActivePage} />;
      case 'comment-automation':
        return <CommentAutomation />;
      case 'analytics':
        return <Dashboard activePage={activePage} setActivePage={setActivePage} />;
      case 'image-generation':
        return <Dashboard activePage={activePage} setActivePage={setActivePage} />;
      case 'video-generation':
        return <Dashboard activePage={activePage} setActivePage={setActivePage} />;
      case 'auto-video-editor':
        return <Dashboard activePage={activePage} setActivePage={setActivePage} />;
      case 'ugc-ads':
        return <Dashboard activePage={activePage} setActivePage={setActivePage} />;
      case 'product-ads':
        return <Dashboard activePage={activePage} setActivePage={setActivePage} />;
      case 'avatar-studio':
        return <Dashboard activePage={activePage} setActivePage={setActivePage} />;
      case 'settings':
        return <Dashboard activePage={activePage} setActivePage={setActivePage} />;
      default:
        return <Dashboard activePage={activePage} setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={renderActivePage()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;