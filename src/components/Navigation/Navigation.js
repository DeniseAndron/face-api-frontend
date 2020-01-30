import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav className='pa4 mt4' style={{display: 'flex flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='f3 link dim ba ph3 pv2 mb2 dib black pointer'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav className='pa4 mt4' style={{display: 'flex flex-wrap', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='f3 mr2 link dim ba ph3 pv2 mb2 dib black pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='f3 link dim ba ph3 pv2 mb2 dib black pointer'>Register</p>
        </nav>
      );
    }
}

export default Navigation;