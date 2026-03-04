import { fetchCryptoPrices } from "./api/api.js";
import { formatPrice } from "./utils/utils.js";

const fetchBtn = document.getElementById('fetchBtn');
const loadState = document.getElementById('loadState');
const coinContainer = document.getElementById('coinContainer');

async function handleFetch(){
    loadState.textContent = "Loading..."
    loadState.style.color = "blue";
    coinContainer.innerHTML = "";
    fetchBtn.disabled = true;

    try{
        const data = await fetchCryptoPrices();

        loadState.textContent = "";

        for(let coin in data){
            const card = document.createElement("div");
            card.classList.add("border", "p-4", "rounded", "shadow", "mb-4");

            card.innerHTML = `
                <h3 class="text-xl font-bold mb-2">${coin.toUpperCase()}</h3>
                <p class="text-gray-700">Price: ${formatPrice(data[coin].usd)}</p>
            `;

            coinContainer.appendChild(card);
        }

    }catch(error){
        loadState.textContent = "Error fetching data";
        loadState.style.color = "red";
    }finally{
        fetchBtn.disabled = false;
    }
}
fetchBtn.addEventListener("click", handleFetch);