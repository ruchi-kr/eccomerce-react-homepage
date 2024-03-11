import React from 'react'                                     //importing react
import Header from './Components/Header'                     //importing Header component 
import HomeCover from './Components/HomeCover'               //importing HomeCover component
import Slider from './Components/Slider'                     //importing Slider component
import Footer from './Components/Footer'                     //importing Footer component
const Home = () => {                                        //Home functional component
    return (
        <>
            <Header />
            <HomeCover />
            <Slider />
            <Footer />
        </>)
}

export default Home                                           //exporting Home