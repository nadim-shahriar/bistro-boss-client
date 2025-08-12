import React from 'react';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const DrinksTab = () => {
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div className="grid grid-cols-3 gap-5 mt-10">
            {
                drinks.map(item => <FoodCard
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default DrinksTab;