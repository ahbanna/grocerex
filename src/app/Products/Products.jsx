// SECOND
// "use client";
// import React from "react";
// import Image from "next/image";
// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";
// import { FaCartPlus, FaShoppingCart } from "react-icons/fa";

// const Products = async () => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json();

//   return (
//     <div className="all-products">
//       <div className="container">
//         {data.map(
//           ({ id, title, price, category, image, description, rating }) => (
//             <div key={id} className="single-product">
//               <div className="card w-96 bg-base-100 shadow-xl">
//                 <figure>
//                   <Image src={image} width={150} height={200} alt="Shoes" />
//                 </figure>
//                 <div className="card-body">
//                   <h2 className="card-title text-center">{title}</h2>
//                   <div className="rating-star">
//                     <div>
//                       <Rating
//                         style={{ maxWidth: 80 }}
//                         value={rating.rate}
//                         readOnly
//                       />
//                     </div>
//                     <div className="rating-count">
//                       <p>{rating.count} Reviews</p>
//                     </div>
//                   </div>
//                   <p className="price">${price}</p>
//                   <div className="card-actions justify-center cart-btn">
//                     <button>
//                       <FaCartPlus></FaCartPlus> Add to cart
//                     </button>
//                   </div>
//                   <div>
//                     <button
//                       className="btn"
//                       onClick={() =>
//                         document.getElementById(`modal_${id}`).showModal()
//                       }
//                     >
//                       open modal
//                     </button>
//                     <dialog id={`modal_${id}`} className="modal">
//                       <div className="modal-box">
//                         <div className="modal-area">
//                           <div className="modal-image">
//                             <Image
//                               src={image}
//                               width={500}
//                               height={200}
//                               alt="Shoes"
//                             />
//                           </div>
//                           <div className="modal-content">
//                             <h2>{title}</h2>
//                             <p className="category mt-4">
//                               Category: <span>{category}</span>
//                             </p>
//                             <div className="rating-star">
//                               <div>
//                                 <Rating
//                                   style={{ maxWidth: 80 }}
//                                   value={rating.rate}
//                                   readOnly
//                                 />
//                               </div>
//                               <div className="rating-count">
//                                 <p>{rating.count} Reviews</p>
//                               </div>
//                             </div>
//                             <p className="price">${price}</p>
//                             <p>{description}</p>
//                             <div className="card-actions justify-left mt-5 cart-btn">
//                               <button>
//                                 <FaCartPlus></FaCartPlus> Add to cart
//                               </button>
//                               <button>
//                                 <FaShoppingCart></FaShoppingCart> Buy Now
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <form method="dialog" className="modal-backdrop">
//                         <button>close</button>
//                       </form>
//                     </dialog>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

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
                  <div>
                    <button
                      className="btn"
                      onClick={() =>
                        document.getElementById(`modal_${id}`).showModal()
                      }
                    >
                      open modal
                    </button>
                    <dialog id={`modal_${id}`} className="modal">
                      <div className="modal-box">
                        <div className="modal-area">
                          <div className="modal-image">
                            <Image
                              src={image}
                              width={500}
                              height={200}
                              alt="Shoes"
                            />
                          </div>
                          <div className="modal-content">
                            <h2>{title}</h2>
                            <p className="category mt-4">
                              Category: <span>{category}</span>
                            </p>
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
                            <p>{description}</p>
                            <div className="card-actions justify-left mt-5 cart-btn">
                              <button>
                                <FaCartPlus></FaCartPlus> Add to cart
                              </button>
                              <button>
                                <FaShoppingCart></FaShoppingCart> Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
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
