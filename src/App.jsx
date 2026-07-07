import { Link, Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  )
}

export default App
