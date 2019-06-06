import React, { Component } from "react";
import getWeatherData from "./weatherServices";
import WeatherInfo from "./WeatherInfo";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Spinner from "react-bootstrap/Spinner";

const apiKey = "07b35950ef4a0b7d523fb06e07a2a320";

class Weather extends Component {
  state = {
    city: "Buenos Aires, Argentina",
    cityId: "3433955",
    unit: "",
    data: {
      temperature: null,
      weatherState: null,
      humidity: null,
      wind: null,
      icon: null
    },
    isButtonDisabled: true,
    isLoading: true
  };

  convertToCelsius = () => {
    if (this.state.unit === "K") {
      this.setState({
        unit: "°C",
        data: {
          ...this.state.data,
          temperature: Number((this.state.data.temperature - 273.15).toFixed(2))
        }
      });
    } else if (this.state.unit === "°F") {
      this.setState({
        unit: "°C",
        data: {
          ...this.state.data,
          temperature: Number(
            (((this.state.data.temperature - 32) * 5) / 9).toFixed(2)
          )
        }
      });
    }
  };

  convertToKelvin = () => {
    if (this.state.unit === "°C") {
      this.setState({
        unit: "K",
        data: {
          ...this.state.data,
          temperature: Number(this.state.data.temperature + 273.15).toFixed(2)
        }
      });
    } else if (this.state.unit === "°F") {
      this.setState({
        unit: "K",
        data: {
          ...this.state.data,
          temperature: (
            ((this.state.data.temperature - 32) * 5) / 9 +
            273.15
          ).toFixed(2)
        }
      });
    }
  };

  convertToFahrenheit = () => {
    if (this.state.unit === "K") {
      this.setState({
        unit: "°F",
        data: {
          ...this.state.data,
          temperature: (
            ((this.state.data.temperature - 273.15) * 9) / 5 +
            32
          ).toFixed(2)
        }
      });
    } else if (this.state.unit === "°C") {
      this.setState({
        unit: "°F",
        data: {
          ...this.state.data,
          temperature: ((this.state.data.temperature * 9) / 5 + 32).toFixed(2)
        }
      });
    }
  };

  getUrl = () => {
    return `https://api.openweathermap.org/data/2.5/weather?id=${
      this.state.cityId
    }&appid=${apiKey}`;
  };

  handleUpdate = () => {
    this.setState({ isButtonDisabled: true, isLoading: false, unit: "" });
    fetch(this.getUrl())
      .then(data => {
        return data.json();
      })
      .then(weatherData => {
        const data = getWeatherData(weatherData);
        this.setState({
          unit: "°C",
          data,
          isButtonDisabled: false,
          isLoading: true
        });
      });
  };

  handleCity = (city, cityId) => {
    this.setState({ city: city, cityId: cityId });
  };

  componentDidMount() {
    this.handleUpdate();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.cityId !== prevState.cityId) {
      this.handleUpdate();
    }
  }

  render() {
    const { data, city, unit, isButtonDisabled, isLoading } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Title>{city}</Card.Title>
              {isLoading ? (
                <WeatherInfo data={data} unit={unit} />
              ) : (
                <Container className="my-4">
                  <Spinner
                    animation="border"
                    role="status"
                    className="justify-content-center"
                  >
                    <span className="sr-only">Cargando...</span>
                  </Spinner>
                </Container>
              )}
              <ButtonGroup className="mt-2" aria-label="Basic example">
                <Button
                  variant="primary"
                  className={unit === "°C" ? "active" : ""}
                  onClick={this.convertToCelsius}
                  disabled={isButtonDisabled}
                >
                  °C
                </Button>
                <Button
                  variant="primary"
                  className={unit === "°F" ? "active" : ""}
                  onClick={this.convertToFahrenheit}
                  disabled={isButtonDisabled}
                >
                  °F
                </Button>
                <Button
                  variant="primary"
                  className={unit === "K" ? "active" : ""}
                  onClick={this.convertToKelvin}
                  disabled={isButtonDisabled}
                >
                  K
                </Button>
              </ButtonGroup>
            </Card>
          </Col>
          <Col>
            <ButtonGroup vertical>
              <Button
                onClick={() => this.handleCity("Asunción, Paraguay", "3474570")}
                disabled={isButtonDisabled}
              >
                Asunción, Paraguay
              </Button>
              <Button
                onClick={() => this.handleCity("Bogota, Colombia", "3688689")}
                disabled={isButtonDisabled}
              >
                Bogota, Colombia
              </Button>
              <Button
                onClick={() =>
                  this.handleCity("Buenos Aires, Argentina", "3433955")
                }
                disabled={isButtonDisabled}
              >
                Buenos Aires, Argentina
              </Button>
              <Button
                onClick={() => this.handleCity("Brasilia, Brasil", "3469058")}
                disabled={isButtonDisabled}
              >
                Brasilia, Brasil
              </Button>
              <Button
                onClick={() => this.handleCity("Caracas, Venezuela", "3646738")}
                disabled={isButtonDisabled}
              >
                Caracas, Venezuela
              </Button>
              <Button
                onClick={() => this.handleCity("Lima, Perú", "3936456")}
                disabled={isButtonDisabled}
              >
                Lima, Perú
              </Button>
              <Button
                onClick={() =>
                  this.handleCity("Montevideo, Uruguay", "3441575")
                }
                disabled={isButtonDisabled}
              >
                Montevideo, Uruguay
              </Button>
              <Button
                onClick={() => this.handleCity("Quito, Ecuador", "3652462")}
                disabled={isButtonDisabled}
              >
                Quito, Ecuador
              </Button>
              <Button
                onClick={() =>
                  this.handleCity("Santiago de Chile, Chile", "3871336")
                }
                disabled={isButtonDisabled}
              >
                Santiago de Chile, Chile
              </Button>
              <Button
                onClick={() => this.handleCity("Sucre, Bolivia", "3903987")}
                disabled={isButtonDisabled}
              >
                Sucre, Bolivia
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Weather;
