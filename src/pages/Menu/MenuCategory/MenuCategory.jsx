
import MenuItem from "../../../shared/MenuItem/MenuItem";


const MenuCategory = ({item}) => {

    return (
        <div className="my-[80px] max-w-screen-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-5 my-5 md:my-10">
                {
                    item.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="uppercase btn btn-ghost mt-5 border-0 border-black border-b-2 hover:bg-gradient-to-r from-yellow-300 to-orange-600">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;