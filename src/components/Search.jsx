import { FaSearch } from "react-icons/fa";

export default function Search() {
    return (
        <div className="flex bg-white/5 items-center my-10 rounded-full">
            <input placeholder="Search City" className="bg-transparent outline-none w-full pl-5 py-3" type="text" />
            <button className="px-5 py-3">
                <FaSearch />
            </button>
        </div>
    )
}