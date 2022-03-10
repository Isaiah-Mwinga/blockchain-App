import './App.css';
import profile from "./image/a.png";
import email from "./image/email.jpg";
import pass from "./image/pass/png";
function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className='container-image'>
              <img src={profile} alt="profile" className='profile' />

            </div>

          </div>
          <div>
            <h1>Login page</h1>
            <div>
              <img src={email} alt="email" className='email'/>
              <input type="text" placeholder='user name' className='name'/>
            </div>
            <div>
              <img src={pass} alt="pass" className='pass'/>
              <input type="text" placeholder='user name' className='name'/>
            </div>
            <button>login</button>
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default App;
