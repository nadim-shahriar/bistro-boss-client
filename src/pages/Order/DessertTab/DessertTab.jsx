import FoodCard from "../../../Components/FoodCard/FoodCard";
import useMenu from "../../../hooks/useMenu";

const DessertTab = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    return (
        <div className="grid grid-cols-3 gap-5 mt-10">
            {
                dessert.map(item => <FoodCard
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default DessertTab;