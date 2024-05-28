/* import React from 'react'; */
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Leaderboard from './components/Leaderboard';
export default function App() {
  return (
    <div className='mx-1'>
    
       <Navbar/>
        <Leaderboard/>
    </div>
  );
}