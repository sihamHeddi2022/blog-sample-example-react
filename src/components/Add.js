import React from 'react';

function Add(props) {

  

    return (  
      <div>
      
      <form onSubmit={(e)=>{ props.add(e);}}>
        <input type="text" name="title" placeholder='title'/> | {" "}
        <input type="text" name='body' placeholder='description'/> | {" "}
        <button type='submit'>add</button>
    </form>

    <hr />  
      
      </div>
    );
}

export default Add;