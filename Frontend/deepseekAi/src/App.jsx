import React from 'react'
import { Navigate,Route,Routes} from "react-router"
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import { useAuth } from './context/AuthProvider.jsx';

function App() {
   const [authUser] = useAuth();
  console.log(authUser);
  return (
   <>
  <div>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to={"/"} /> : <SignUp />}
          />
        </Routes>
      </div>
   </>
  )
}

export default App



