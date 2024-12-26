import "./About.scss";

const About = () => {

  return (
    <div className="about">
      <div className="container">
        <div className="about-banner">
          <img src="https://api-website.cinestar.com.vn/media/wysiwyg/CMSPage/Abouts/ht-qc-br.jpg"/>
          <div class="ht-qc-content">
            <h2 class="heading">HỆ THỐNG CỤM RẠP TRÊN TOÀN QUỐC</h2>
            <p class="des">Cinestar là một trong những hệ thống rạp chiếu phim được yêu thích nhất tại Việt Nam, cung cấp nhiều mô hình giải trí hấp dẫn bao gồm Các Cụm Rạp Chiếu Phim hiện đại, Nhà hát, Khu vui chơi trẻ em Kidzone, Bowling, Billiards, Games, Phòng Gym, Nhà Hàng, và Phố Bia C'Beer. Với mục tiêu trở thành điểm đến giải trí cho mọi gia đình Việt Nam, Cinestar đang được biết đến là cụm rạp ủng hộ phim Việt, góp phần phát triển điện ảnh Việt. Không chỉ chiếu các bộ phim bom tấn quốc tế, Cinestar còn đồng hành cùng các nhà làm phim Việt Nam, đưa những tác phẩm điện ảnh đặc sắc của Việt Nam đến gần hơn với khán giả. &nbsp;</p>
          </div>
        </div>
        
        <h2 class="heading text-center mt-5">SỨ MẸNH</h2>
        <div className="row mt-5">
          <div className="col-md-4">
            <div class="ht-as-wr">
                <p class="num">01</p>
                <h3 class="ht-as-name">Góp phần tăng trưởng thị phần điện ảnh, văn hóa, giải trí của người Việt Nam</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div class="ht-as-wr">
                <p class="num">02</p>
                <h3 class="ht-as-name">Góp phần tăng trưởng thị phần điện ảnh, văn hóa, giải trí của người Việt Nam</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div class="ht-as-wr">
                <p class="num">03</p>
                <h3 class="ht-as-name">Góp phần tăng trưởng thị phần điện ảnh, văn hóa, giải trí của người Việt Nam</h3>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <img src="https://api-website.cinestar.com.vn/media/MageINIC/bannerslider/Quoc_Thanh_01_Mat_Tien.jpg"/>
          </div>
          <div className="col-md-4">
          <img src="https://api-website.cinestar.com.vn/media/MageINIC/bannerslider/01-Mat-Tien.jpg"/>
          </div>
          <div className="col-md-4">
          <img src="https://api-website.cinestar.com.vn/media/MageINIC/bannerslider/Hai-Ba-Trung-01_Mat_Tien.jpg"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
