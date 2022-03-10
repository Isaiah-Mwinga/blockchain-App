import './App.css';
function App() {
  return (
    <div className="main">
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
    </div>
  );
}

export default App;
