import React from 'react';
import "./App.css"
import Add from './components/Add';
import Post from './components/Post';
import Who from './components/Who';
function App (){
  
    return (
      <div className='blog'>
        
        <h3>My Blog</h3>
          
        <hr />
        
        {/* post add */}
     
        <Add/>

        {/* who*/}
         <Who/>


                              {/* ********* posts *********  */}

        <div className='posts'>
            
             <Post/>
        </div>




          
      </div>
    );
  }


export default App;
