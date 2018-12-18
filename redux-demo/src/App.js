import React from 'react';
import './App.css';
import CommentsListContainer from "./CommentsListContainer";

const App = () => {
  return (
    <div className="App">
      Lista komentarzy:
      <CommentsListContainer></CommentsListContainer>
    </div>
  );
};

export default App;
