export async function fetchCryptoPrices() {

    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,enso&vs_currencies=usd");

    if(!response.ok){
        throw new Error("Network response failure");
    }

    return response.json();
}
