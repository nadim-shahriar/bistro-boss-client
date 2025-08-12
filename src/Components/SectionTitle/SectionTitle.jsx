

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center interFont">
            <h3 className="text-yellow-500 italic font-semibold mb-3">{subHeading}</h3>
            <hr className="border-2 lg:mx-[450px] border-gray-200" />
            <h1 className="text-4xl  uppercase my-4" >{heading}</h1>
            <hr className="border-2 lg:mx-[450px] border-gray-200" />
        </div>
    );
};

export default SectionTitle;