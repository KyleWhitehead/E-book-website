import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../Components/UI/Rating";
import Price from "../Components/UI/Price";
import Book from "../Components/UI/Book";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === +id);

function addBookToCart(book) {
  addToCart(book);
}

function bookExistsOnCart() {
  return cart.find(book => book.id === +id);
}

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
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  {book.title}
                </h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
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
                  {
                    bookExistsOnCart() ? (
                    <Link to={`/cart`} className="book__link">
                    <button className="btn">Checkout</button>
                    </Link>
                    ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to cart
                  </button>
                    )}
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
                <div className="books">
                    {
                        books
                        .filter(book => book.rating === 5 && +id !== book.id)
                        .slice(0, 4)
                        .map(book => <Book book={book} key={book.id} />)
                    }
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
