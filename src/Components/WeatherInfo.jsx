import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class WeatherInfo extends Component {
  render() {
    console.log(this.props);
    return (
      <Row>
        <Col>
          <img src={this.props.data.icon} alt={this.props.weatherState} />
          <Card.Text>{this.props.data.weatherState}</Card.Text>
        </Col>
        <Col>
          <Card.Title>
            T: {this.props.data.temperature}
            {this.props.unit}
          </Card.Title>
          <Card.Text>Humedad: {this.props.data.humidity}</Card.Text>
          <Card.Text>Viento: {this.props.data.wind}</Card.Text>
        </Col>
      </Row>
    );
  }
}
/**/
export default WeatherInfo;
