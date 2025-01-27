import { Outlet } from 'react-router'
import './App.css'
import Aside from './Components/Aside'
import Navbar from './Components/Navbar'
export default function App() {
  return (
    <>
       <Aside/>
       <div className="main-content">
       <Navbar/>
      <section style={{scrollBehavior: "smooth" }}>
          <Outlet/>
      </section>
      </div>
    </>
  )
}