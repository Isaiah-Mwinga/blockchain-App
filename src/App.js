import React from 'react';
import './App.css';
import searchBar from './components/searchBar';
function App() {
  const isBackgroundRed = true;
  return (

    <div className="main">
      <div>
        <searchBar />
      </div>
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className='container-image'>
            

            </div>

          </div>
          <div>
            <h1>Login page</h1>
            <div>
              
              <input type="text" placeholder='user name' className='name'/>
            </div>
            <div>
              
              <input type="text" placeholder='password' className='name'/>
            </div>
            <button>login</button>
          </div> 
          <div>
            <p>
              <a href="#">forgot password?</a>or<a href="#">sign up</a>
            </p>
          </div>
         
        </div>
    
      </div>
      <div className={isBackgroundRed ? 'background-red' : 'background-blue'} />
    </div>
  );
}

export default App;
