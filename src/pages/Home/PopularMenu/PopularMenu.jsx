
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu ]= useMenu();
    const popular = menu.filter(item=> item.category === 'popular')
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(item => item.category === "popular")
    //             setMenu(popularItem)
    //         })
    // }, [])
    return (
        <section className="my-[80px]">
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"---Check it Out---"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5 my-5 md:my-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="uppercase btn btn-ghost mt-5 border-0 border-black border-b-2 hover:bg-gradient-to-r from-yellow-300 to-orange-600">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;