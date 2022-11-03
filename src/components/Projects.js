import {Container, Row, Col, Nav, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import projImg1 from "../assets/img/project-img1.png";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Projects = () => {
    const projects = [
        {
            title: "First Grow",
            description: "Start with us",
            // imgUrl: projImg1
        }
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Grow with us</h2>
                        <p></p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-iterms-center" id="pills-tab">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">Donate Funds</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Grow Trees</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="third">Create Impact</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="tab-content">
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            <Col>
                                            {/* {
                                                projects.map((project, index) => {
                                                    return (
                                                        // <p>{project.title}</p>
                                                        <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                    )
                                                })
                                            } */}
                                            Help us grow trees by donating funds to any merchant you want to. Once you do, they will send you the proofs of your trees. You can also monitor their survival and impact.
                                            </Col>
                                            <Col>
                                            <button onClick={() => console.log('Donate Funds')}>Donate Funds<ArrowRightCircle size={25}/></button>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            <Col>
                                            Register yourself as a plant grower if you can handle various tree orders from all around the globe. Once you get the order, fulfil it and increase more trees. 
                                            </Col>
                                            <Col>
                                            <button onClick={() => console.log('Grow Trees')}>Grow Trees<ArrowRightCircle size={25}/></button>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                            <Col>Check how the entire globe is impacted by us planting the trees together.</Col>
                                            <Col><button onClick={() => console.log('Grow Trees')}>Impact<ArrowRightCircle size={25}/></button></Col>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={'colorSharp2'}></img> */}
        </section>
    )
}