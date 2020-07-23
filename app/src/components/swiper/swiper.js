import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RadioForm from "..//forms/radio/radio";
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default class FormSwiper extends Component {
  render() {
    // removing undefined from array object
    const questions = this.props.questions
      .map((x) => x.content.de_DE)
      .filter(Boolean);

    // console.log(questions.map(x => x.question))

    return (
      <Container fluid>
        <Row>
          <Col sm={8} xs={8} md={8} lg={8} className="swiper">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {questions.map((questions, index) => (
                <SwiperSlide key={index}>
                  <h5>{questions.question}</h5>
                  <RadioForm />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    );
  }
}
