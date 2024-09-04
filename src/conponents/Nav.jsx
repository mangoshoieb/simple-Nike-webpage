import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constans";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            width={130}
            height={30}
            alt="logo"
            className="m-0"
          ></img>
        </a>
        <ul className="flex justify-center items-center flex-1 gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font- montserrat text-lg text-slate-gray leading-normal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="/">
          <img
            src={hamburger}
            alt="Habburger"
            width={30}
            height={20}
            className="hidden max-lg:block"
          ></img>
        </a>
      </nav>
    </header>
  );
};

export default Nav;
