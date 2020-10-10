import React from 'react';
import './Projects.css';
import ProjectItem from './ProjectItem';
import eating from './images/mock-eating-in.png';
import railsbook from './images/railsbook.png';
import web from './images/website-mock.png';
import bandit from './images/bandit.png';


function Projects() {
  return (
    <div className='projects'>
      <h1>RECENT WORK</h1>
      <div className='projects__container'>
        <div className='projects__wrapper'>
          <ul className='projects__items'>
            <ProjectItem
              src={web}
              text='This website, built with React.'
              path='/'
              link='https://github.com/imogen-k/personal-website'
            />
            <ProjectItem
              src={eating}
              text='Eating In, a recipe app with shopping list functions, built with Swift, Firebase and CocoaPods'
              path='/projects'
              link='https://github.com/imogen-k/eating-in'
            /> 
          </ul>
          <ul className='projects__items'>
            <ProjectItem
              src={railsbook}
              text='A Facebook clone created using Ruby on Rails, PostgreSQL, AWS, Bootstrap, Rspec and Capybara'
              path='/projects'
              link='https://github.com/imogen-k/railsbook'

            />
            <ProjectItem
              src={bandit}
              text='An Airbnb clone created using Node, MongoDB, Mongoose, Jasmine'
              path='/projects'
              link='https://github.com/imogen-k/banditbnb'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;