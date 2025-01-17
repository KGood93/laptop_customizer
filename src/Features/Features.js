import React, { Component } from 'react';

class Features extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(key, item) {
        this.props.onFeatureChange(key, item)
    }

   render() {
    console.log("Object[keys] =", this.props.features)

    const features = Object.keys(this.props.features)
    .map(key => {
        console.log("key =", key)
        console.log("feature[key] =", this.props.features[key])
      const options = this.props.features[key].map((item, index) => {
        const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return <li key={index} className="feature__item">
          <div className={featureClass}
            
            onClick={e => this.handleClick(key, item)}>
              { item.name }
              ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(item.cost) })
          </div>
        </li>
      });

      return <div className="feature" key={key}>
        <div className="feature__name">{key}</div>
        <ul className="feature__list">
          { options }
        </ul>
      </div>
    });

    return features
   }
}

export default Features