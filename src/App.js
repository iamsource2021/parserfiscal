import React from 'react';
import './App.css';
import Mobile from './Layouts/Mobile/index';
import Desktop from './Layouts/Desktop/index';
import { useStyleMediaQuery } from './hooks/useStyleMediaQuery.js';

import { Amplify  } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {

  const { matches: isMobile } = useStyleMediaQuery(
    {
      mixOrMax: 'max', 
      widthOrHeight: 'width', 
      value: 767 
    }
  );  

  return (
    <div className="App">
      {isMobile && <Mobile />}
      {!isMobile && <Desktop />}
    </div>
  );
}

export default App;
