import React from 'react';

function navLinkCategory(props) {
  return (
    <>
      <li>
        <a tabindex="-1" to="#">
          {props.component}
        </a>
      </li>
    </>
  );
}

export default navLinkCategory;
