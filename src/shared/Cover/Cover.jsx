import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subHeading }) => {
    return (
        <Parallax
            blur={{ min: -10, max: 10 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={300}
        >
            <div className="p-32">
                <div className='cinzelFont text-white p-32 mx-20 mt-10 text-center bg-black/40'>
                    <h1 className="  font-bold text-6xl uppercase">{title}</h1>
                    <p className='mt-4 font-semibold'>{subHeading}</p>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;