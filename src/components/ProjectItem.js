import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';


function ProjectItem(props) {
  return (
    <>
      <li className='projects__item'>
        <Link className='projects__item__link' to={props.link}>
          <figure className='projects__item__pic-wrap'>
            <img
              className='projects__item__img'
              alt='project'
              src={props.src}
              path={props.path}
            />
          </figure>
          <div className='projects__item__info'>
            <h5 className='projects__item__text'>{props.text}</h5>
           <Button buttonStyle='btn--outline-black'
          buttonSize='btn--medium-black' onClick={()=> window.location.href = props.link}>GitHub</Button>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ProjectItem;