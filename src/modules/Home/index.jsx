import React, { PureComponent } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Popup from './Main/Sections/Tours/Popup';
import './index.scss';
import Navbar from './Navbar';
class Home extends PureComponent {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <Main />
        <Footer />
        <Popup />
      </>
    );
  }
}

export default Home;
