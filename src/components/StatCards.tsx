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
        <div>
            Enter
        </div>
    );
}

export default StatCards;