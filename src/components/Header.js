import React from 'react';
import { connect } from 'react-redux';
import { Link  } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ( {startLogout} ) => (
  <header className='header'>
    <div className='content-container'>
      <div className='header__content'>
        <img src="/images/OCDevel-logo_tp-white-120.png" alt="OCDevel Logo" />
        <Link className='header__title' to="/dashboard">
          <h1>OCDevel</h1>
        </Link>
        <Link className='link' to='/'>
          <span> Machine Learning Podcast</span>
        </Link>
      </div>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
