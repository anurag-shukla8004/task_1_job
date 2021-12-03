import React, { useState } from 'react';
import Link from './navLink';

function navbar() {
  return (
    <>
      <div className="nav-container">
        <Link name={'cricket'} />
        <Link name={'cricket'} />
        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            Ti
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" style={{ left: '-235%' }}>
            <li>
              <a tabindex="-1" to="#">
                HTML
              </a>
            </li>
            <li>
              <a tabindex="-1" to="#">
                CSS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default navbar;
