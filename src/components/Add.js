import React from 'react';

function Add() {
    return (  
      <div>
      
      <form>
        <input type="text" name="title" placeholder='title'/> | {" "}
        <input type="text" name='description' placeholder='description'/> | {" "}
        <input type="text" name='author' placeholder='author'/>
        <button type='submit'>add</button>
    </form>

    <hr />  
      
      </div>
    );
}

export default Add;