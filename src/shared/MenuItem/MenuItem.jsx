
const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className="flex gap-10">
            <img className="w-[85px] h-[85px] rounded-r-[200px] rounded-bl-[200px]" src={image} alt="" />
            <div className="flex text-gray-600">
                <div>
                    <p className="cinzelFont uppercase text-lg">{name} ------------------------</p>
                    <p className="interFont">{recipe}</p>
                </div>
                <p className="text-yellow-600 interFont text-lg">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;