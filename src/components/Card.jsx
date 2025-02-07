const Card = ({ imageSrc, title }) => {
  return (
    <div className="relative max-h-[50vh] max-w-[60vw] md:max-h-[70vh] md:max-w-[60vw] lg:max-h-[80vh] lg:max-w-[50vw] xl:max-h-[508px] xl:max-w-[339px]">
      <div>
        <img
          src={imageSrc}
          alt={title}
          className="shadow-light object-cover w-full h-full"
        />
      </div>

      <div className="absolute bottom-10 text-[1.75rem] right-0 bg-n-9 px-6 py-5 ">
        <span>
          <span>{title}</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
