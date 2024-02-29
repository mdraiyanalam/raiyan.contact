import React from 'react';
import './footer.css';

import linkedinIcon from './img/icons8-linkedin-48.png';

const footer = () => {
  return (
    <footer class="container-fluid">
      <div class="container-fluid text-center footer">
        <div class="row">
      
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div class="col-3">{/*Column*/}</div>

          <div class="col-6">
            {/* <div className="navbar navbar-expand-lg navbar-light bg-light"> */}
            <div>
            <a className="nav-link" href="https://www.linkedin.com/in/mdraiyanalam/" target="_blank" rel="noopener noreferrer">
                  This website is developed by 
                  <img style={{ height: '25px', width: '25px', padding: '5px' }} src={linkedinIcon} alt="linkedinIcon" />
                  Md Raiyan Alam
                </a>
            </div>
            {/* </div> */}
          </div>


          <div class="col-3">{/*Column*/}</div>

        </div>

        </div>
      </div>
    </footer>
  );
};

export default footer;
