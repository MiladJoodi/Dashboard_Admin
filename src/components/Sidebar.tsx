import { useRef, useState } from "react";
import {
  Calendar,
  ChatbubbleEllipses,
  Cog,
  Cube,
  DocumentText,
  FileTrayFull,
  Grid,
  Heart,
  Layers,
} from "react-ionicons";
const Sidebar = () => {

  const indicatorDiv = useRef<HTMLDivElement>(null)
  const [activePage, setActivePage] = useState("خانه");

  const sidebarItem = [
    { title: "خانه", icon: Grid },
    { title: "محصولات", icon: Cube },
    { title: "علاقه مندی ها", icon: Heart },
    { title: "پیام ها", icon: ChatbubbleEllipses },
    { title: "برنامه ها", icon: Layers },
    { title: "آرشیو", icon: FileTrayFull },
    { title: "سند ها", icon: DocumentText },
    { title: "تقویم", icon: Calendar },
  ];

  const handleItemClick = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    item: any,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setActivePage(item.title);

    const offsetTop = e.currentTarget.offsetTop;
    const scrollTop = document.documentElement.scrollTop;
    const topPosition = `${offsetTop - scrollTop}px`;

    if (indicatorDiv.current) {
      indicatorDiv.current.style.top = topPosition;
    }
  };

  return (
    <div className="fixed right-0 top-[70px] w-[76px] h-[calc(100vh-70px)] shadow-sm border-r border-gray-200 flex items-center flex-col gap-5">
      {/* vertical line */}
      <div className="w-[3px] h-[45px] bg-[#4370ee] absolute top-0 ring-0 transition-all duration-300" ref={indicatorDiv}>
      </div>
      {/* vertical line */}

      {sidebarItem.map((item)=>(
        <div className="cursor-pointer w-full py-2 flex items-center justify-center"
        onClick={(e)=>handleItemClick(item, e)}
        key={item.title}
        >
          <item.icon color={activePage === item.title ? `#4739ee` : `#bfbfbf`} />
        </div>
      ))}

      <div className="cursor-pointer absolute bottom-2 w-full border-r-[3px] py-2 border-transparent flex items-center justify-center">
        <Cog color={"#bfbfbf"} width="25px" height="25px" />
      </div>

    </div>
  );
}

export default Sidebar;