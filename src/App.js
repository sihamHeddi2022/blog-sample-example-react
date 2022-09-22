import React from 'react';
import "./App.css"

import { BrowserRouter as Router , Switch ,Link,Route} from "react-router-dom";
import Home from './components/Home';
import Create from './components/create';

function App (){
 

    return (
      <div className='blog'>
        
        <h3>My Blog</h3>
        <Router>
        <Link to="/">
          home
        </Link>
        <Link to="/add">create post</Link>
        
        
  
              <Switch>
               
                 <Route exact path="add/">
                      <Create/>
                 </Route>
              </Switch>
        </Router>


          
      </div>
    );
  }


export default App;
