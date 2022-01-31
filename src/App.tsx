import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { SocialPosts } from './SocialPosts';
import { PostInList } from './PostInList';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { PostForm } from './PostForm';

Modal.setAppElement('#root');

function App() {



  return (
    <div className="App">
        <SocialPosts></SocialPosts>
    </div>
  );
}

export default App;
