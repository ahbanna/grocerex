import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaCartPlus } from "react-icons/fa";

const Products = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return (
    <div className="all-products">
      <div className="container">
        {data.map(
          ({ id, title, price, category, image, description, rating }) => (
            <div key={id} className="single-product">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <Image src={image} width={150} height={200} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-center">{title}</h2>
                  <div className="rating-star">
                    <div>
                      <Rating
                        style={{ maxWidth: 80 }}
                        value={rating.rate}
                        readOnly
                      />
                    </div>
                    <div className="rating-count">
                      <p>{rating.count} Reviews</p>
                    </div>
                  </div>
                  <p className="price">${price}</p>
                  <div className="card-actions justify-center cart-btn">
                    <button>
                      <FaCartPlus></FaCartPlus> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Products;
