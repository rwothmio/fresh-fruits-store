import React from "react";
import "./search-page.css";
import { useSearchParams } from "react-router-dom";
import getAllFruits from "../../utility-functions/getAllFruits";
import ProductListing from "../../components/product-listing/ProductListing";

const allFruits = getAllFruits();

function SearchPage() {
  const [query] = useSearchParams();
  const q = query.get("q");

  const searchResults = allFruits.filter((fruit) => {
    const convertedName = fruit.name.toLowerCase();
    const convertedDescr = fruit.name.toLowerCase()
    const convertedQuery = q.toLowerCase()

    return convertedName.includes(convertedQuery) || convertedDescr.includes(convertedQuery);

  });
  return (
    <div className="searchPage">
      {searchResults.length === 0 ? (
        <h2 id="noResults">
          no results for <strong className="query">{q}</strong>
        </h2>
      ) : (
        <>
          <h2>
            {searchResults.length} results for{" "}
            <strong className="query">{q}</strong>
          </h2>
          <div className="searchPage__results">
            {searchResults.map((result) => (
              <ProductListing key={result.id} fruit={result} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SearchPage;
