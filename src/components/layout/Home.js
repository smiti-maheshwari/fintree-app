import React, {Fragment} from "react";
import { Banner } from '../Banner';
// import { Skills } from '../Skills';
import {Projects} from '../Projects';
// import {Testing} from '../Testing';
import { NavBar } from '../NavBar';
import { Footer } from "../Footer";

const Home = () => {
    return <Fragment>
        <NavBar />
        <Banner />
        {/* <Testing /> */}
        {/* <Skills /> */}
        <Projects />
        <Footer />
    </Fragment>
}

export default Home;