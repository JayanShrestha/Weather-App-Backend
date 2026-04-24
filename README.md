<h1>🌦️ Weather App Backend — Node.js + Express + OpenWeather API</h1>

This backend powers the Weather-App-Frontend by providing clean, normalized weather data from the OpenWeather API.
It supports both city‑based and coordinate‑based weather lookups, handles geocoding, and ensures predictable responses for the frontend.

<h2>🚀 Features</h2>

- City → Weather lookup

- Coordinates → Weather lookup

- OpenWeather Geocoding API integration

- Normalized JSON responses

- CORS enabled for frontend communication

- Environment variable support

- Error‑safe responses (never crashes the frontend)

- Lightweight Express server

<h2>🛠️ Tech Stack</h2>
<table>
  <tr><th>Category</th><th>Tools</th>	</tr>
  <tr><td>Runtime</td><td>Node.js</td>	</tr>
  <tr><td>Framework</td>	<td>Express.js</td></tr>
  <tr><td>HTTP Client</td><td>Axios</td>	</tr>
  <tr><td>Environment</td><td>dotenv</td>	</tr>
  <tr><td>CORS</td><td>cors</td>	</tr>
  <tr><td>Weather Provider</td><td>OpenWeather API</td>	</tr>
</table>

<h2>📦 Installation</h2>
Clone the repo:

```bash
git clone https://github.com/JayanShrestha/Weather-App-Backend.git
cd Weather-App-Backend
```

Install dependencies:

```bash
npm install
```
Start the server:

```bash
node index.js
```
Or with nodemon:

```bash
npm run dev
```
<h2>🔑 Environment Variables</h2>
Create a .env file in the project root:

```Code
api_key=YOUR_OPENWEATHER_API_KEY
key=YOUR_GOOGLE_MAPS_API_KEY
```

<h2>📁 API Endpoints</h2>
1. POST /curweather
Get weather by city name.

Request body:

```json
{
  "location": "Sydney"
}
```
Response:
```json
{
  "data": { ...OpenWeather forecast data... }
}
```
2. POST /corweather
Get weather by coordinates.

Request body:

```json
{
  "latitude": -33.8688,
  "longitude": 151.2093
}
```
Response:

```json
{
  "data": { ...OpenWeather forecast data... }
}
```
<h2>🧩 Project Structure</h2>

```Code
.
├── public/
├── index.js
├── package.json
├── .env
└── README.md
```

<h2>⚠️ Error Handling</h2>
The backend:

- Logs errors to the console

- Returns { error: "message" } instead of crashing

- Ensures the frontend always receives a valid JSON response

<h2>🌐 CORS Configuration</h2>
CORS is enabled for all origins:

```js
cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
})
```
<h2>🤝 Contributing</h2>
Pull requests are welcome.
For major changes, please open an issue first to discuss what you’d like to modify.

📄 License
MIT License.

<h2>Weather Application Frontend </h2>
<a href="https://github.com/JayanShrestha/Weather-App-Frontend">Link for Repo</a>
