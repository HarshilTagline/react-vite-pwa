import { useEffect, useState } from 'react'
import { Alert, Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import './App.css'
import Home from './components/home';
import Users from './components/Users';
import About from './components/About';

function App() {
  const [notification, setNotification] = useState({
    mode: "online",
    message: "",
    type: "",
    show: false
  });

  useEffect(() => {
    window.ononline = () => {
      setNotification({
        mode: 'online', message: 'You are now connected to the network 😉',type: 'success', show: true
      })
    };
    window.onoffline = () => {
      setNotification({
        mode: 'offline', message: 'You are now disconnected to the network 🤷‍♀️❌',type: 'danger', show: true
      })
    };
  }, []);

  const onClose = () => {
    setNotification({
      ...notification,
      message: "",
      type: "",
      show: false
    })
  }

  return (
    <div className="App">
    <BrowserRouter>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/users">Users</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {notification.show && <Alert variant={notification.type} dismissible onClose={onClose}>{notification.message}</Alert>}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
