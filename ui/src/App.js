import { useState, useEffect } from 'react';
import './App.css';
import Avatar from './assets/img/avatar.png'

function App() {
  const [ specialHours, setSpecialHours ] = useState(null)

  useEffect(() => {
    // calling api for fetching special hours
    fetch(`${process.env.REACT_APP_BASE_URL}/specialhours`)
    .then(res => res.json())
    .then(data => {
      setSpecialHours({ startTime: data.startTime, endTime: data.endTime })
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <div className='contact-wrapper'>
        <div className='contact top'>
          <img src={Avatar} alt='agent' />
          <h3>Questions?</h3>
          <p>Our Customer Support will be opening late today. We apologize for any inconvenience.</p>
        </div>
        <div className='contact middle'>
          <div className='call'>
            <p>
              <span id='call'>Call</span>
              888-551-7600
            </p>
            <p className='availability'>
              <span className='indicator'></span>
              Available 8am
            </p>
          </div>
          <div className='text'>
            <p>
              <span id='text'>Text</span>
              888-551-7600
            </p>
            <p className='availability'>
              <span className='indicator'></span>
              Available 8am
            </p>
          </div>
          <div className='chat'>
            <p>
              <span id='chat'>Live Chat</span>
            </p>
            <p className='availability'>
              <span className='indicator'></span>
              Available 8am
            </p>
          </div>
          <div className='email'>
            <p>
              <span id='email'>Email</span>
            </p>
            <p className='availability'>
              <span className='indicator'></span>
              Response by Sun
            </p>
          </div>
        </div>
        <div className='contact bottom'>
          <div className='special-hours'>
            <h6>Special Hours</h6>
            <p className='timing'>{specialHours ? specialHours : "8:45am-7:45pm"}</p>
          </div>
          <div>
            <h6>Monday - Thursday</h6>
            <p className='timing'>9am-7:45pm</p>
          </div>
          <div>
            <h6>Friday</h6>
            <p className='timing'>9am-7:45pm</p>
          </div>
          <div>
            <h6>Saturday</h6>
            <p className='timing'>9am-5:45pm</p>
          </div>
          <div>
            <h6>Sunday</h6>
            <p className='timing'>9am-5:45pm</p>
          </div>
        </div>
      </div>
      <form>
        <h2>Set Special Hours</h2>
        <div className='date'>
          <label>Date:</label>
          <input type='date' />
        </div>        
        <div className='start'>
          <label>Start time:</label>
          <input type='time' />
        </div>
        <div className='end'>
          <label>End time:</label>
          <input type='time' />
        </div>
      </form>
    </div>
  );
}

export default App;
