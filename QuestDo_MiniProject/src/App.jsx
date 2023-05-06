import './App.css'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import About from './components/AboutPage'
import Navbar from './components/Navbar'
import TaskPage from './components/TaskPage'
import Login from './components/LoginPage'
import Settings from './components/SettingsPage'
import SignInPage from './components/SignInPage'
import MyAccountPage from './components/MyAccountPage'
import ProfilePage from './components/ProfilePage'
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="Pages">
          <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/task" element={<TaskPage/>} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
            <Route path="/myaccount" element={<MyAccountPage />} />
          </Routes>
      </div>

    </Router>

    
    
  )
}

export default App
