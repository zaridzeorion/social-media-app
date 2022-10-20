import React from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp';

import { UserAuth } from './firebase/AuthContext';

function App() {
  const { user } = UserAuth()
  console.log(user) 

  const userIsLoaded = user && user.isAnonymous || user && user.displayName

  return (
    <div className="App">

      {user == null ? <SignIn /> : userIsLoaded && <SignUp />}

    </div>
  );
}

export default App;
