import { Link } from "react-router-dom";

const Navbar = () => {
    const handleDark = () => {
        document.getElementById("main").classList.toggle("dark")
    }
    return (
        <div className="flex justify-between items-center gap-5 h-20 px-5">
            <Link to={'/'} className="text-3xl md:text-4xl lg:text-5xl font-bold">Note App</Link>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text text-xl font-bold mr-1 text-gray-800 dark:text-white">Dark Mode</span> 
                    <input type="checkbox" className="toggle"  onClick={handleDark}/>
                </label>
            </div>
        </div>
    );
};

export default Navbar;