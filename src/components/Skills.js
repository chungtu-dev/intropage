import Star from "../assets/img/Star.svg";
import Shield from "../assets/img/Shield.svg";
import Send from "../assets/img/Send.svg";
import Carousel from 'react-bootstrap/Carousel';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p style={{ margin: '40px' }}></p>
              <Carousel interval={1000} responsive={responsive} className="owl-carousel owl-theme skill-slider">
                <Carousel.Item>
                  <div className="item">
                    <img src={Star} alt="" />
                    <h3>Skills</h3>
                    <h6>Javascript Es6 - Vue JS - React Native - React JS</h6>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="item">
                    <img src={Shield} alt="" />
                    <h3>Activitives</h3>
                    <h6>NGN Corp</h6>
                    <small>Participating develop website introduce and mobile chat application,...</small>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="item">
                    <img src={Send} alt="" />
                    <h3>Experience</h3>
                    <h6>MWG Software</h6>
                    <small>Front-end Developer VueJS, Javascript Dev UX/UI, Web API</small>
                  </div>
                </Carousel.Item>
              </Carousel>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
