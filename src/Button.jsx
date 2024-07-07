const Button = ({ children }) => {
  return (
    <button className=" mt-5 w-36 py-5 mr-5 uppercase animate-slide-up bg-[#f3ff34] font-medium text-black">
      {children}
    </button>
  );
};

export default Button;
