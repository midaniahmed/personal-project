import { Login } from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import './App.css';
import { Profile } from './Components/profile/Profile';
import { Setting } from './Components/settings/Setting';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
