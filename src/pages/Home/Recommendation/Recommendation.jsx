import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'

const Recommendation = () => {
    return (
        <div className="my-[80px]">
            <SectionTitle
                heading={'chef recommends'}
                subHeading={'---Should Try---'}
            ></SectionTitle>
            <div className="grid mt-12 grid-cols-3 gap-10">
                <div className="card bg-base-200 rounded-none">
                    <figure className="">
                        <img
                            src={img1}
                            alt="Shoes"
                            className="h-[270px] object-cover w-full" />
                    </figure>
                    <div className="card-body items-center  text-center">
                        <h2 className="card-title cinzelFont">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan, Cheese,Chicken, Breast Fillets</p>
                        <div className="card-actions">
                            <button className="btn bg-base-300 border-0 border-b-2 border-yellow-500 mt-3 uppercase text-yellow-500 hover:bg-slate-800">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-200 rounded-none">
                    <figure className="">
                        <img
                            src={img2}
                            alt="Shoes"
                            className="h-[270px] object-cover w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title cinzelFont">Haddock</h2>
                        <p>Lettuce, Eggs, Parmesan, Cheese,Chicken, Breast Fillets</p>
                        <div className="card-actions">
                            <button className="btn bg-base-300  border-0 border-b-2 border-yellow-500 mt-3 uppercase text-yellow-500 hover:bg-slate-800">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-200 rounded-none ">
                    <figure className="">
                        <img
                            src={img3}
                            alt="Shoes"
                            className="h-[270px] object-cover w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title cinzelFont">Escalope de Veau</h2>
                        <p>Lettuce, Eggs, Parmesan, Cheese,Chicken, Breast Fillets</p>
                        <div className="card-actions">
                            <button className="btn bg-base-300 border-0 border-b-2 border-yellow-500 mt-3 uppercase text-yellow-500 hover:bg-slate-800">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommendation;