import React from 'react';
import './HomeSection.css';
import '../App.css';
import { Button } from './Button';


const background = require('../public/images/background.jpg');

function HomeSection() {
  return (
    <div className='home-container'>
      <img src={background} alt="background" />;
      <h1>IMOGEN KRAAK</h1>
      <p>Full-stack Developer</p>
      <div className='home-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          About me
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Projects <i className='fas fa-terminal' />  
        </Button>
      </div>
    </div>
  );
}

export default HomeSection;