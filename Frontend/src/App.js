import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    customers: []
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/customer');
    const body = await response.json();
    this.setState({customers: body});
  }

  render() {
    const {customers} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-intro">
            <h2>Customers:</h2>
            {customers.map(customer => 
              <div key={customer.customerId}>
                <p>{customer.name}</p>
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;