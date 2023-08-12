import React, { useState, useEffect } from "react";
import "./buy-page.css";
import ProductListing from "../../components/product-listing/ProductListing";
import getOtherFruitSuggestions from "../../utility-functions/getOtherFruitSuggestions";
import BuyButton from "../../components/buy-button/BuyButton";
import { useParams } from "react-router-dom";
import getFruitById from "../../utility-functions/getFruitById";
import StarRating from "../../components/star-rating/StarRating";
import getUnit from "../../utility-functions/getUnit";

function BuyPage() {
  const { id } = useParams();
  const [fruit, setFruit] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchedFruit = getFruitById(id);
    setFruit(fetchedFruit);

    const fetchedSuggestions = getOtherFruitSuggestions(fetchedFruit);
    setSuggestions(fetchedSuggestions);
  }, [id]); 

  if (!fruit) {
    return null;
  }

  const { category, name, description, price, moq, img, unit } = fruit;

  return (
    <div className="buyPage">
      <div className="buyPage__buySection">
        <div className="buyPage__buySection-itemInfo">
          <div>
            <img src={img} alt={name} />
            <div id="nameAndRating">
              <p id="name">{name}</p>
              <StarRating fruit={fruit} />
            </div>
          </div>
          <div className="buyPage__buySection-itemInfo__container">
            <table>
              <tbody>
              <tr>
                <td>Category:</td>
                <td id="categoryValue">{category}</td>
              </tr>
              <tr>
                <td>Availability:</td>
                <td>In stock</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>
                  <span className="currencyUnit">$</span>
                  {price} / {unit}
                </td>
              </tr>
              <tr>
                <td>Minimum:</td>
                <td>
                  {moq} {getUnit(moq, unit)}
                </td>
              </tr>
              </tbody>
            </table>

            <BuyButton fruit={fruit} />
          </div>
        </div>
        <p id="description">{description}</p>
      </div>

      <div className="buyPage__suggestionSection">
        {suggestions && (
          <p className="buyPage__suggestionSection-heading">
            Other {fruit.category}
          </p>
        )}
        <div className="buyPage__suggestionSection-container">
          {suggestions &&
            suggestions.map((suggestion) => (
              <ProductListing key={suggestion.id} fruit={suggestion} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BuyPage;
