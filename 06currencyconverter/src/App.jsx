import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div class=" flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 class="text-2xl font-bold text-center mb-4">Currency Converter</h1>

      <div class="mb-4 flex items-center">
    
        <div class="w-1/2 pr-2">
          <label for="fromCurrency" class="block text-sm font-medium text-gray-700">From</label>
          <div class="flex items-center">
            <input type="number" id="fromAmount" class="w-1/2 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="0"/>
            <select id="fromCurrency" class="w-1/2 p-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
              
            </select>
          </div>
        </div>

     
        <button id="swapBtn" class="bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300 transition duration-300 mx-2">
          🔄
        </button>

       
        <div class="w-1/2 pl-2">
          <label for="toCurrency" class="block text-sm font-medium text-gray-700">To</label>
          <div class="flex items-center">
            <input type="text" id="toAmount" class="w-1/2 p-2 border border-gray-300 rounded-l-md bg-gray-100 focus:outline-none" readonly placeholder="0"/>
            <select id="toCurrency" class="w-1/2 p-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
             
            </select>
          </div>
        </div>
      </div>

      <button id="convertBtn" class="bg-indigo-500 text-white py-2 px-4 rounded-md w-full hover:bg-indigo-600 transition duration-300">Convert</button>

      <div id="result" class="mt-4 text-center text-lg font-semibold text-gray-700">
    </div>
  </div>
  </div>
  )
}

export default App
