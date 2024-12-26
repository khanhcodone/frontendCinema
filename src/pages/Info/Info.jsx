import React from "react";
import { Link } from "react-router-dom";
const CustomerInfo = () => {
   return (
      <div className="min-h-screen flex text-white bg-gradient-to-b">
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
               <h2 className="text-xl font-bold mt-3">Huỳnh Gia Khánh</h2>
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
               <li className="flex items-center gap-2 text-yellow-400 font-bold cursor-pointer">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Thông tin khách hàng
               </li>
               <li className="flex items-center gap-2 text-white hover:text-yellow-400 cursor-pointer">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Thành viên Cinestar
               </li>
               <li className="flex items-center gap-2 text-white hover:text-yellow-400 cursor-pointer">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <Link to="/history" className="hover:text-yellow-400">
                     Lịch sử mua hàng
                  </Link>
               </li>
            </ul>

            {/* Đăng xuất */}
            <button className="mt-8 text-red-500 text-sm underline hover:text-red-600">
               Đăng xuất
            </button>
         </div>

         {/* Cột bên phải */}
         <div className="w-3/4 p-6 mt-5">
            {/* Thông tin cá nhân */}
            <h1 className="text-3xl font-bold mb-4">THÔNG TIN KHÁCH HÀNG</h1>
            <div className="bg-white text-black p-6 rounded-lg shadow-md mb-6">
               <h2 className="text-2xl font-bold mb-4">Thông tin cá nhân</h2>
               <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                     <label className="block mb-2 font-semibold">
                        Họ và Tên
                     </label>
                     <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="Huỳnh Gia Khánh"
                     />
                  </div>
                  <div>
                     <label className="block mb-2 font-semibold">
                        Ngày sinh
                     </label>
                     <input
                        type="date"
                        className="w-full p-2 border rounded-md"
                     />
                  </div>
                  <div>
                     <label className="block mb-2 font-semibold">
                        Số điện thoại
                     </label>
                     <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="0xxxxxxx"
                     />
                  </div>
                  <div>
                     <label className="block mb-2 font-semibold">Email</label>
                     <input
                        type="email"
                        className="w-full p-2 border rounded-md"
                        placeholder="@hcmus.edu.vn"
                     />
                  </div>
               </div>
               <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
                  Lưu thông tin
               </button>
            </div>

            {/* Đổi mật khẩu */}
            <div className="bg-white text-black p-6 rounded-lg shadow-md">
               <h2 className="text-2xl font-bold mb-4">Đổi mật khẩu</h2>
               <div className="space-y-4 mb-4">
                  <div>
                     <label className="block mb-2 font-semibold">
                        Mật khẩu cũ *
                     </label>
                     <input
                        type="password"
                        className="w-full p-2 border rounded-md"
                        placeholder="Nhập mật khẩu cũ"
                     />
                  </div>
                  <div>
                     <label className="block mb-2 font-semibold">
                        Mật khẩu mới *
                     </label>
                     <input
                        type="password"
                        className="w-full p-2 border rounded-md"
                        placeholder="Nhập mật khẩu mới"
                     />
                  </div>
                  <div>
                     <label className="block mb-2 font-semibold">
                        Xác thực mật khẩu *
                     </label>
                     <input
                        type="password"
                        className="w-full p-2 border rounded-md"
                        placeholder="Nhập lại mật khẩu mới"
                     />
                  </div>
               </div>
               <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
                  Đổi mật khẩu
               </button>
            </div>
         </div>
      </div>
   );
};

export default CustomerInfo;
