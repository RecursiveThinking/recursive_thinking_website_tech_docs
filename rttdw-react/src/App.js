import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import CardBody from './CardBody/CardBody';
import Footer from './Footer/Footer';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <div>
          <Header/>
        </div>
        <div>
          {/* Currently have the z-index up to get the box shadow. Better way? */}
          <Sidebar/>
        </div>
        <div>
          <CardBody/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
