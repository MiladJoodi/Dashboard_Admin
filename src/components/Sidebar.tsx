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

    return (
        <div className="fixed left-0 top-[70px] w-[76px] ">
            Sidebar
        </div>
    );
}

export default Sidebar;