import DataTable from "react-data-table-component";

const columns = [
    {
      name: "اسم محصولات",
      selector: (row: any) => row.productName,
      sortable: true,
    },
    {
      name: "مکان",
      selector: (row: any) => row.location,
      sortable: true,
    },
    {
      name: "تاریخ",
      selector: (row: any) => row.date,
      sortable: true,
    },
    {
      name: "تعداد",
      selector: (row: any) => row.quantity,
      sortable: true,
    },
    {
      name: "قیمت کل",
      selector: (row: any) => row.totalPrice,
      sortable: true,
    },
    {
      name: "وضعیت",
      selector: (row: any) => row.status,
      sortable: true,
    },
  ];
  
  const data = [
    {
      id: 1,
      productName: "Apple watch 3 series",
      location: "karaj",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">
          تحویل داده شده
        </div>
      ),
    },
    {
      id: 2,
      productName: "Iphone 12 Pro",
      location: "tehran janat abad",
      date: "05.06.2024",
      quantity: "1",
      totalPrice: "$735",
      status: (
        <div className="bg-[#e9b434] rounded-full px-3 py-1 text-white">
          نامشخص
        </div>
      ),
    },
    {
      id: 3,
      productName: "Apple watch 4 series",
      location: "karaj",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#f93c65] rounded-full px-3 py-1 text-white">
          کنسل شده
        </div>
      ),
    },
    {
      id: 4,
      productName: "Apple watch 3 series",
      location: "tehran janat abad",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">
          تحویل داده شده
        </div>
      ),
    },
    {
      id: 5,
      productName: "Iphone 12 Pro",
      location: "karaj",
      date: "05.06.2024",
      quantity: "1",
      totalPrice: "$735",
      status: (
        <div className="bg-[#e9b434] rounded-full px-3 py-1 text-white">
          نامشخص
        </div>
      ),
    },
    {
      id: 6,
      productName: "Apple watch 4 series",
      location: "tehran janat abad",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#f93c65] rounded-full px-3 py-1 text-white">
          کنسل شده
        </div>
      ),
    },
    {
      id: 7,
      productName: "Apple watch 3 series",
      location: "karaj",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">
          تحویل داده شده
        </div>
      ),
    },
    {
      id: 8,
      productName: "Iphone 12 Pro",
      location: "tehran janat abad",
      date: "05.06.2024",
      quantity: "1",
      totalPrice: "$735",
      status: (
        <div className="bg-[#e9b434] rounded-full px-3 py-1 text-white">
          نامشخص
        </div>
      ),
    },
    {
      id: 9,
      productName: "Apple watch 4 series",
      location: "karaj",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#f93c65] rounded-full px-3 py-1 text-white">
          کنسل شده
        </div>
      ),
    },
    {
      id: 10,
      productName: "Apple watch 3 series",
      location: "tehran janat abad",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">
          تحویل داده شده
        </div>
      ),
    },
    {
      id: 11,
      productName: "Iphone 12 Pro",
      location: "karaj",
      date: "05.06.2024",
      quantity: "1",
      totalPrice: "$735",
      status: (
        <div className="bg-[#e9b434] rounded-full px-3 py-1 text-white">
          نامشخص
        </div>
      ),
    },
    {
      id: 12,
      productName: "Apple watch 4 series",
      location: "tehran janat abad",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#f93c65] rounded-full px-3 py-1 text-white">
          کنسل شده
        </div>
      ),
    },
  ];

const Table = () => {
    return (
        <DataTable columns={columns} data={data} pagination />
    );
}

export default Table;