import {useParams} from 'react-router-dom';
import useFetch from './useFetch.js';
import {useHistory } from 'react-router-dom';

const BlogDetails =()=>{

    const {id:blogid}= useParams();
    const {isPending,error,data:blog}=useFetch("http://localhost:8000/blogs/"+blogid);
    const history= useHistory();


    const handleClick =()=>{
        fetch('http://localhost:8000/blogs/'+blogid,{
            method:'DELETE'
        })
        .then( ()=>{
            history.push('/');
        })
    }
    return(
        <div className='blog-details'>
            {isPending && <div>Loading...</div> }
            {error && <div>{error}</div> }
            {blog &&(
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author} </p>
                    <div> {blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>

            )}
        </div>
    );

}

export default BlogDetails;