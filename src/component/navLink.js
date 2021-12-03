import React from 'react';

function navLink(props) {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-default dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          {props.name}
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" style={{ left: '0%' }}>
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
          <li className="dropdown-submenu">
            <a className="test" tabindex="-1" to="#">
              New dropdown <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a tabindex="-1" to="#">
                  2nd level dropdown
                </a>
              </li>
              <li>
                <a tabindex="-1" to="#">
                  2nd level dropdown
                </a>
              </li>
              <li className="dropdown-submenu">
                <a className="test" to="#">
                  Another dropdown <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a to="#">3rd level dropdown</a>
                  </li>
                  <li>
                    <a to="#">3rd level dropdown</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default navLink;
