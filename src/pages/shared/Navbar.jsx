import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  // const { user, logOut } = useContext();

  const handleLogout = async () => {
    try {
      // await logOut();
      toast.success("Log out Successful");
    } catch (error) {
      toast.error(`Error during logout: ${error.message}`);
    }
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact Us" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/menu", label: "Our Menu" },
    { path: "/order", label: "Order Food" },
  ];

  const NavLinks = ({ className }) =>
    navItems.map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        className={({ isActive }) =>
          `${className} ${
            isActive ? "text-yellow-600 font-semibold" : "text-gray-200"
          } hover:text-yellow-500 border-none transition duration-500`
        }
      >
        {item.label}
      </NavLink>
    ));

  return (
    <div className="navbar fixed z-10 bg-opacity-50 text-white bg-gray-700 max-w-screen-xl mx-auto">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for Mobile */}
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-2 z-[1] w-32 space-y-1 rounded-sm"
          >
            <NavLinks className="btn btn-xs rounded-sm bg-opacity-50 bg-black" />
          </ul>
        </div>
        {/* Logo */}
        <div>
          <h1 className="text-xl md:text-2xl">
            <span className="font-bold text-yellow-500 lg:text-3xl hover:text-yellow-600 transition-all duration-300">
              Bistro
            </span>
            <span className=" lg:text-3xl font-semibold transition-all duration-300">
              Boss
            </span>
          </h1>
          <p className="text-xs italic">
            "Streamline Your Service, Savor Success!"
          </p>
        </div>
      </div>
      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 px-1">
          <NavLinks className={"btn btn-xs rounded-sm bg-transparent"} />
        </ul>
      </div>
      {/* Navbar End */}
      {/* <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
              aria-label="User Menu"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={user?.photoURL || "default-avatar.png"}
                />
              </div>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-sm w-52 p-2 gap-1"
            >
              <li className="btn btn-xs rounded-sm border-none">
                {user.displayName}
              </li>
              <li className="btn btn-xs rounded-sm border-none">
                {user.email}
              </li>
              <li>
                <Link
                  onClick={handleLogout}
                  className="bg-red-600 btn pb-3 btn-xs border-none w-full text-white hover:bg-red-700 rounded-sm"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink
            to="/auth/sign-in"
            className="btn bg-indigo-600 rounded-sm transition-all duration-300 hover:bg-indigo-500 text-white btn-sm border-none"
          >
            Join Now
          </NavLink>
        )}
      </div> */}
      <div className="navbar-end">
        <NavLink
          to="/auth/sign-in"
          className="btn bg-yellow-500 rounded-sm transition-all duration-300 hover:bg-yellow-600 text-white btn-sm border-none"
        >
          Join Now
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
