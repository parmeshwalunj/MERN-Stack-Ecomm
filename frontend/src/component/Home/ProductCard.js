import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    // <Link className="productCard" to={`/product/${product._id}`}>
    //   <img src={product.images[0].url} alt={product.name} />
    //   <p>{product.name}</p>
    //   <div>
    //     <Rating {...options} />{" "}
    //     <span className="productCardSpan">
    //       {" "}
    //       ({product.numOfReviews} Reviews)
    //     </span>
    //   </div>
    //   <span>{`₹${product.price}`}</span>
    // </Link>

    <Link className="p-card" to={`/product/${product._id}`}>
		<div className="p-tumb">
			<img src={product.images[0].url} alt={product.name} />
		</div>
		<div className="p-details">
			<h4>{product.name}</h4>
			<Rating {...options} />{" "}
      <span className="pCardSpan">
          {" "}
           ({product.numOfReviews} Reviews)
      </span>
			<div className="p-bottom-details">
				<div className="p-price">{`₹${product.price}`}</div>
      </div>
      </div>
      </Link>

  );
};

export default ProductCard;
