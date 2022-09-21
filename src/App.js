import React, { Component } from 'react';
import "./App.css"
class App extends Component {
  render() {
    return (
      <div className='blog'>
        
        <h3>My Blog</h3>
          
        <hr />
        
        <form>
            <input type="text" name="title" placeholder='title'/> | {" "}
            <input type="text" name='description' placeholder='description'/> | {" "}
            <input type="text" name='author' placeholder='author'/>
            <button type='submit'>add</button>
        </form>

        <hr />

        <form>
            <input type="text" name='whoAuthor' placeholder='Who are you ?'/> {" "}
            <button type='submit'>submit</button>
        </form>


                              {/* ********* posts *********  */}

        <div className='posts'>
              <div className="post">
                  <h3>I'm the title</h3>
                  <small>I'm the author</small>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repellendus provident at.
                  </p>
              </div>
              <div className="post">
                  <h3>I'm the title</h3>
                  <small>I'm the author</small>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repellendus provident at.
                  </p>
              </div>
              <div className="post">
                  <h3>I'm the title</h3>
                  <small>I'm the author</small>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repellendus provident at.
                  </p>
              </div>
        </div>




          
      </div>
    );
  }
}

export default App;
