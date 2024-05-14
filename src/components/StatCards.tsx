import userIcon from "../assets/images/userIcon.png";
import salesIcon from "../assets/images/salesIcon.png";
import ordersIcon from "../assets/images/ordersIcon.png";
import revenueIcon from "../assets/images/revenueIcon.png";
import { CaretDown, CaretUp } from "react-ionicons";

const StatCards = () => {

    const cards = [
        {
            title: "کل کاربران",
            value: "40,689",
            icon: userIcon,
            profit: true,
            percentage: "8.5%",
        },
        {
            title: "کل سفارشات",
            value: "10293",
            icon: ordersIcon,
            profit: false,
            percentage: "1.3%",
        },
        {
            title: "درآمد امروز",
            value: "$89,000",
            icon: salesIcon,
            profit: true,
            percentage: "4.7%",
        },
        {
            title: "درآمد کلی",
            value: "$26,000",
            icon: revenueIcon,
            profit: false,
            percentage: "1.6%",
        },
    ];

    return (
        <div className="flex md:w-[95%] w-[80%] items-center justify-between flex-wrap flex-col md:flex-row md:gap-3 gap-5 mt-5">
            {cards.map((card) => (
                <div
                    className="bg-white rounded-xl shadow-sm pl-5 md:pr-0 py-3 relative flex flex-col justify-between gap-3 md:w-[23%] w-full"
                    key={card.title}
                >
                    <span className="text-[#202224] font-semibold text-[15px]">
                        {card.title}
                    </span>
                    <span className="text-[28px] text-[#202224] font-semibold farsi">
                        {card.value}
                    </span>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            {card.profit ? (
                                <CaretUp color="#00b69b" />
                            ) : (
                                <CaretDown color="#00b69b" />
                            )}
                            <span
                            className={`${card.profit ? "text-[#00b69b]" : "text-[#f93c65]"} font-semibold text-[15px]`}
                            >
                                {card.percentage}
                            </span>
                        </div>

                        <span className="text-[#606060] text-[14px]">
                            {card.profit ? "بالا برای دیروز" : "پایین برای دیروز"}
                        </span>

                    </div>
                    <img
                    src={card.icon}
                    alt="icon"
                    className="absolute right-5 top-3 w-[14.5%]"
                    />
                </div>
            ))}
        </div>
    );
}

export default StatCards;