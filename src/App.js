import React from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp';

import { UserAuth } from './firebase/AuthContext';

function App() {
  const { user } = UserAuth()
  console.log(user) 

  return (
    <div className="App">

      {user == null ? <SignIn /> : <SignUp />}

    </div>
  );
}

export default App;
