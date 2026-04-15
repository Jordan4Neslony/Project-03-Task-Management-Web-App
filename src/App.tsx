import './custom.scss';
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import brandLogo from './assets/Images/Tasker-Doer-Fake-Brand.png';
import ContactForm from './assets/Components/Contact-Form';
import TodoApp from './assets/Components/Todo-App';
import { Routes, Route, Link, HashRouter } from 'react-router-dom';

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

function Todo() {
  return (
    <div>
      {/*Vertical Style Bars*/}
      <div className="left-vertical-bar"></div>
      <div className="right-vertical-bar"></div>
      {/*Content Spacer*/}
      <div style={{ marginBottom: '20%' }}></div>
      {/*Todo App Section*/}
      <TodoApp></TodoApp>
    </div>
  );

}

function Contact() {
  return (
    <div>
      {/*Vertical Style Bars*/}
      <div className="left-vertical-bar"></div>
      <div className="right-vertical-bar"></div>
      {/*Content Spacer*/}
      <div style={{ marginBottom: '20%' }}></div>

      {/*Survey*/}
      <ContactForm></ContactForm>
    </div>
  );
}

function App() {

  return (
    <HashRouter>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      {/* Navigation */}
      <nav className="navigational-bar navbar navbar-expand-md" id="headerNavigation">
        <div className="container-fluid">
          <h1 className="nav-title">To-Do-App</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="nav-list links nav ">
              <li className="nav-item text-light"><Link to="/" className='nav-link'>Home</Link></li>
              <li className="nav-item text-light"><Link to="/Todo" className='nav-link'>Todo</Link></li>
              <li className="nav-item text-light"><Link to="/contact" className='nav-link'>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}

export default App