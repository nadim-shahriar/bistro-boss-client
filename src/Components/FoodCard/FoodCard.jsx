import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {

    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()

    const { _id, image, price, name, recipe } = item;
    const [, refetch] = useCart()

    const handleAddToCart = () => {
        // console.log(food)
        if (user && user.email) {
            // console.log(user.email, food)
            const cartItem = {
                menuId: _id,
                email: user.email,
                price,
                name,
                image
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "middle",
                            icon: "success",
                            title: `${name} added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }

                })
        }
        else {
            Swal.fire({
                title: "Please Login!",
                text: "Login for add item to Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {
                        state: { from: location }
                    })
                }
            });
        }
    }

    return (
        <div className="card bg-base-200 rounded-none ">
            <figure className="">
                <img
                    src={image}
                    alt="Shoes"
                    className="h-[270px] object-cover w-full" />
            </figure>
            <p className='bg-slate-800 text-white py-2 px-4 font-semibold absolute right-5 top-5'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title cinzelFont">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={handleAddToCart} className="btn bg-base-300 border-0 border-b-2 border-yellow-500 mt-3 uppercase text-yellow-500 hover:bg-slate-800">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;