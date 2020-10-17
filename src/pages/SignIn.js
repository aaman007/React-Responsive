import React from "react";
import { Link } from 'react-router-dom';

import Footer from "../components/Footer";
import Services from "../components/Services";

const SignIn = () => {
    return (
        <>
            <h1>Sign In</h1>
            <Services />
            <Link to={"/"}> Go To Home </Link>
            <Footer />
        </>
    )
}

export default SignIn;