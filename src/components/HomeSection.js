import React from 'react';
import './HomeSection.css';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


const background = require('./images/background.jpg');

function HomeSection() {
  return (
    <div className='home-container'>
      <img src={background} alt="background" />;
      <h1>IMOGEN KRAAK</h1>
      <p>Full-stack Developer</p>
      <div className='home-btns'>
      <Link to='/about' onClick={console.log('hey')}>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          About me
        </Button>
        </Link>
        <Link to='/projects' onClick={console.log('hey')}>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >Projects <i className='fas fa-terminal' />  
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomeSection;