import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Service from './pages/Service/Services';
import Contact from './pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/FooterComponent/Footer';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/services"><Service /></Route>
            <Route path="/projects"><Projects /></Route>
            <Route path="/contact"><Contact /></Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
