import React from "react";
import Header from "./components/navbar/navbar";
import FormSwiper from "./components/swiper/swiper";
import axios from "axios";
import "./App.scss";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://europe-west1-boobtech-29d0b.cloudfunctions.net/services/config/FOOBAR`
      )
      .then((res) => {
        const questions = res.data.data.quiz;
        const convert = Object.values(questions);
        this.setState({ questions: convert });
      });
  }

  render() {
    return (
      <div className="App">
        <h1> MockUp- Kleine Körbchen FitQuiz ! </h1>
        <FormSwiper questions={this.state.questions} />
      </div>
    );
  }
}

export default App;
