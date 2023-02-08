import { HiMagnifyingGlass } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  return (
    <header className="flex">
      <div className="w-[295px] h-[65px] border-solid text-center text-[40px] text-white bg-[#1E67AF]">
        Logo
      </div>
      <div className="flex">
        <span className="mt-[23px] ml-[10px] mr-[10px] text-[#505050]">
          <HiMagnifyingGlass size="25px" />
        </span>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Search anything here"
            className="w-[1100px] h-[65px] A1A1A1 placeholder:text-[#A1A1A1] mr-[10px]"
          />
        </form>
        <span className="mt-[23px] text-[#EE0D0D] mr-[10px]">
          <TbLogout size="25px" />
        </span>
        <span className="text-[16px] mt-[23px] font-bold text-[#EE0D0D] mr-[10px]">
          Logout
        </span>
        <span className="mt-[10px] text-[#323A46]">
          <RxHamburgerMenu size="50px" />
        </span>
      </div>
    </header>
  );
};

export default Header;
