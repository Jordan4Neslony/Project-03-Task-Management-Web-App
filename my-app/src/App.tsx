import './App.css'
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'
import brandLogo from './assets/Images/Tasker-Doer-Fake-Brand.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (<div>
    {/*Vertical Style Bars*/}
    <div className="left-vertical-bar"></div>
    <div className="right-vertical-bar"></div>
    {/*Content Spacer*/}
    <div style={{ marginBottom: '20%' }}></div>

    {/*Introductory Text*/}
    <div className="intro-container mx-20" id="Row-Column-Layout">
      <div className="row justify-content-center align-items-center g-3">
        <div className="col flex-column align-items-center">
          <div className="description text-start">
            {/*Heading Text*/}
            <h1>Hi! Welcome to your to do list!</h1>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          {/*To-Do-List-Brand-Logo*/}
          <img src={brandLogo} className="intro-image-border" alt="To-Do-List brand logo"
            width="200" height="200"></img>
        </div>
      </div>
    </div>
  </div>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {

  return (
    <BrowserRouter>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      {/* Navigation */}
      <nav className="navigational-bar" id="headerNavigation">
        <h1 className="nav-title">To-Do-App</h1>
        <ul className="nav-list links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
