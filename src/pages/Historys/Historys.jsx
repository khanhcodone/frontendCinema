import React from "react";

const History = () => {
   return (
      <div className="min-h-screen flex bg-gradient-to-b  text-white">
         {/* Cột bên trái */}
         <div className="w-1/4 p-6 bg-gradient-to-b from-blue-800 to-blue-900 shadow-lg rounded-r-lg">
            {/* Avatar và tên */}
            <div className="text-center mb-6">
               <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 shadow-md overflow-hidden">
                  <img
                     src="https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/avatar-dep-cho-nam-2.jpg"
                     alt="Avatar"
                     className="w-full h-full object-cover"
                  />
               </div>
               <h2 className="text-xl font-bold mt-3">Huynh Gia Khánh</h2>
               <button className="text-blue-300 text-sm underline hover:text-blue-400">
                  Thay đổi ảnh đại diện
               </button>
            </div>

            {/* Button C'Friends */}
            <button className="w-full py-3 bg-yellow-400 text-black font-bold rounded-md mb-6 shadow-md hover:bg-yellow-500">
               C'Friends
            </button>

            {/* Tích điểm */}
            <div className="bg-blue-700 rounded-lg p-4 mb-6 shadow-inner">
               <p className="text-sm">Tích điểm C'Friends</p>
               <h3 className="text-yellow-400 text-2xl font-bold">1.465/10K</h3>
            </div>

            {/* Danh mục */}
            <ul className="space-y-4 text-base font-medium">
               <li className="flex items-center gap-2 text-white hover:text-yellow-400 cursor-pointer">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Thông tin khách hàng
               </li>
               <li className="flex items-center gap-2 text-yellow-400 font-bold cursor-pointer">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Lịch sử mua hàng
               </li>
            </ul>

            {/* Đăng xuất */}
            <button className="mt-8 text-red-500 text-sm underline hover:text-red-600">
               Đăng xuất
            </button>
         </div>

         {/* Cột bên phải */}
         <div className="w-3/4 p-4 mt-5">
            {/* Tiêu đề */}
            <h1 className="text-3xl font-bold mb-4">LỊCH SỬ MUA HÀNG</h1>

            {/* Bảng lịch sử mua hàng */}
            <div className="overflow-x-auto">
               <table className="min-w-full bg-white text-black rounded">
                  <thead>
                     <tr className="bg-blue-500 text-white">
                        <th className="p-3 text-left">Mã đơn</th>
                        <th className="p-3 text-left">Hoạt động</th>
                        <th className="p-3 text-left">Chi nhánh</th>
                        <th className="p-3 text-left">Ngày</th>
                        <th className="p-3 text-left">Tổng cộng</th>
                        <th className="p-3 text-left">Điểm</th>
                        <th className="p-3 text-left">Hành động</th>
                     </tr>
                  </thead>
                  <tbody>
                     {Array.from({ length: 10 }).map((_, index) => (
                        <tr
                           key={index}
                           className={`${
                              index % 2 === 0 ? "bg-gray-100" : "bg-white"
                           }`}
                        >
                           <td className="p-3">144590147</td>
                           <td className="p-3">Mua vé</td>
                           <td className="p-3">Bình Dương</td>
                           <td className="p-3">18/11/2024</td>
                           <td className="p-3">135,000 đ</td>
                           <td className="p-3">135 Điểm</td>
                           <td className="p-3 text-blue-500 cursor-pointer">
                              Xem vé
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default History;
