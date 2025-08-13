import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './swiper.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div >
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="grid grid-cols-3 gap-5 my-10">
                        {
                            items.slice(0, 6).map(item => <FoodCard
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </SwiperSlide>
                {
                    items.length > 6 && <SwiperSlide>
                        <div className="grid grid-cols-3 gap-5 my-10">
                            {
                                items.slice(6, 12).map(item => <FoodCard
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>
                    </SwiperSlide>}
                {
                    items.length > 12 && <SwiperSlide>
                        <div className="grid grid-cols-3 gap-5 my-10">
                            {
                                items.slice(12, items.length).map(item => <FoodCard
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>
                    </SwiperSlide>}
            </Swiper>
        </div>

    );
};

export default OrderTab;