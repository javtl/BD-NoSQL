# R.A. 7 Uso de bases de datos no relacionales.
# Comparador Precios Criptomonedas:

Este es un proyecto de **comparador de precios de criptomonedas** desarrollado con **FastAPI, MongoDB y React (Vite.js)**.

## 🚀 Características
- Obtiene precios de criptomonedas en tiempo real desde la API de **CoinGecko**.
- Guarda datos en **MongoDB** para análisis histórico.
- Proporciona una **API REST** con FastAPI.
- **Frontend en React** con gráficos interactivos.

## 🛠️ Tecnologías Utilizadas
### Backend:
- **Python** + **FastAPI**
- **MongoDB** (con Motor para la conexión)
- **CoinGecko API**

### Frontend:
- **React** + **Vite.js**
- **Axios** para llamadas a la API
- **Recharts** para gráficos

## 📂 Estructura del Proyecto
```
crypto-price-comparator/
├── backend/      # Código del Backend (FastAPI)
│   ├── main.py   # Archivo principal con FastAPI
│   ├── database.py   # Configuración de MongoDB
│   └── requirements.txt   # Dependencias del backend
│
├── frontend/     # Código del Frontend (React)
│   ├── src/
│   │   ├── components/   # Componentes reutilizables
│   │   ├── pages/   # Páginas principales
│   │   ├── api.js   # Llamadas a la API
│   │   └── App.jsx   # Punto de entrada de React
│   └── package.json   # Dependencias del frontend
```

## 🏗️ Instalación y Ejecución
### Backend:
1. Clonar el repositorio e instalar dependencias:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
2. Ejecutar el backend:
   ```bash
   uvicorn main:app --reload
   ```
3. El backend se ejecutará en `http://127.0.0.1:8000`

### Frontend:
1. Instalar dependencias:
   ```bash
   cd frontend
   npm install
   ```
2. Ejecutar el frontend:
   ```bash
   npm run dev
   ```
3. Acceder a `http://localhost:5173`



## 📜 Licencia
Este proyecto se distribuye bajo la licencia **MIT**.

