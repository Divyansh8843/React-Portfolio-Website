import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  App from './App.jsx'
import About from "./pages/About/About.jsx";
import Resume from "./pages/Resume/Resume.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx"
import Blog from './pages/Blog/Blog.jsx';
import Contact from './pages/Contact/Contact.jsx';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<About />} />
          <Route path="resume" element={<Resume />}></Route>
          <Route path="portfolio" element={<Portfolio/>}></Route>
          <Route path="blogs" element={<Blog/>}></Route>
          <Route path="contacts" element={<Contact/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);