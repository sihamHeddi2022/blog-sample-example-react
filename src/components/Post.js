import React from 'react';


function Post(props) {
  const {title,body,id} = props.post
    return ( <div>
    
    <div className="post">
                  <h3>{title}</h3>
                  <p>
                   {body}
                  </p>
                  <button onClick={()=>props.deletePost(id)}>
                    delete
                  </button>
              </div>
    
    
    </div> );
}

export default Post;