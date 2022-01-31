import { Post } from "./Post";


export function PostInList(props: {post:Post, onDelete:() => void}) {

    return (

        <div className='post'>
            <h1 className='posttitle'>{props.post.title}</h1>
            <span className='postthought'>{props.post.thought}</span>
            <button className='deletebutton' onClick={props.onDelete}>Delete</button>
        </div>
    );
}