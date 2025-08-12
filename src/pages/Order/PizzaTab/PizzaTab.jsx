
import React from 'react';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const PizzaTab = () => {
   const [menu] = useMenu();
    const pizza = menu.filter(item => item.category === 'pizza')
    return (
        <div className="grid grid-cols-3 gap-5  mt-10">
            {
                pizza.map(item => <FoodCard
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default PizzaTab;