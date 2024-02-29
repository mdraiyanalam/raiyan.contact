// Navbar.js
import React from 'react';
import LogoPic from './img/Picture.jpg';
import CopyToClipboardButton from './CopyToClipboardButton';

const Navbar = () => {
  const textToCopy = 'https://mdraiyanalam.github.io/raiyan.contacts/';
  const buttonTooltip = 'Click to copy site link';

  return (
    <div className="container-fluid">
      {/* Grid Starts */}
      <div className="container-fluid text-center">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="col-3">
              <a className="navbar-brand" href="#">
                <img
                  className="rounded-circle"
                  style={{ height: '52px', width: '52px' }}
                  src={LogoPic}
                  alt="Your Logo"
                />
              </a>
            </div>

            <div className="col-6">{/*Column*/}</div>

            <div className="col-3">
              <CopyToClipboardButton
                textToCopy={textToCopy}
                title={buttonTooltip}
              />
            </div>
          </nav>
        </div>
      </div>
      {/* Grid Ends */}
    </div>
  );
};

export default Navbar;
