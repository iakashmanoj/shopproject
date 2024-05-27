import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Shop = ({ books }) => {
  const [query, setQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBooks(filtered);
  };


  return (
    <div>
      {/* Navbar */}
      <nav style={{ backgroundColor: '#00B5F5', padding: '10px' }}>
        <h1> Alibaba's Bookstore</h1>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={handleSearch}
          style={{ marginLeft: '10px' }}
        />
      </nav>

      {/* Product Listings */}
      <div style={{ paddingTop: '40px', paddingLeft: '50px', paddingRight: '50px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filteredBooks.map((book) => ( 
            <div key={book.asin} style={{ width: 'calc(25% - 20px)', margin: '10px', borderRadius:'10px', border: '1px solid #ccc', padding:'20px' }}>
              <h2>{book.title}</h2>
              <img src={book.image_url} alt={book.title} style={{ maxWidth: '100%' }} />
              <p>Author: {book.author}</p>
              <p>Price: ${book.price}</p>
              <p>Rating: {book.rating}</p>
              <p>Reviews: {book.reviews_count}</p>
              <a href={book.url} target="_blank" rel="noopener noreferrer">
                View on Amazon
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;























// import React from 'react';
// import '../App.css';
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"></link>

// function Shop() {
//   return (
//     <div>
//       <h1 className="shop-heading">Welcome to Alibaba's Collections</h1>
      
//       {/* Product Listings */}
//       <div className="product-listings">
//         {/* Product Cards */}
//         {Array.from({ length: 12 }, (_, index) => (
//           <div className="product-card" key={index}>
//             <img src={`https://m.media-amazon.com/images/I/71DBklVte9L._AC_UY1100_.jpg`} alt={`Product ${index + 1}`} />
//             <div className="product-details">
//               <h2>Product {index + 1}</h2>
//               <p>Description of Product {index + 1}</p>
//               <p>Price: $10</p>
//               <button>Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Shopping Cart */}
//       <div className="shopping-cart">
//         <h2>Shopping Cart</h2>
//         <ul>
//           <li>Product 1 - $10</li>
          
//         </ul>
//         <button>Checkout</button>
//       </div>




      
//       {/* Footer */}




//       <footer className="new_footer_area bg_color">
//                 <div className="new_footer_top">
//                             <div className="col-lg-3 col-md-6">
//                                 <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility:"visible", animationDelay:"0.2s", animationName:"fadeInLeft"}}>
//                                     <h3>Get in Touch</h3>
//                                     <p>Don’t miss any updates of our new templates and extensions.!</p>
//                                     <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
//                                         <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
//                                         <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
//                                         <p className="mchimp-errmessage" style={{display:"none"}}></p>
//                                         <p className="mchimp-sucmessage" style={{display:"none"}}></p>
//                                     </form>
//                                 </div>
//                             </div>
//                             <div className="col-lg-3 col-md-6">
//                                 <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility:"visible", animationDelay:"0.4s", animationName:"fadeInLeft"}}>
//                                     <h3>Download</h3>
//                                     <ul className="list-unstyled f_list">
//                                         <li><a href="#">Company</a></li>
//                                         <li><a href="#">Shopping Bags</a></li>
//                                         <li><a href="#">ios App</a></li>
//                                         <li><a href="#">Desktop</a></li>
//                                         <li><a href="#">Projects</a></li>
//                                         <li><a href="#">My tasks</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="col-lg-3 col-md-6">
//                                 <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility:"visible", animationDelay:"0.6s", animationName:"fadeInLeft"}}>
//                                     <h3>Help</h3>
//                                     <ul className="list-unstyled f_list">
//                                         <li><a href="#">FAQ</a></li>
//                                         <li><a href="#">Term &amp; conditions</a></li>
//                                         <li><a href="#">Reporting</a></li>
//                                         <li><a href="#">Documentation</a></li>
//                                         <li><a href="#">Support Policy</a></li>
//                                         <li><a href="#">Privacy</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="social-container">
//                             <ul className="social-icons">                                                 
//                                 <h3>Follow us on</h3>
//                                     <li><a href="https://www.instagram.com/alibaba.com_official/?hl=en"><i className="fa-brands fa-instagram"></i></a></li>
//                                     <li><a href="https://twitter.com/AlibabaGroup"><i className="fa-brands fa-twitter"></i></a></li>
//                                     <li><a href="https://www.linkedin.com/company/alibaba-com"><i className="fa-brands fa-linkedin-in"></i></a></li>
//                                     <li><a href="https://codepen.io/xieyongchun/pen/aaWJdz"><i className="fa-brands fa-square-facebook"></i></a></li>
//                                 </ul>
//                             </div>
  

//                 </div>
//                 <div className="footer_bottom">
//                     <div className="container"> 
//                         <p className="mb-0 f_400 text-center">© Alibaba Inc.. 2024 All rights reserved.</p>
//                     </div>
//                 </div>

//             </footer>
//     </div>
//   );
// }

// export default Shop;




