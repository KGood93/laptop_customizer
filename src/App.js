import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Summary from './Summary/Summary'
import Features from './Features/Features';


class App extends React.Component {
  constructor(state) {
    super(state)
    //console.log(props)
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
    this.updateFeature = this.updateFeature.bind(this)
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <main>
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <Features 
            features={this.props.features}
            update={(feature, newValue) => this.updateFeature(feature,newValue)}
            onFeatureChange = {this.updateFeature}
            selected={this.state.selected}
            />
            </section>
          <Summary selected={this.state.selected} />
        </main>
      </div>
    );
  }  

}

export default App;  
