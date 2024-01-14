import React from 'react';
// import style from './HeroSection.scss'
import './HeroSection.scss'
import HeroImg from '/images/HeroImg.png'
import {FaArrowRight, FaShoppingBag} from "react-icons/fa";
import {motion} from 'framer-motion'
const HeroSection = () => {
    const transition = {duration: 3, type: "spring"}
    return (
        <div className={"heroContainer"}>
            {/*left*/}
            <div className="h_sides">
                <div className={'md:w-1/2'}>
                    <h1 className={'text-5xl font-light mb-5 text-left capitalize'}>Bộ sưu tập</h1>
                    <p className={'text-xl mb-7'}>Khám phá ngay...</p>
                    <button
                        className={'bg-Black hover:bg-amber-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2'}>
                        <FaShoppingBag className={'inline-flex'}/>
                        Shop Now
                    </button>
                </div>
                {/*<span className={'text1'}>skin protection cream</span>*/}
                {/*<div className="text2">*/}
                {/*    <span>aaa</span>*/}
                {/*    <span>{" "} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, exercitationem.</span>*/}
                {/*</div>*/}
            </div>
            {/*middle*/}
            <div className={'heroWrapper'}>

                {/*Circle*/}
                <motion.div
                    initial = {{bottom: "2rem"}}
                    whileInView = {{bottom: "0rem"}}
                    transition={transition}
                    className="blueCircle"/>
                {/*CentralImage*/}
                <motion.img
                    initial = {{bottom: "-2rem"}}
                    whileInView = {{bottom: "0rem"}}
                    transition={transition}
                    src={HeroImg} alt="" width={600}/>
                {/*Cart*/}
                <motion.div
                    initial = {{right: "4%"}}
                    whileInView = {{right: "2%"}}
                    transition={transition}
                    className="cart2">
                    <FaShoppingBag className={'theBag'}/>
                    <div className="offering">
                        <span>Best Offers</span>
                        <FaArrowRight className={'theArrow'}/>
                    </div>
                </motion.div>
            </div>
            {/*right*/}
            {/*<div className={'h_sides'}>*/}
            {/*    <span className={'text-5xl font-light mb-5 text-right capitalize'}>Tập sưu bộ</span>*/}
            {/*    <div className="text-right">*/}
            {/*        <span className={'text-xl mb-7'}>Lorem ipsum</span>*/}
            {/*        /!*<span>{" "} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, exercitationem.</span>*!/*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>

    );
};

export default HeroSection;