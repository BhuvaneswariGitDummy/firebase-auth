import React from 'react';
import SignupForm from './SignupForm';
import Login from './Login';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
