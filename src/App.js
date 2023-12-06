import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/Home';
import Favorites from './screens/Favorites';

class App extends React.Component {
  render() {
    const appStyle = {
      flexDirection: 'column',
      alignItems: 'center',
      margin:10
    };

    const navbarStyle = {
      backgroundColor: '#993',
      padding: '10px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '99%',
    };

    const navLinksStyle = {
      display: 'flex',
    };

    const navLinkStyle = {
      margin: '0 10px',
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
    };

    return (
      <Router>
        <div style={appStyle}>
          <nav style={navbarStyle}>
            <div>
              <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                Practice Task
              </p>
            </div>
            <div style={navLinksStyle}>
              <ul>
                <li>
                  <Link to="/" style={navLinkStyle}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/favorites" style={navLinkStyle}>
                    Favorites
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
