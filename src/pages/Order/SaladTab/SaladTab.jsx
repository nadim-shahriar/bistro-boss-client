import FoodCard from "../../../Components/FoodCard/FoodCard";
import useMenu from "../../../hooks/useMenu";

const SaladTab = () => {
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad')
    return (
        <div className="grid grid-cols-3 gap-5 mt-10">
            {
                salad.map(item => <FoodCard
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default SaladTab;