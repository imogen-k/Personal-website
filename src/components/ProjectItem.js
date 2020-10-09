import React from 'react';
import { Link } from 'react-router-dom';

function ProjectItem(props) {
  return (
    <>
      <li className='projects__item'>
        <Link className='projects__item__link' to={props.path}>
          <figure className='projects__item__pic-wrap'>
            <img
              className='projects__item__img'
              alt='project'
              src={props.src}
            />
          </figure>
          <div className='projects__item__info'>
            <h5 className='projects__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ProjectItem;