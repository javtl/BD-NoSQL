import requests
from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Cargar el archivo .env (donde guardaremos las credenciales)
load_dotenv('conexiones.env')

# Conectar a la base de datos MongoDB Atlas usando el URI que guardamos en el archivo .env
MONGO_URI = os.getenv("MONGO_URI")  # URI de conexión a MongoDB
client = MongoClient(MONGO_URI)
db = client["cripto_db"]  # Nombre de la base de datos
collection = db["precios_cripto"]  # Nombre de la colección

# Función para obtener los precios de CoinGecko
def obtener_precios():
    url = "https://api.coingecko.com/api/v3/simple/price"
    params = {
        "ids": "bitcoin,ethereum,dogecoin",  # Criptomonedas a consultar
        "vs_currencies": "usd"  # Queremos el precio en USD
    }

    # Hacer la solicitud HTTP a la API de CoinGecko
    response = requests.get(url, params=params)

    # Si la solicitud fue exitosa (código 200)
    if response.status_code == 200:
        return response.json()  # Retorna los datos en formato JSON
    else:
        return {"error": f"Error {response.status_code}"}  # Si hubo un error

# Función para guardar los precios obtenidos en MongoDB
def guardar_precios_en_mongo():
    precios = obtener_precios()  # Llamamos a la función que obtiene los precios

    # Si no hubo error al obtener los precios
    if "error" not in precios:
        # Limpiamos la colección de MongoDB antes de insertar los nuevos datos
        collection.delete_many({})

        # Insertamos cada precio de las criptomonedas en la base de datos
        for cripto, datos in precios.items():
            documento = {
                "nombre": cripto,
                "precio_usd": datos["usd"]
            }
            collection.insert_one(documento)  # Insertar en MongoDB
            print(f"✅ {cripto} guardado en MongoDB: ${datos['usd']}")
    else:
        print(f"Error al obtener los precios: {precios['error']}")

# Ejecutar el código
if __name__ == "__main__":
    guardar_precios_en_mongo()  # Llamamos a la función para guardar los precios