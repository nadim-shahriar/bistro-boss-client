import Cover from "../../../shared/Cover/Cover";
import img from '../../../assets/shop/banner2.jpg'
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks', 'offered']
    const { category } = useParams()

    const initialIndex = categories.indexOf(category)


    const [tabIndex, setTabIndex] = useState(initialIndex)


    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
            <Cover
                img={img}
                title={'Our shop'}
                subHeading={'Would you like to try a dish?'}
            ></Cover>

            {/* name of each tab group should be unique */}
            <div className="max-w-screen-xl mx-auto my-[80px]">
                <div className="tabs justify-center tabs-border">
                    <input
                        checked={tabIndex === 0}
                        onChange={() => setTabIndex(0)}
                        type="radio" name="my_tabs_2" className="tab text-lg uppercase font-semibold checked:!text-yellow-600 !text-black hover:!text-gray-500" aria-label="Salad" />
                    <div className="tab-content">
                        <OrderTab
                            items={salad}
                        ></OrderTab>
                        {/* <SaladTab></SaladTab> */}
                    </div>
                    <input
                        checked={tabIndex === 1}
                        onChange={() => setTabIndex(1)}
                        type="radio" name="my_tabs_2" className="tab text-lg uppercase font-semibold checked:!text-yellow-600 !text-black hover:!text-gray-500" aria-label="Pizza" />
                    <div className="tab-content">
                        <OrderTab
                            items={pizza}
                        ></OrderTab>
                    </div>
                    <input
                        checked={tabIndex === 2}
                        onChange={() => setTabIndex(2)}
                        type="radio" name="my_tabs_2" className="tab text-lg uppercase font-semibold checked:!text-yellow-600 !text-black hover:!text-gray-500" aria-label="Soup" />
                    <div className="tab-content">
                        <OrderTab
                            items={soup}
                        ></OrderTab>
                    </div>
                    <input
                        checked={tabIndex === 3}
                        onChange={() => setTabIndex(3)}
                        type="radio" name="my_tabs_2" className="tab text-lg uppercase font-semibold checked:!text-yellow-600 !text-black hover:!text-gray-500" aria-label="Dessert" />
                    <div className="tab-content">
                        <OrderTab
                            items={dessert}
                        ></OrderTab>
                    </div>
                    <input
                        checked={tabIndex === 4}
                        onChange={() => setTabIndex(4)}
                        type="radio" name="my_tabs_2" className="tab text-lg uppercase font-semibold checked:!text-yellow-600 !text-black hover:!text-gray-500" aria-label="Drinks" />
                    <div className="tab-content">
                        <OrderTab
                            items={drinks}
                        ></OrderTab>
                    </div>
                    <input
                        checked={tabIndex === 5}
                        onChange={() => setTabIndex(5)}
                        type="radio" name="my_tabs_2" className="tab text-lg uppercase font-semibold checked:!text-yellow-600 !text-black hover:!text-gray-500" aria-label="Offered" />
                    <div className="tab-content">
                        <OrderTab
                            items={offered}
                        ></OrderTab>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;