import { Col, Row } from "react-bootstrap";
import { ArrowDownCircle } from 'react-bootstrap-icons';
export const Newsletter = () => {

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
            <a href="NguyenChungTu-CV.pdf" download style={{textAlign: "center"}}>
              <button>Download My CV <ArrowDownCircle size={25} /></button>
            </a>
          </Row>
        </div>
      </Col>
  )
}
