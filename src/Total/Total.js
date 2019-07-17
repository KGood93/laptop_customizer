import React, {Component} from 'react';
import Summary from './Summary/Summary';

class Total extends Component {
    total = Object.keys(this.state.selected)
    .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0); 
}

export default Total;