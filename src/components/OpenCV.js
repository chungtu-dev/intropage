import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import ResponsiveScr from './common/ResponsiveScr'

const OpenCV = () => {
    const [active, setActive] = useState(false);
    const [show, setShow] = useState(true);

    const viewPort = ResponsiveScr()
    const isMobile = (viewPort.width <= 480);
    const isTablet = (viewPort.width >= 481 && viewPort.width <= 768);
    const isLaptopScreen = (viewPort.width >= 769 && viewPort.width <= 1024);
    // const isDesktopScreen = (viewPort.width >= 1025 && viewPort.width <= 1200);
    // const extraLargeScreen = (viewPort.width >= 1201);

    useEffect(() => {
        if (isMobile || isTablet || isLaptopScreen) {
            setShow(false);
        } else {
            setShow(true);
        }
    }, []);

    return (
        <div>
            {
                show && <section className='cv-contact' id="cv-contact">
                    <div className='btn-show-hide'>
                        <>
                            <button onClick={() => setActive(true)}>Read More CV</button>
                            <button onClick={() => setActive(false)}>Hidden</button>
                            <span></span>
                            <a href="NguyenChungTu-CV.pdf" download style={{ textAlign: "center" }}>
                                <button >Download CV</button>
                            </a>
                        </>
                    </div>
                    <Container>
                        <Row>
                            <Col size={12}>
                                {active && <iframe src="NguyenChungTu-CV.pdf"></iframe>}
                            </Col>
                        </Row>
                    </Container>
                    <img className="background-image-right" src={colorSharp2}></img>
                </section>
            }
        </div>
    );
};

export default OpenCV;