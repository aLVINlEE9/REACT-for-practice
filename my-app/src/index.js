import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import Library from './chapter_03/Library';
import Accommodate from './chapter_07/Accommodate';
import NotificationList from './chapter_06/NotificationList';
import SignUp from './chapter_11/SignUp';
import Calculater from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
