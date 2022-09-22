import React, { useEffect, useState } from 'react';
import "./App.css"

import Add from './components/Add';
import Post from './components/Post';

function App (){
     const [posts,setPosts]=useState([
      {
        id:1,
        title:"jdjdjd sjsqjsjqs jjjsd",
        author:"mentor",
        description:"kdkdqkd kdskdskds sksdkdssqmdl dsksksd"
      },
      ])

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
         description :e.target[1].value,
         author :e.target[2].value
      })
     
  
     setPosts(postCopy)
  
     }
     useEffect(()=>{
         console.log("posts ",posts);
     },[posts])

    return (
      <div className='blog'>
        
        <h3>My Blog</h3>
          
        <hr />
        
        {/* post add */}
     
        <Add add={add} />
     

                              {/* ********* posts *********  */}

        <div className='posts'>
            {
              posts.map((post)=>
              <Post post={post} key={post.id} deletePost={deletePost}/>
              )
            }
             
        </div>




          
      </div>
    );
  }


export default App;
