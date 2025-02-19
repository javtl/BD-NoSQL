from typing import Optional
from pydantic import BaseModel
from datetime import datetime

class CryptoPrice(BaseModel):
    symbol= str
    price= float
    timestamp= datetime = datetime.now()