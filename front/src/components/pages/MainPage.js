import Header from "../header/Header";
import SliderBlock from "../landingBlocks/sliderBlock/SliderBlock";
import ServiceBlock from "../landingBlocks/serviceBlock/ServiceBlock";
import ReasonsBLock from "../landingBlocks/reasonsBlock/ReasonsBlock";
import AboutBlock from "../landingBlocks/aboutBlock/AboutBLock"
import VideoBlock from "../landingBlocks/videoBlock/VideoBlock";
import GalleryBlock from "../landingBlocks/galleryBlock/GalleryBlock";
import EmployeesBlock from "../landingBlocks/employeesBlock/EmployeesBlock";
import ReviewsBlock from "../landingBlocks/reviewsBlock/ReviewsBlock";
import FormBlock from "../landingBlocks/formBlock/FormBlock";
import LastNewsBlock from "../landingBlocks/lastNewsBlock/LastNewsBlock";
import LocationBlock from "../landingBlocks/locationBlock/LocationBlock";
import Footer from "../footer/Footer";

const MainPage = () => {
    return(
        <>
            <Header/>
            <SliderBlock/>
            <ServiceBlock/>
            <ReasonsBLock/>
            <VideoBlock/>
            <AboutBlock/>
            <GalleryBlock/>
            <EmployeesBlock/>
            <ReviewsBlock/>
            <LastNewsBlock/>
            <LocationBlock/>
            <Footer/>
        </>
    )
}

export default MainPage;