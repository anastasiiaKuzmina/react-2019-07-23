import React, { Component } from "react"
import { Layout } from "antd"
import './app.css';
import Header from '../header'
import RestaurantList from "../restaurant-list"
// import RestaurantsMap from '../restaurants-map'

class App extends Component {
  componentDidMount() {
    if (this.props.fetchData) {
      this.props.fetchData();
    }
  }

  render() {
    return (
      <Layout>
        <Header />
        <main role="main">
          <RestaurantList restaurants={this.props.restaurants} />
          {/*<RestaurantsMap restaurants={this.props.restaurants} />*/}
        </main>
      </Layout>
    );
  }
}

export default App