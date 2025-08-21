import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

const ItemCover = ({ title, img }) => {
    const [bgStyle, setBgStyle] = useState({ height: "300px", objectFit: "cover" });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setBgStyle({ height: "600px", objectFit: "cover" }); // sm
            } else if (window.innerWidth < 1024) {
                setBgStyle({ height: "750px", objectFit: "cover" }); // md
            } else {
                setBgStyle({ height: "750px", objectFit: "cover" }); // lg
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (

        <Parallax
            blur={{ min: -10, max: 10 }}
            bgImage={img}
            bgImageAlt="the dog"
            bgImageStyle={bgStyle}
            strength={300}
        >
            <div className="p-32">
                <div className='cinzelFont text-white p-6 md:p-32 md:mx-36 md:mt-10 text-center bg-black/40'>
                    <h1 className="  font-semibold text-4xl uppercase">{title}</h1>
                    <p className='mt-4 interFont '>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </Parallax>

    );
};

export default ItemCover;