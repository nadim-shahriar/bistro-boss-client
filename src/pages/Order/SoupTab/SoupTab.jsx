import FoodCard from "../../../Components/FoodCard/FoodCard";
import useMenu from "../../../hooks/useMenu";

const SoupTab = () => {
    const [menu] = useMenu();
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div className="grid grid-cols-3 gap-5 mt-10">
            {
                soup.map(item => <FoodCard
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default SoupTab;