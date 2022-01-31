import {useState} from 'react';
import { Post } from "./Post";
import { SocialPosts } from './SocialPosts';


export function PostForm(props: {onSubmit:(post:Post) => void, onClose:() => void}) {

    const [title, setTitle] = useState('');
    const [thought, setThought] = useState('');

    return (

        <div className='postform'>
            <label htmlFor='title'>Title</label>
            <input className='titlebox' value={title} onChange={(e) => setTitle(e.target.value)} type='text' name='title'/>

            <label htmlFor='thought'>Thought</label>
            <textarea className='thoughtbox' value={thought} onChange={(e) => setThought(e.target.value)} name ='thought'/>

            <button className='postbutton' onClick={() => props.onSubmit({title, thought})}>Post</button>
            <button className='closebutton' onClick={() => props.onClose()}>Close</button>
        </div>
    );
}