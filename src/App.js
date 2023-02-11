import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Profile } from './Components/profile/Profile';
import { Setting } from './Components/settings/Setting';
import { Dashboard } from './Components/home/Dashboard';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
