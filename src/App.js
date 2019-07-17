import React, { Component } from 'react';
import updateFeature from './updateFeature.js';
import './App.css';
import Total from './Total/Total';
import Features from './Features/Features';
import Summary from './Summary/Summary';

updateFeature(feature, newValue) 
  const selected = Object.assign({}, this.state.selected);
  selected[feature] = newValue;
  this.setState({
    selected
  });


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  render() {      
    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>  
        </header>      
        <main>
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <Features />
          </section>
          <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            <Summary />
            <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              <div className="summary__total__value">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(<Total />) }
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;  
