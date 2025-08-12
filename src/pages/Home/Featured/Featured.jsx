import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'
import img from '../../../assets/home/featured.jpg'
import { Parallax } from "react-parallax";

const Featured = () => {
    return (

        <Parallax
            className="my-[80px]"
            bgImage={img}
            bgImageAlt="the dog"
            strength={300}
        >
            <div className=" bg-gradient-to-r from-black/50 to-black/50  p-20">
                <div>
                    <div className="text-center interFont ">
                        <h3 className="text-yellow-500 italic font-semibold mb-3">---Check it out---</h3>
                        <hr className="border-2 lg:mx-[450px] border-gray-200" />
                        <h1 className="text-4xl  uppercase my-4 text-white" >From our menu</h1>
                        <hr className="border-2 lg:mx-[450px] border-gray-200" />
                    </div>
                </div>
                <div className="flex gap-12 max-w-3/4 mx-auto my-10 cinzelFont text-white">
                    <img className="w-1/2" src={featuredImg} alt="" />
                    <div className="flex flex-col gap-1 justify-center">
                        <p className="text-xl">March 20, 2025</p>
                        <p className="uppercase text-xl">Where can i get some</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo hic recusandae veritatis quisquam corrupti consectetur tempore. Aperiam enim maxime quia placeat unde! Quas, recusandae! Voluptatibus quod harum rem omnis aspernatur consequuntur.</p>
                        <div>
                            <button className="uppercase btn btn-ghost mt-5 border-0 border-white border-b-4 hover:bg-gradient-to-r from-yellow-300 to-orange-600">Read more</button>
                        </div>
                    </div>
                </div>
            </div>

        </Parallax>


    );
};

export default Featured;