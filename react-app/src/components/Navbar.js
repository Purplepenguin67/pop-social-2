import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
// import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../utils/auth';
import Form from 'react-bootstrap/Form';

// Update Navbar

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const shirkhand = { fontFamily: 'Shrikhand', fontSize: 35, color:'#FFA3BB' };
  return (
    <>
      <Navbar bg='white' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand style={shirkhand} as={Link} to='/'>
            PopSocial
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav class="navbar-nav ml-auto" >
              <Form.Control className='square rounded-pill' style={{color:'lightgrey'}} placeholder="Search For Friends" controlId="formBasicSearch" />
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link style={{ color:'black' }} as={Link} to='/saved'>
                    See Your Books
                  </Nav.Link>
                  <Nav.Link style={{ color:'black' }} onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link style={{ color:'black' }} onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link style={{ color:'black' }} eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link style={{ color:'black' }} eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                {/* <SignUpForm handleModalClose={() => setShowModal(false)} /> */}
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;