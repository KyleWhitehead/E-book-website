import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Components/UI/Rating";
import Price from "../Components/UI/Price";

const BookInfo = ({ books }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--tilte--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src="" alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  Crack the coding interview
                </h2>
                <Rating rating={4.5} />
                <div className="book__selected--price">
                  <Price originalPrice={50.0} salePrice={null} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Suumary</div>
                  <div className="book__summary__para">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam auctor, nisl eget ultricies tincidunt, nunc nisl
                      aliquam nisl, eget ultricies nisl nunc eget nisl.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam auctor, nisl eget ultricies tincidunt, nunc nisl
                      aliquam nisl, eget ultricies nisl nunc eget nisl.
                    </p>
                  </div>
                  <button className="btn">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
            <div className="row">
                <div className="books__selected--top">
                    <h2 className="book__selected--title--top">
                        Recommended Books
                    </h2>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
