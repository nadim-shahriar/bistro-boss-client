import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <div className="my-[80px]">
            <SectionTitle
                heading={"TesTimonials"}
                subHeading={"---What Our Client Says---"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="text-center">
                            <Rating
                                className="mx-auto my-10"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <div>
                                <FaQuoteLeft 
                                    className="mx-auto text-6xl my-8"
                                ></FaQuoteLeft>
                                <p className="md:px-52 mb-3 cinzelFont">{review.details}</p>
                                <p className="text-3xl cinzelFont font-semibold uppercase text-yellow-600">{review.name}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;