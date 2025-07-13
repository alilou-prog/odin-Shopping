import { Link, Outlet } from "react-router-dom";
import "@/styles/App.css"

function App() {
  return (
    <>
      <nav className="nav">
        <Link to="home">Home</Link>
        <Link to="shopping">Shop</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App
