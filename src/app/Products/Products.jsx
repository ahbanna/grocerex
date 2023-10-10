//  implement search functionaluty
// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";
// import { FaCartPlus, FaShoppingCart, FaSearch } from "react-icons/fa";

// const Products = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setSearchResults(data); // Initialize searchResults with all products
//       });
//   }, []);

//   const handleSearch = () => {
//     const filteredProducts = data.filter((product) =>
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(filteredProducts);
//   };

//   const setProduct = () => {
//     localStorage.setItem("name", "Banna");
//   };
//   return (
//     <div className="all-products">
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           onKeyPress={(e) => {
//             if (e.key === "Enter") {
//               handleSearch();
//             }
//           }}
//         />
//         <button onClick={handleSearch} className="search-btn">
//           <FaSearch /> {/* Assuming you have an icon component for search */}
//         </button>
//       </div>
//       <div className="container">
//         {searchResults.length === 0 ? (
//           <div className="no-results">No products found</div>
//         ) : (
//           searchResults.map(
//             ({ id, title, price, category, image, description, rating }) => (
//               <div key={id} className="single-product">
//                 <div className="card w-96 bg-base-100 shadow-xl">
//                   <figure>
//                     <Image src={image} width={150} height={200} alt="Shoes" />
//                   </figure>
//                   <div className="card-body">
//                     <h2 className="card-title text-center">{title}</h2>
//                     <div className="rating-star">
//                       <div>
//                         <Rating
//                           style={{ maxWidth: 80 }}
//                           value={rating.rate}
//                           readOnly
//                         />
//                       </div>
//                       <div className="rating-count">
//                         <p>{rating.count} Reviews</p>
//                       </div>
//                     </div>
//                     <p className="price">${price}</p>
//                     <div className="card-actions justify-center cart-btn">
//                       <button onClick={setProduct()}>
//                         <FaCartPlus></FaCartPlus> Add to cart
//                       </button>
//                     </div>
//                     <div>
//                       <button
//                         className="btn"
//                         onClick={() =>
//                           document.getElementById(`modal_${id}`).showModal()
//                         }
//                       >
//                         open modal
//                       </button>
//                       <dialog id={`modal_${id}`} className="modal">
//                         <div className="modal-box">
//                           <div className="modal-area">
//                             <div className="modal-image">
//                               <Image
//                                 src={image}
//                                 width={500}
//                                 height={200}
//                                 alt="Shoes"
//                               />
//                             </div>
//                             <div className="modal-content">
//                               <h2>{title}</h2>
//                               <p className="category mt-4">
//                                 Category: <span>{category}</span>
//                               </p>
//                               <div className="rating-star">
//                                 <div>
//                                   <Rating
//                                     style={{ maxWidth: 80 }}
//                                     value={rating.rate}
//                                     readOnly
//                                   />
//                                 </div>
//                                 <div className="rating-count">
//                                   <p>{rating.count} Reviews</p>
//                                 </div>
//                               </div>
//                               <p className="price">${price}</p>
//                               <p>{description}</p>
//                               <div className="card-actions justify-left mt-5 cart-btn">
//                                 <button>
//                                   <FaCartPlus></FaCartPlus> Add to cart
//                                 </button>
//                                 <button>
//                                   <FaShoppingCart></FaShoppingCart> Buy Now
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <form method="dialog" className="modal-backdrop">
//                           <button>close</button>
//                         </form>
//                       </dialog>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
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
import { FaCartPlus, FaShoppingCart, FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "@/components/SectionTitle";

const Products = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setSearchResults(data); // Initialize searchResults with all products
      });
  }, []);

  const handleSearch = () => {
    const filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  const setProduct = (id, title, price) => {
    const cartItem = {
      id: id,
      title: title,
      price: price,
    };
    // Retrieve existing cart items from local storage
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Add the new item to the cart
    const updatedCartItems = [...existingCartItems, cartItem];

    // Save the updated cart items to local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    // Optionally, you can display a message to the user indicating that the item has been added to the cart
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product added to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="products-area container">
      <SectionTitle
        title="Top Selling Products"
        subtitle="
        Explore the Ultimate Guide to Shopping Success. Unveiling the Top Selling Products of the Year! Your Exclusive Insight into the Trendiest Items, Best Deals, and Must-Have Innovations, All in One Place
        
        "
      />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button onClick={handleSearch} className="search-btn">
          <FaSearch />
        </button>
      </div>
      <div className="all-products">
        {searchResults.length === 0 ? (
          <div className="no-results">No products found</div>
        ) : (
          searchResults.map(
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
                      <button onClick={() => setProduct(id, title, price)}>
                        <FaCartPlus /> Add to cart
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
                                <button
                                  onClick={() => setProduct(id, title, price)}
                                >
                                  <FaCartPlus /> Add to cart
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
          )
        )}
      </div>
    </div>
  );
};

export default Products;
