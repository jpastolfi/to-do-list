import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import InputField from './components/InputField';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <InputField handleInput={ this.handleInput }/>
        <Footer />
      </div>
    );
  }
}

export default App;
