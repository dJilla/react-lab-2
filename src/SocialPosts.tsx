import React, {useState} from 'react';
import { Post } from "./Post";
import { PostInList } from "./PostInList";
import { PostForm } from "./PostForm";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faKiwiBird } from '@fortawesome/free-solid-svg-icons';

export function SocialPosts() {

    // let subtitle:any;

    const [posts, setPosts] = useState<Post[]>([
        {
        title: 'Example',
        thought: 'Example thought'
        },
        {
        title: 'Example 2',
        thought: 'Example thought 2'
        }
    ]);

    function onDelete2(i:number) {

        const newList = posts.slice(0);
        newList.splice(i, 1);
        setPosts(newList);
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    // function afterOpenModal() {
    //     subtitle.style.color = '#f00';
    // }
  
    function closeModal() {
      setIsOpen(false);
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height: 400 + 'px'
        },
      };

    return (
        <div>
            <h1 className='header'>Thoughter <FontAwesomeIcon icon={faKiwiBird}></FontAwesomeIcon></h1>

            <div>
                {posts.map((post, i) => <PostInList key={i} post={post} onDelete={() => onDelete2(i)}></PostInList>)}
            </div>
            <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal">
                <PostForm 
                onSubmit={
                    (post) => {
                    setPosts([...posts, post])
                    closeModal()
                    }
                } 
                onClose={() => closeModal()}/>
            </Modal>
            <button className='newthoughtbutton' onClick={openModal}>New Thought</button>
        </div>
    );
}