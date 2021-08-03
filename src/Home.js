import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/Other/RB-4489_PVOD_Fast9/Amazon_GRD_DesktopHero_RB-4489_PVOD_NBCU_Fast9_GatewayHeroesOnly_1500x600._CB664032398_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="4903850"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses [By ER]-[Paperback]"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._SX324_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="23445930"
            title="HAUSWIRT 3-IN-1 Stand Mixer, 5.3Qt 550W 8-Speed Tilt-Head Electric Kitchen Mixers with Digital Display, Power Hub for Attachments, Food Mixer with Dough Hook, Wire Whip, Mixing Beater- Baby Blue"
            price={199.99}
            image="https://m.media-amazon.com/images/I/71dR+4gxPAL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="48017462"
            title="SAMSUNG Galaxy S21+ Plus 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 8K Video 12MP High Res, Phantom Black"
            price={999.99}
            image="https://m.media-amazon.com/images/I/61cjeSE+Z-L._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id="340145701"
            title='AOC C24G1A 24" Curved Frameless Gaming Monitor, FHD 1920x1080, 1500R, VA, 1ms MPRT, 165Hz (144Hz supported), FreeSync Premium, Height adjustable Black'
            price={192.98}
            image="https://m.media-amazon.com/images/I/81GJkTKuLnL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="480174014"
            title="Echo Dot (4th Gen) | Smart speaker with Alexa | Twilight Blue"
            price={49.99}
            image="https://m.media-amazon.com/images/I/71UCjudB1cL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="95185829"
            title="New Apple Watch Series 6 (GPS, 40mm) - Blue Aluminum Case with Deep Navy Sport Band"
            price={349.99}
            image="https://m.media-amazon.com/images/I/71bf9IpGjtL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
