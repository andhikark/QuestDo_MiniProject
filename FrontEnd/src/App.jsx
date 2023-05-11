import { BrowserRouter as Router, Route, Routes,useNavigate } from "react-router-dom";
import About from './components/AboutPage'
import Navbar from './components/Navbar'
import TaskPage from './components/TaskPage'
import Settings from './components/SettingsPage'
import SignInPage from './components/SignInPage'
import MyAccountPage from './components/MyAccountPage'
import ProfilePage from './components/ProfilePage'
import Login from './components/LoginPage'

function App() {

  return (
    <Router>
      <div className="Pages">
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/task" element={<TaskPage/>} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
            <Route path="/myaccount" element={<MyAccountPage />} />
            <Route path="/" element={<Login />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
