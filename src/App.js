import Projects from './projects/Projects';
import Projects2 from './projects2/Projects2';
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
        <Route path="projects" element={<Projects />}></Route>
        <Route path="projects2" element={<Projects2 />}></Route>
      </Routes>
     </div>
  );
}

export default App;
