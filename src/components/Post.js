import React from 'react';


function Post(props) {
  const {title,description,author,id} = props.post
    return ( <div>
    
    <div className="post">
                  <h3>{title}</h3>
                  <small>{author}</small>
                  <p>
                   {description}
                  </p>
                  <button onClick={()=>props.deletePost(id)}>
                    delete
                  </button>
              </div>
    
    
    </div> );
}

export default Post;