import React from 'react';
import './Projects.css';
import ProjectItem from './ProjectItem';
import eating from './images/mock-eating-in.png';
import railsbook from './images/railsbook.png';

function Projects() {
  return (
    <div className='projects'>
      <h1>Recent projects...</h1>
      <div className='projects__container'>
        <div className='projects__wrapper'>
          <ul className='projects__items'>
            <ProjectItem
              src={eating}
              text='This website, built with React.'
              path='/'
            />
            <ProjectItem
              src={railsbook}
              text='A Facebook clone created using Ruby on Rails, PostgreSQL, AWS, Bootstrap, Rspec and Capybara'
              path='/projects'
            />
          </ul>
          <ul className='projects__items'>
            <ProjectItem
              src={eating}
              text='Eating In, a recipe app with shopping list functions, built with Swift, Firebase and CocoaPods'
              path='/projects'
            />
            <ProjectItem
              src={eating}
              text='An Airbnb clone built in Node, Express, MongoDB, HTML and CSS'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;