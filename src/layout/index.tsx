import Sidebar from "../components/Sidebar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Sidebar />
            {/* Navbar */}
            <div className="w-full ml-[76px] mt-[70px] border-t border-gray-200 px-6 pt-3 box-border flex flex-col">
                <span className="font-bold text-[#202224] text-[30px]">
                    داشبورد
                </span>
                {children}
            </div>
        </div>
    );
}

export default Layout;