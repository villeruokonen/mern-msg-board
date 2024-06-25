import './styles/App.css'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing/Landing'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Footer from './components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'

function App() {

  const auth = useAuth();

  return (
    <>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={!auth ? <Landing/> : <Navigate to="/dashboard"/>}></Route>
        <Route path="/dashboard" 
          element={auth ? <Dashboard/> : <Navigate to="/"/>}>
        </Route>
        <Route path="/about" element={<div>About</div>}></Route>
      </Routes>

      <Footer description="This is a footer"/>   
    </>
  )
}

export default App;
