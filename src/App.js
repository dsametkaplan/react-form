import React , {Fragment} from 'react';
import Login from './components/Login/Login';
import SignUp from './components/Signup/Signup'

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Fragment> 
      
      
      
   
        <Router>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path='/register' element={<SignUp/>}/>
          
          </Routes>
        </Router>
      

    
    
    
    
    </Fragment>
  );
}

export default App;
