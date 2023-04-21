import { Link } from "react-router-dom";

const HeaderLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="flex">
            <li>
              <Link to="/">samira norozy</Link>
            </li>
            <li>
              <Link to="client">sho norozyaf</Link>
            </li>
            <li>
              <Link to="support">sho norozyaf</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderLayout;
