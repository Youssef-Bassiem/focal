import Button from "./Button";

const SlideItem = ({ item }) => {
  const {
    firstImage,
    secondImage,
    title,
    collection,
    firstButtonText,
    secondButtonText,
  } = item;

  return (
    <div className="flex h-full">
      <img
        className={`${
          secondImage ? "w-1/2 " : "w-full"
        } max-lg:w-full object-cover`}
        src={firstImage}
        alt={firstImage}
      />
      {secondImage ? (
        <img
          className="max-lg:hidden w-1/2 object-cover"
          src={secondImage}
          alt={secondImage}
        />
      ) : (
        ""
      )}
      <div
        className={`w-96 max-sm:w-60 text-white font-sans absolute top-[9rem]  ${
          secondImage
            ? "text-center left-[50%] -translate-x-1/2"
            : "left-[5rem]"
        }`}
      >
        <p className="animate-slide-up uppercase font-semibold text-[.9rem] mb-5 ">
          {title}
        </p>
        <h1 className="animate-slide-up max-sm:text-3xl text-5xl font-bold font-zurich-extended uppercase">
          {collection}
        </h1>
        <Button>{firstButtonText}</Button>
        {secondButtonText ? <Button>{secondButtonText}</Button> : ""}
      </div>
    </div>
  );
};

export default SlideItem;
