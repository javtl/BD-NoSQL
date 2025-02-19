from fastapi import APIRouter, Depends
from app.database import db
from app.services import get_crypto_price
from app.models import CryptoPrice

router = APIRouter()

@router.get("/price/{crypto}")
async def fetch_price(crypto: str):
    price = await get_crypto_price(crypto)
    if price is None:
        return {"error": "Criptomoneda no encontrada"}
    
    crypto_data = CryptoPrice(symbol=crypto, price=price)
    await db.prices.insert_one(crypto_data.model_dump())
    
    return {"crypto": crypto, "price": price}