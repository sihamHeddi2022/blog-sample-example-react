import Post from './Post';
import Add from './Add';

import {useFetch} from '../hooks/hooks';
import React from 'react';

function Home() {
 
    const {posts,isPending,error,setPosts} = useFetch("https://jsonplaceholder.typicode.com/posts")
    

    const deletePost = (id)=>{
       const p = posts.filter(e=>id!==e.id)
       setPosts(p)
    }
    const add = (e)=> {

     e.preventDefault();
     
     let postCopy = [...posts]
     postCopy.push({
        id:posts.length+1,
        title : e.target[0].value,
        body :e.target[1].value,
     })
    
 
    setPosts(postCopy)
 
    }
 
    return ( <div>

         <hr />
        
        {/* post add */}
     
        <Add add={add} />
     

                              {/* ********* posts *********  */}
        

        <p>
          {
             error && error.message
          }
        </p>

        <p>
          {
             isPending && "loading ..."
          }
        </p>


        <div className='posts'>
            {
              posts && posts.map((post)=>
              <Post post={post} key={post.id} deletePost={deletePost}/>
              )
            }
             
        </div>





    </div> );
}

export default Home;