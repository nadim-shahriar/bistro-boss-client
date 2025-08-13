import Cover from '../../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet-async';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import ItemCover from '../../../shared/ItemCover/ItemCover';
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu//salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const dessert = menu.filter(item => item.category === 'dessert')


    return (

        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title={'Our Menu'}
                subHeading={'Would you like to try a dish?'}
            ></Cover>
            <div className='max-w-screen-xl mx-auto my-[80px]'>
                <SectionTitle
                    heading={"Today's Offer"}
                    subHeading={"---Don't Miss---"}
                ></SectionTitle>
                <MenuCategory
                    title={'offered'}
                    item={offered}
                ></MenuCategory>
            </div>
            <div>
                <ItemCover
                    title={"desserts"}
                    img={desertImg}
                ></ItemCover>
                <MenuCategory
                    title={'dessert'}
                    item={dessert}
                ></MenuCategory>
            </div>
            <div>
                <ItemCover
                    title={"pizza"}
                    img={pizzaImg}
                ></ItemCover>
                <MenuCategory
                    title={'pizza'}
                    item={pizza}
                ></MenuCategory>
            </div>
            <div>
                <ItemCover
                    title={"Salads"}
                    img={saladImg}
                ></ItemCover>
                <MenuCategory
                    title={'salad'}
                    item={salad}
                ></MenuCategory>
            </div>
            <div>
                <ItemCover
                    title={"soups"}
                    img={soupImg}
                ></ItemCover>
                <MenuCategory
                    title={'soup'}
                    item={soup}
                ></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;