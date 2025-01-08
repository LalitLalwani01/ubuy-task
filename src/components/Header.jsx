import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation(); 

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">WELCOME</h1>

            {/* Tabs */}
            <div className="flex">
                {/* Login Button */}
                <button
                    className={`w-1/2 py-3 font-medium rounded-l-[0.3rem] ${
                        location.pathname === "/"
                            ? "bg-yellow-500 text-black"
                            : "bg-gray-200 text-gray-600"
                    }`}
                >
                    <Link to="/">Login</Link>
                </button>

                {/* Sign Up Button */}
                <button
                    className={`w-1/2 py-3 font-medium rounded-r-[0.3rem] ${
                        location.pathname === "/signup"
                            ? "bg-yellow-500 text-black"
                            : "bg-gray-200 text-gray-600"
                    }`}
                >
                    <Link to="/signup">Sign Up</Link>
                </button>
            </div>
        </div>
    );
}

export default Header;
