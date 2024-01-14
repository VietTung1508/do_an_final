import React from 'react';
import Transition from "../../transition.jsx";
// import BestSeller from "./BestSeller.jsx";
// import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx";
// import HeroSection from "../../components/HeroSection/HeroSection.jsx";

// import HomeProducts from "./HomeProducts.jsx";
// import Masonry from "./Masonry.jsx";

import Discover from "../../components/Home/Discover.jsx";
import Front from "../../components/Home/Front";
import HProduct from "../../components/Home/HotProduct/HProduct.jsx";
import HowWeWorks from "../../components/Home/HowWeWorks.jsx";

import Banner01 from "../../components/Home/Banner01.jsx";
import Stats from "../../components/Home/Stats";

import Trusted from "../../components/Home/Trusted";
const Home = () => {
    return (
        <div
        >
            {/*<HeroSection/>*/}
            {/*<FeaturedProducts type={'trending'}/>*/}
            {/*/!*<BestSeller/>*!/*/}
            {/*<Masonry/>*/}

            <Front />
            <Stats />
            <HProduct />
            <Banner01 />
            <Discover />
            <HowWeWorks />
            <Trusted />
        </div>
    );
};

export default Transition(Home);
