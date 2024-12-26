import React, { useState } from "react";
import "../styles/FoodDrinks.scss";

const FoodDrinks = ({ totalPrice, setTotalPrice }) => {
  const categories = [
    {
      name: "Combo",
      products: [
        {
          id: 1,
          title: "Combo Party",
          description: "2 Bắp Ngọt 60oz + 4 Coke 32oz",
          price: 209000,
          image:
            "https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/PICCONNEW/CNS033_COMBO_COUPLE.png?rand=1723084117",
        },
        {
          id: 2,
          title: "Combo Solo",
          description: "1 Bắp Ngọt 60oz + 1 Coke 32oz",
          price: 94000,
          image:
            "https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/PICCONNEW/CNS034_COMBO_PARTY.png?rand=1723084117",
        },
        {
          id: 3,
          title: "Combo Couple",
          description: "1 Bắp Ngọt 60oz + 2 Coke 32oz",
          price: 115000,
          image:
            "https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/PICCONNEW/CNS032_COMBO_SOLO.png?rand=1723084117",
        },
      ],
    },
    {
      name: "Combo 2 Ngăn",
      products: [
        {
          id: 4,
          title: "Combo Nhà Gấu",
          description: "4 Coke 32oz + 2 Bắp 2 Ngăn 64oz Phủ Mai + Caramel",
          price: 259000,
          image:
            "https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/PICCONNEW/CNS037_COMBO_NHA_GAU.png?rand=1723084117",
        },
        {
          id: 5,
          title: "Combo Gấu",
          description: "1 Coke 32oz + 1 Bắp 2 Ngăn 64oz Phủ Mai + Caramel",
          price: 119000,
          image:
            "https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/PICCONNEW/CNS035_COMBO_GAU.png?rand=1723084117",
        },
        {
          id: 6,
          title: "Combo Cô Gấu",
          description: "2 Coke 32oz + 1 Bắp 2 Ngăn 64oz Phủ Mai + Caramel",
          price: 129000,
          image:
            "https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/PICCONNEW/CNS036_COMBO_CO_GAU.png?rand=1723084117",
        },
      ],
    },
    {
      name: "Nước Ngọt",
      products: [
        {
          id: 7,
          title: "Coke Zero 32oz",
          description: "Thức uống không đường",
          price: 37000,
          image:
            "https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/HinhQuayconnew/COKE-ZERO.png?rand=1719573157",
        },
        {
          id: 8,
          title: "Coke 32oz",
          description: "Thức uống Coca-Cola",
          price: 37000,
          image:
            "https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/HinhQuayconnew/coca.png?rand=1719572301",
        },
        {
          id: 9,
          title: "Fanta 32oz",
          description: "Thức uống vị cam",
          price: 37000,
          image:
            "https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/HinhQuayconnew/fanta.jpg?rand=1719572506",
        },
        {
          id: 10,
          title: "Sprite 32oz",
          description: "Thức uống vị chanh",
          price: 37000,
          image:
            "https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/HinhQuayconnew/sprite.png?rand=1719572953",
        },
      ],
    },
    {
      name: "Nước Đóng Chai",
      products: [
        {
          id: 11,
          title: "Nước Nutriboost",
          description: "Thức uống bổ sung dinh dưỡng",
          price: 28000,
          image:
            "https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/HinhQuayconnew/NUTRI.png?rand=1719572506",
        },
        {
          id: 12,
          title: "Nước Suối Dasani",
          description: "Nước suối tinh khiết",
          price: 20000,
          image:
            "https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/HinhQuayconnew/dasani.png?rand=1719572623",
        },
        {
          id: 13,
          title: "Nước Cam Teppy",
          description: "Thức uống vị cam tươi mát",
          price: 28000,
          image:
            "https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/HinhQuayconnew/TEPPY.png?rand=1719572506",
        },
      ],
    },
    {
      name: "Snacks - Kẹo",
      products: [
        {
          id: 14,
          title: "Snack Thái",
          description: "Snack giòn tan hương vị Thái",
          price: 25000,
          image:
            "https://api-website.cinestar.com.vn/media/.thumbswysiwyg/pictures/HinhQuayconnew/snack-que-thai.png?rand=1718957425",
        },
      ],
    },
  ];

  const [cart, setCart] = useState({});
  const [selectedCinema, setSelectedCinema] = useState("Cinestar Quốc Thanh");

  const cinemas = [
    "Cinestar Quốc Thanh",
    "Cinestar Hai Bà Trưng (TP.HCM)",
    "Cinestar Bình Dương (Sinh Viên)",
    "Cinestar Mỹ Tho",
    "Cinestar Kiên Giang",
    "Cinestar Lâm Đồng",
    "Cinestar Đà Lạt",
    "Cinestar Huế",
  ];

  const handleQuantityChange = (productId, price, change) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[productId]?.quantity || 0;
      const newQuantity = currentQuantity + change;

      if (newQuantity <= 0) {
        const { [productId]: _, ...remainingCart } = prevCart;
        setTotalPrice((prev) => prev - currentQuantity * price);
        return remainingCart;
      }

      setTotalPrice((prev) => prev + change * price);
      return {
        ...prevCart,
        [productId]: {
          ...(categories
            .flatMap((category) => category.products)
            .find((product) => product.id === productId) || {}),
          quantity: newQuantity,
        },
      };
    });
  };

  const selectedFoods = Object.values(cart)
    .filter((item) => item.quantity > 0)
    .map((item) => `${item.quantity} ${item.title}`)
    .join(" | ");

  return (
    <div className="food-drinks">
      <div
        className="cinema-select"
        style={{ textAlign: "center", margin: "20px 0" }}
      >
        <label
          htmlFor="cinema-select"
          style={{ fontWeight: "bold", color: "#fff" }}
        >
          Chọn Rạp Gần Bạn:{" "}
        </label>
        <select
          id="cinema-select"
          value={selectedCinema}
          onChange={(e) => setSelectedCinema(e.target.value)}
          style={{
            padding: "8px 12px",
            borderRadius: "4px",
            border: "none",
            fontSize: "16px",
            width: "300px",
            color: "#000",
          }}
        >
          {cinemas.map((cinema) => (
            <option key={cinema} value={cinema}>
              {cinema}
            </option>
          ))}
        </select>
      </div>

      <h3 className="heading" style={{ textAlign: "center", margin: "40px 0" }}>
        Chọn Đồ Ăn và Thức Uống
      </h3>

      {categories.map((category, index) => (
        <div className="category" key={index}>
          <h4 className="category-title">{category.name}</h4>
          <div className="products-container">
            {category.products.map((product) => (
              <div className="product-card" key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-details">
                  <h4 className="product-title">{product.title}</h4>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">
                    {parseInt(product.price).toLocaleString()} VND
                  </p>
                  <div className="product-quantity">
                    <button
                      className="btn-minus"
                      onClick={() =>
                        handleQuantityChange(
                          product.id,
                          parseInt(product.price),
                          -1
                        )
                      }
                    >
                      -
                    </button>
                    <span className="quantity">
                      {cart[product.id]?.quantity || 0}
                    </span>
                    <button
                      className="btn-plus"
                      onClick={() =>
                        handleQuantityChange(
                          product.id,
                          parseInt(product.price),
                          1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {totalPrice > 0 && (
        <div className="summary-bar">
          <div className="summary-content">
            <div>
              <p>
                <strong>Rạp Đã Chọn: {selectedCinema}</strong>
              </p>

              <p>{selectedFoods || "Chưa chọn món"}</p>
            </div>
            <div className="price-container">
              <p>Tạm tính: {totalPrice.toLocaleString()} VND</p>
              <button className="summary-button">Thanh Toán</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDrinks;
