// import {useEffect,useState} from "react";

// function useCurrencyInfo( currency ){
//     const [data,setData] = useState({})
//     useEffect(()=>{
//         fetch(`https://v6.exchangerate-api.com/v6/240f1ab04e2114258661f4c4/latest/USD`)
//         .then((res)=>res.json())
//         .then((res)=>setData(res[currency]))
//     },[currency])
//     return data
// }

// export default useCurrencyInfo;


import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/240f1ab04e2114258661f4c4/latest/${currency}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyInfo(data.conversion_rates);
      })
      .catch((error) => console.error('Error fetching currency info:', error));
  }, [currency]);

  return currencyInfo;
}

export default useCurrencyInfo;
