import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class WeatherInfo extends Component {
  render() {
    const { data, unit, weatherState } = this.props;
    return (
      <Row>
        <Col>
          <img src={data.icon} alt={weatherState} />
          <Card.Text>{data.weatherState}</Card.Text>
        </Col>
        <Col>
          <Card.Title>
            T: {data.temperature}
            {unit}
          </Card.Title>
          <Card.Text>Humedad: {data.humidity}</Card.Text>
          <Card.Text>Viento: {data.wind}</Card.Text>
        </Col>
      </Row>
    );
  }
}
/**/
export default WeatherInfo;
