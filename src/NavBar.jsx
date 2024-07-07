const NavBar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-[rgb(40,40,40)] h-[4rem] max-sm:p-3 px-8 flex justify-between items-center">
      <div className="xl:hidden flex  items-center space-x-5">
        <svg
          focusable="false"
          width="18"
          height="14"
          className="icon icon--header-hamburger text-white cursor-pointer"
          viewBox="0 0 18 14"
        >
          <path
            d="M0 1h18M0 13h18H0zm0-6h18H0z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
        <svg
          focusable="false"
          width="18"
          height="18"
          className="icon icon--header-search text-white cursor-pointer"
          viewBox="0 0 18 18"
        >
          <path
            d="M12.336 12.336c2.634-2.635 2.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373 5.642.325 9.866 2.901 12.442c2.576 2.576 6.8 2.528 9.435-.106zm0 0L17 17"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
      </div>
      <img src="/logo-focal.avif" alt="Focal" width={"95px"} height={"84px"} />
      <ul className="flex space-x-5 text-sm text-white max-xl:hidden">
        <li>
          <a href="#">Shop by Category</a>
        </li>
        <li>
          <a href="#">Shop by Device</a>
        </li>
        <li>
          <a href="#">Collection</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <div className="flex  items-center space-x-5">
        <svg
          focusable="false"
          width="18"
          height="18"
          className=" max-xl:hidden icon icon--header-search text-white cursor-pointer"
          viewBox="0 0 18 18"
        >
          <path
            d="M12.336 12.336c2.634-2.635 2.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373 5.642.325 9.866 2.901 12.442c2.576 2.576 6.8 2.528 9.435-.106zm0 0L17 17"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
        <svg
          focusable="false"
          width="20"
          height="16"
          className="icon icon--header-email text-white cursor-pointer"
          viewBox="0 0 20 16"
        >
          <path
            d="M19 4l-9 5-9-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
          <path
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            d="M1 1h18v14H1z"
          ></path>
        </svg>
        <svg
          focusable="false"
          width="18"
          height="17"
          className="icon icon--header-customer text-white cursor-pointer"
          viewBox="0 0 18 17"
        >
          <circle
            cx="9"
            cy="5"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          ></circle>
          <path
            d="M1 17v0a4 4 0 014-4h8a4 4 0 014 4v0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
        <svg
          focusable="false"
          width="20"
          height="18"
          className="icon icon--header-cart text-white cursor-pointer"
          viewBox="0 0 20 18"
        >
          <path
            d="M3 1h14l1 16H2L3 1z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
          <path
            d="M7 4v0a3 3 0 003 3v0a3 3 0 003-3v0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
        <div className="absolute right-6 max-sm:right-2 top-4 w-4 h-4 text-[.6rem] bg-white flex items-center justify-center rounded-full">
          0
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
