
const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className="flex gap-4 lg:gap-10">
            <img className="w-[60px] lg:w-[85px] h-[60px] lg:h-[85px] rounded-r-[200px] rounded-bl-[200px]" src={image} alt="" />
            <div className="flex text-gray-600">
                <div>
                    <p className="cinzelFont uppercase lg:text-lg">{name} ------------------------</p>
                    <p className="interFont">{recipe}</p>
                </div>
                <p className="text-yellow-600 interFont lg:text-lg">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;