import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Profile } from './Components/profile/Profile';
import { Setting } from './Components/settings/Setting';
import { Dashboard } from './Components/home/Dashboard';
import { Sidenav } from './Components/Sidenav/Sidenav';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidenav />}>
        <Route index element={<Dashboard />} />
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/setting" element={<Setting />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
