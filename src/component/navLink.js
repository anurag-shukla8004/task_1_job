import React from 'react';
import { connect } from 'react-redux';
import LinkComponent from './navLinkCategory';

function navLink({ foodArr, moviesArr, bikeArr }) {
  console.log('shiv ', foodArr);

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-default dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          Food
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" style={{ left: '0%' }}>
          <LinkComponent component={'Pizza'} />
          <LinkComponent component={'Sandwich'} />
          {foodArr &&
            foodArr.map((ele, i) => {
              return <LinkComponent key={i} component={`${ele}`} />;
            })}
          <li className="dropdown-submenu">
            <a className="test" tabindex="-1" to="#">
              New dropdown <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <LinkComponent component={'2nd level dropdown'} />
              <LinkComponent component={'2nd level dropdown'} />

              <li className="dropdown-submenu">
                <a className="test" to="#">
                  Another dropdown <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <LinkComponent component={'3nd level dropdown'} />
                  <LinkComponent component={'3nd level dropdown'} />
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-default dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          Movies
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" style={{ left: '-80%' }}>
          <LinkComponent component={'Avenger'} />
          <LinkComponent component={'Superman'} />
          {moviesArr &&
            moviesArr.map((ele, i) => {
              return <LinkComponent key={i} component={`${ele}`} />;
            })}
          <li className="dropdown-submenu">
            <a className="test" tabindex="-1" to="#">
              New dropdown <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <LinkComponent component={'2nd level dropdown'} />
              <LinkComponent component={'2nd level dropdown'} />

              <li className="dropdown-submenu">
                <a className="test" to="#">
                  Another dropdown <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <LinkComponent component={'3nd level dropdown'} />
                  <LinkComponent component={'3nd level dropdown'} />
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-default dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          Bike
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" style={{ left: '-110%' }}>
          <LinkComponent component={'Honda'} />
          <LinkComponent component={'Royal Enfield'} />
          {bikeArr &&
            bikeArr.map((ele, i) => {
              return <LinkComponent key={i} component={`${ele}`} />;
            })}
        </ul>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  foodArr: state.foodArr,
  moviesArr: state.moviesArr,
  bikeArr: state.bikeArr,
});

export default connect(mapStateToProps)(navLink);
