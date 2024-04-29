import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../../../thunks/currencyThunk";

const Currency = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);

  const updateLocalStorage = (selectedCurrency) => {
    localStorage.setItem("selectedCurrency", selectedCurrency);
  };

  useEffect(() => {
    const savedCurrency = localStorage.getItem("selectedCurrency");
    if (savedCurrency) {
      dispatch(changeCurrency(savedCurrency));
    }
  }, []);


  const handlerClick = (key) => {
    dispatch(changeCurrency(key));
     updateLocalStorage(key);
  };
  return (
    <div>
      <div className="currency">
        {currency.loading &&
          Object.keys(currency.currency.data).map((key) => (
            <div
              key={key}
              onClick={() => handlerClick(key)}
              className={currency.active === key ? "active" : ""}
            >
              {currency.currency.data[key].code}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Currency;
