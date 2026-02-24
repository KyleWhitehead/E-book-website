import React from 'react';

const Price = ({ salePrice, originalPrice }) => {
    if (originalPrice === undefined || originalPrice === null) {
        return null; // Don't render anything if price is not provided
    }

    return (
        <div className="book__price">
            <div className="book__price">
        {salePrice ? (
          <>
            <span className="book__price--normal">
              ${originalPrice.toFixed(2)}
            </span>
            ${salePrice.toFixed(2)}
          </>
        ) : (
          <>${originalPrice.toFixed(2)}</>
        )}
      </div>
        </div>
    );
}

export default Price;