import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import ResponsiveScr from './common/ResponsiveScr'

export const Newsletter = () => {
  const [show, setShow] = useState(true);

  const viewPort = ResponsiveScr()
  const isMobile = (viewPort.width <= 480);
  const isTablet = (viewPort.width >= 481 && viewPort.width <= 768);
  const isLaptopScreen = (viewPort.width >= 769 && viewPort.width <= 1024);

  useEffect(() => {
    if (isMobile || isTablet || isLaptopScreen) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, []);

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={12} xl={12}>
            <ul>
              <li>
                <span>Mobile: 0981821203</span>
              </li>
              <li>
                <span>Mail: nguyentutsq@gmail.com</span>
              </li>
              <li>
                <span>Place: Hoc Mon town, HCM City</span>
              </li>
            </ul>
          </Col>
          {
            show && <a href="#cv-contact" style={{ textAlign: "center" }}>
              <button className='btn-down-cv'>Read More CV <ArrowDownCircle size={25} /></button>
            </a>
          }
        </Row>
      </div>
    </Col>
  )
}
