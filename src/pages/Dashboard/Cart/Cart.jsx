import { RiDeleteBack2Fill, RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart()
    let count = 0;

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const axiosSecure = useAxiosSecure()

    const handleDelete = (id) => {
        console.log(id)
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.deletedCount > 0) {
                            refetch();
                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });

    }

    return (
        <div className="py-7 pl-32 pr-20 bg-gray-200 ">
            <Helmet>
                <title>Bistro | Cart</title>
            </Helmet>
            <div>
                <SectionTitle
                    heading={'WANNA ADD MORE?'}
                    subHeading={'---My Cart---'}
                ></SectionTitle>
            </div>

            <div className=" bg-white p-10 my-10 cinzelFont">
                <div className="cinzelFont my-10 flex justify-between">
                    <h1 className="text-4xl font-semibold">Total Orders: {cart.length}</h1>
                    <h1 className="text-4xl font-semibold">Total Price: ${totalPrice}</h1>
                    <button className="btn text-white bg-[#D1A054] text-lg">Pay</button>
                </div>
                <table className="table rounded-t-xl overflow-hidden">
                    {/* head */}
                    <thead className="bg-[#D1A054] mb-6 h-[60px] text-white ">
                        <tr>
                            <th></th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="text-[18px]">
                        {
                            cart.map(item => <tr key={item._id}>
                                <th>
                                    {count = count + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask  h-16 w-16">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td className="font-semibold">
                                    {item.name}
                                    <br />

                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost bg-[#B91C1C] text-white text-xl"><RiDeleteBin6Line></RiDeleteBin6Line>
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;