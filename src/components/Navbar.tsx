import { ChatboxEllipses, Notifications, Person, SearchOutline } from "react-ionicons";

const Navbar = () => {
    return (
        <div className="fixed left-0 top-0 w-full h-[70px] bg-white py-5 pl-20 pr-5 flex items-center justify-between z-[100]" dir="ltr">
            <span className="text-[28px] from-black absolute left-[26px] text-[#4379ee]">
                A.
            </span>
            <div className="w-[450px] flex items-center px-4">
                <SearchOutline color={"#454545"} />
                <input
                    type="text"
                    placeholder="سرچ"
                    className="w-[450px] outline-none px-4 py-2 placeholder:text-[#454545] border-b border-transparent focus:border-[#4379ee]"
                />
            </div>
            <div className="flex items-center gap-5">
                <Notifications
                    color={`#bfbfbf`}
                    width="23px"
                    height="23px"
                    cssClasses={"cursor-pointer"}
                />
                <Person
                    color={`#bfbfbf`}
                    width="23px"
                    height="23px"
                    cssClasses={"cursor-pointer"}
                />
                <ChatboxEllipses
                    color={`#bfbfbf`}
                    width="23px"
                    height="23px"
                    cssClasses={"cursor-pointer"}
                />
            </div>
        </div>
    );
}

export default Navbar;