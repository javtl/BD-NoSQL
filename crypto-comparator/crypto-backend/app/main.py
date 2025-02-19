# Configuración del servidor.
from fastapi import FastAPI
from app.routes import router

app = FastAPI(title="Crypto Price Comparator")

app.include_router(router)

# La dirección 127.0.0.1 es local, sólo va a poder accederse desde el ordenador donde se ejecute.
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
