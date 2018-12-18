import React from 'react';
import { thumbUpComment } from './actions.js';
import { thumbDownComment } from './actions.js';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
  <li>
    {text} <span>votes: {votes}</span> 
    <button onClick={() => thumbUpComment(id)}>THUMB UP</button>
    <button onClick={() => thumbDownComment(id)}>THUMB DOWN</button>
  </li>;

export default Comment;