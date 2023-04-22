import { NavLink } from "react-router-dom";

const HeaderLayout = () => {
  const active: string = "bg-[#5cffe9] py-[9px] px-[10px] text-[#aaa]";
  return (
    <>
      <header className="bg-[#009e96] fixed w-full z-10">
        <nav>
          <ul className="flex justify-center items-center gap-[20px] text-white py-[10px]">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? active : "")}
              >
                خانه
              </NavLink>
            </li>
            <li>
              <NavLink
                to="client"
                className={({ isActive }) => (isActive ? active : "")}
              >
                پنل مشتری
              </NavLink>
            </li>
            <li>
              <NavLink
                to="support"
                className={({ isActive }) => (isActive ? active : "")}
              >
                پنل پشتیبانی
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderLayout;
