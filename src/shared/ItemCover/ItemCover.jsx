import { Parallax } from 'react-parallax';

const ItemCover = ({title, img}) => {
    return (

        <Parallax
            blur={{ min: -10, max: 10 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={300}
        >
            <div className="p-32">
                <div className='cinzelFont text-white p-32 mx-36 mt-10 text-center bg-black/40'>
                    <h1 className="  font-semibold text-4xl uppercase">{title}</h1>
                    <p className='mt-4 interFont '>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </Parallax>

    );
};

export default ItemCover;