/* eslint-disable no-unused-vars */
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path='/checkout' element={<h1>Checkout!</h1>}>
              
            </Route>
            <Route path='/login' element={<h1>Login!</h1>}>
              
            </Route>
            {/** Default route page */}
            <Route path='/' element={
            <div 
            class='home-page' 
            data-controls='page-container' 
            aria-label='amazon'>
              <Header /> 
              <Footer />
            </div>
            } 
            />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
