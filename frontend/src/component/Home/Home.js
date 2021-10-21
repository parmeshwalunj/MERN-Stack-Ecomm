import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import  { Carousel } from 'react-bootstrap';

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

           {/* <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1> */}

<Carousel slide={true} pause={true}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 slide"
          src={"https://cdn3.notifyvisitors.com/blog/wp-content/uploads/2019/01/11064310/Top-5-Push-Notifications-Templates-For-Ecommerce-Website-banner1.jpg"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>GET LATEST LAPTOPS AT BEST PRICES</h1>
          <p>Gaming Laptop from brands like HP, Dell, Lenovo, Acer, and avail great discounts </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 slide"
          src={"https://preview.free3d.com/img/2020/03/2279721014730425896/nbjdz4ki-900.jpg"}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1>SAVE UPTO 20% OFF</h1>
        <p>On Selected Laptops And Desktops</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 slide"
          src={"https://thumbs.dreamstime.com/b/businessman-dark-background-connecting-modern-smartphone-tablet-laptop-computer-d-rendering-176664781.jpg"}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1>ALL NEW SMARTPHONE UPTO 30% OFF</h1>
        <p>Top mobile brands like Samsung, Oppo, Vivo, Apple and many more are available here under discounts</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

           
            {/* <a href="#container">
              <button>
                Shop Now <CgMouse />
              </button>
            </a>  */}
          {/* </div>  */}

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
