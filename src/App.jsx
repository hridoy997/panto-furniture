import { Link, Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { ThemeProvider } from './Context/ThemeContext';
import { CartProvider } from './Context/CartContext';

function App() {

  return (
    <ThemeProvider>
      <CartProvider>
        <Navbar />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
