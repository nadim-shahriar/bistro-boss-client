import Banner from "../Banner/Banner";
import Category from "../Catagory/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import ChefService from "../ChefService/ChefService";
import Recommendation from "../Recommendation/Recommendation";
import CallUs from "../CallUs/CallUs";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto">
                <Category></Category>
                <ChefService></ChefService>
                <PopularMenu></PopularMenu>
                <CallUs></CallUs>
                <Recommendation></Recommendation>
            </div>
            <Featured></Featured>
            <div className="max-w-screen-xl mx-auto">
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;