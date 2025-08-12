import Cover from "../../../shared/Cover/Cover";
import img from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SaladTab from "../SaladTab/SaladTab";
import PizzaTab from "../PizzaTab/PizzaTab";
import SoupTab from "../SoupTab/SoupTab";
import DessertTab from "../DessertTab/DessertTab";
import DrinksTab from "../DrinksTab/DrinksTab";

const Order = () => {

    return (
        <div>
            <Cover
                img={img}
                title={'Our shop'}
                subHeading={'Would you like to try a dish?'}
            ></Cover>

            {/* name of each tab group should be unique */}
            <div className="max-w-screen-xl mx-auto my-[80px]">
                <div className="tabs justify-center tabs-border">
                    <input defaultChecked type="radio" name="my_tabs_2" className="tab text-lg uppercase font-semibold checked:!text-yellow-600 !text-black hover:!text-gray-500" aria-label="Salad" />
                    <div className="tab-content">
                        <SaladTab></SaladTab>
                    </div>
                    <input type="radio" name="my_tabs_2" className="tab text-lg uppercase font-semibold checked:!text-yellow-600 !text-black hover:!text-gray-500" aria-label="Pizza" />
                    <div className="tab-content">
                        <PizzaTab></PizzaTab>
                    </div>
                    <input type="radio" name="my_tabs_2" className="tab text-lg uppercase font-semibold checked:!text-yellow-600 !text-black hover:!text-gray-500" aria-label="Soup" />
                    <div className="tab-content">
                        <SoupTab></SoupTab>
                    </div>
                    <input type="radio" name="my_tabs_2" className="tab text-lg uppercase font-semibold checked:!text-yellow-600 !text-black hover:!text-gray-500" aria-label="Dessert" />
                    <div className="tab-content">
                        <DessertTab></DessertTab>
                    </div>
                    <input type="radio" name="my_tabs_2" className="tab text-lg uppercase font-semibold checked:!text-yellow-600 !text-black hover:!text-gray-500" aria-label="Drinks" />
                    <div className="tab-content">
                        <DrinksTab></DrinksTab>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Order;