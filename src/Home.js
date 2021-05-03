import useFetch from './useFetch.js';
import BlogList from './BlogList.js';


const Home =()=>{
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');


    return(
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {blogs && <BlogList blogp={blogs} title="All blogs!"/>}

      </div>
    );
}

export default Home;