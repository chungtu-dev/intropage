import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Newsletter } from "./Newsletter";
import ButtonTooltip from './common/ButtonTooltip'

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        {/* <span className='connect'>Connect</span> */}
        <ButtonTooltip/>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
          <Newsletter/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
