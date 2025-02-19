from motor.motor_asyncio import AsyncIOMotorClient

# Inicia el servidor de forma local en el host local con la IP 27017

MONGO_URI = "mongodb://localhost:27017"
DB_NAME = "BD-NoSQL"

client = AsyncIOMotorClient(MONGO_URI)
db = client[DB_NAME]