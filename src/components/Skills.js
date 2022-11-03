import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Col, Row} from "react-bootstrap";
// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";

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
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>
                                Grow with us
                            </h2>
                            <p>
                                We can connect you with different merchants and help you grow more trees on our beautiful planet. 
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    {/* <img src={meter1} alt="Image"/> */}
                                    <h5>Grow Trees</h5>
                                </div>
                                <div className="item">
                                    <img src={''} alt="Image"/>
                                    <h5>See Impact</h5>
                                </div>
                                <div className="item">
                                    <img src={''} alt="Image"/>
                                    <h5>Love Environment</h5>
                                </div>
                                <div className="item">
                                    <img src={''} alt="Image"/>
                                    <h5>Connect with Merchants</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" src={colorSharp}/> */}
        </section>
    )
}