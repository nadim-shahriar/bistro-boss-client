import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subHeading }) => {
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
            bgImageStyle={bgStyle}
            bgImageAlt="the dog"
            strength={300}
        >
            <div className="p-32">
                <div className='cinzelFont text-white p-7 md:p-32 md:mx-20 md:mt-10 text-center bg-black/40'>
                    <h1 className="  font-bold text-2xl md:text-6xl uppercase">{title}</h1>
                    <p className='mt-4 font-semibold'>{subHeading}</p>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;