import React from 'react';

const FoodCard = ({item}) => {
    const {image, name, recipe} = item;
    return (
        <div className="card bg-base-200 rounded-none ">
            <figure className="">
                <img
                    src={image}
                    alt="Shoes"
                    className="h-[270px] object-cover w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title cinzelFont">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn bg-base-300 border-0 border-b-2 border-yellow-500 mt-3 uppercase text-yellow-500 hover:bg-slate-800">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;