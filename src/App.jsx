import { Link, Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
