
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'react-bootstrap';
//import { Dropdown } from 'react-bootstrap';
//import { Container } from 'react-bootstrap';
//import Nav from 'react-bootstrap/Nav';
//import { Navbar } from 'react-bootstrap';
//import { Card } from 'react-bootstrap';
import Yemek from './components/Yemek';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from './pages2/BlogList';
import BlogEkle from './pages2/BlogEkle';
import Navigation from './components/Navigation';
import BaseLayout from './layouts/BaseLayout';
import BlogDetay from './pages2/BlogDetay';

//REDUX'U BAĞLAMA
import { Provider } from 'react-redux'
import store from './store/store';


function App() {

  return (
    //İMPORT ETTİĞİMİZ STORE'U  BURAYA VERMİŞ OLDUK
    <Provider store={store}>
      <div className="App">

        <BrowserRouter>
          <Routes>
            {/*Parent route */}
            <Route path='/' element={<BaseLayout />}>
              <Route index element={<BlogList />}></Route>
              {/*path = / dendiği zaman baselayout gelicek. başka bir şey verilirse de route index yazan kısma git*/}
              <Route path='/blogEkle' element={<BlogEkle />}></Route>
              <Route path='/blogDetay/:id' element={<BlogDetay />}></Route> {/*İD BİLGİSİ İLE GİT DEDİK */}
            </Route>
          </Routes>
        </BrowserRouter>

      </div>
    </Provider>
  );
}
export default App;


{/*
      <h1>Merhaba Dünya</h1>
      <Button as="a" variant="danger" style={{marginBottom:'10px'}}>
        Button as link
      </Button>


      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>


      <Navbar bg="dark" data-bs-theme="dark" style={{marginTop:'10px'}}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <br /> 
    */}















