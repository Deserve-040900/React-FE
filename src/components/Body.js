import React from "react";
import Preload from "./elements/Preload";
import Banner from "./elements/Banner";

const Body = () => {
    return (
        <>
            <div data-spy="scroll" class="">
                {/* <Preload /> */}
                <Banner />
            </div>
        </>
    )
}

export default Body;