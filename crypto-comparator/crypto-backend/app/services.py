import httpx

API_URL = "https://api.coingecko.com/api/v3/simple/price"

# El método "get_crypto_price" recibe el precio de las criptomonedas de la API de coingecko

async def get_crypto_price(crypto: str, currency: str = "usd"):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{API_URL}?ids={crypto}&vs_currencies={currency}")
        data = response.json()
        return data.get(crypto, {}).get(currency, None)