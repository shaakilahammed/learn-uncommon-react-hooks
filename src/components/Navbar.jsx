import { Link, NavLink } from 'react-router-dom';

const menuItems = [
    {
        id: 2,
        name: 'useDebugValue',
        link: '/debug-value',
    },
    {
        id: 3,
        name: 'useId',
        link: '/id',
    },
    {
        id: 4,
        name: 'useTransition',
        link: '/transition',
    },
    {
        id: 5,
        name: 'useDeferredValue',
        link: '/deferred-value',
    },
    {
        id: 6,
        name: 'useInsertionEffect',
        link: '/insertion-effect',
    },
    {
        id: 7,
        name: 'useImperativeHandle',
        link: '/imperative-handle',
    },
    {
        id: 8,
        name: 'useLayoutEffect',
        link: '/layout-effect',
    },
];

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    to="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="-10.5 -9.45 21 18.9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-sm me-0 w-10 h-10 text-link dark:text-link-dark flex origin-center transition-all ease-in-out"
                    >
                        <circle cx="0" cy="0" r="2" fill="#000"></circle>
                        <g stroke="#000" strokeWidth="1" fill="none">
                            <ellipse rx="10" ry="4.5"></ellipse>
                            <ellipse
                                rx="10"
                                ry="4.5"
                                transform="rotate(60)"
                            ></ellipse>
                            <ellipse
                                rx="10"
                                ry="4.5"
                                transform="rotate(120)"
                            ></ellipse>
                        </g>
                    </svg>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Uncommon Hooks
                    </span>
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <NavLink
                                    to={item.link}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
                                            : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                    }
                                    aria-current="page"
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
