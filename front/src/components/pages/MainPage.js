import Header from "../header/Header";
import SliderBlock from "../landingBlocks/sliderBlock/SliderBlock";
import ServiceBlock from "../landingBlocks/serviceBlock/ServiceBlock";
import ReasonsBLock from "../landingBlocks/reasonsBlock/ReasonsBlock";
import AboutBlock from "../landingBlocks/aboutBlock/AboutBLock"
import GalleryBlock from "../landingBlocks/galleryBlock/GalleryBlock";

const MainPage = () => {
    return(
        <>
            <Header/>
            <SliderBlock/>
            <ServiceBlock/>
            <ReasonsBLock/>
            <AboutBlock/>
            <GalleryBlock/>
            <h1>Main Page</h1>
        </>
    )
}

export default MainPage;