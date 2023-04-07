import React from "react";
import Preload from "./elements/Preload";
import Banner from "./elements/Banner";
import Footer from "../components/Footer"
import Layout from "./elements/Layout";

const Body = () => {
    return (
        <>
            <div data-spy="scroll" class="body">
                {/* <Preload /> */}
                <Banner />

                <Layout />

                <Footer />
            </div>
        </>
    )
}

export default Body;