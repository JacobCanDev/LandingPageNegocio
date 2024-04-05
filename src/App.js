import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {Routes,Route} from 'react-router-dom';
function App() {
  return (

    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
       <Route
        path='/About'
        element={<About />}
      />
       <Route
        path='/Contact'
        element={<Contact />}
      />


<Route
        path='/Footer'
        element={<Footer />}
      />
    </Routes>

    
    // <div className="App">
    //   <Home />
    //   <About />
    //   <Work />
    //   <Testimonial />
    //   <Contact />
    //   <Footer />
    // </div>
  );
}

export default App;
