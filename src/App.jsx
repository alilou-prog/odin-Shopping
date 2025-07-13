import { Link, Outlet } from "react-router-dom";
import styles from "./styles/App.module.css"

function App() {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="home">Home</Link>
        <Link to="shopping">Shop</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App
