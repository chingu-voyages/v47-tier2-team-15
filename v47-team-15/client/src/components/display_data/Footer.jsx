const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-center mt-4 md:mt-0 md:font-medium py-1 md:py-0 transition-all delay-150 duration-300 overflow-hidden px-6 bg-[#1A183E] text-white text-xs">
          &copy; 2024 | Chingu |
        <a
          href="https://github.com/chingu-voyages/v47-tier2-team-15"
          target="_blank"
          rel="noreferrer"
          className=" text-white mx-1 transition ease-in-out delay-150 hover:scale-125 cursor-pointer"
        >
          Github
        </a>
        </div>
    </>
  );
};

export default Footer;
