import { Link, Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { ThemeProvider } from './Context/ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
