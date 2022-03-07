import Profile from './profile/Profile';
import Home from './home/Home';
import './App.css';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
     </div>
  );
}

export default App;
