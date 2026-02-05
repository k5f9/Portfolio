package main

import (
	"encoding/json"
	"fmt"
	"math"
	"net/http"
)

type WeatherResponse struct {
	Temp      float64 `json:"temp"`
	Condition string  `json:"condition"`
	Type      string  `json:"type"`
}

func weatherHendler(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Content-Type", "application/json")

	lat := "53.35"
	lon := "83.77"

	url := fmt.Sprintf(
		"https://api.open-meteo.com/v1/forecast?latitude=%s&longitude=%s&current_weather=true",
		lat, lon,
	)

	resp, err := http.Get(url)
	if err != nil {
		http.Error(w, "open-weather error", 500)
		return
	}
	defer resp.Body.Close()

	var raw map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&raw)

	current := raw["current_weather"].(map[string]interface{})

	temp := current["temperature"].(float64)
	code := int(current["weathercode"].(float64))

	condition := weatherCodeToText(code)

	types := weatherCodeToType(code)

	json.NewEncoder(w).Encode(WeatherResponse{
		Temp:      math.Round(temp),
		Condition: condition,
		Type:      types,
	})
}

func weatherCodeToText(code int) string {
	switch code {

	case 0:
		return "Clear"

	case 1:
		return "Mainly clear"

	case 2:
		return "Partly cloudy"

	case 3:
		return "Cloudy"

	case 45:
		return "Fog"

	case 48:
		return "Depositing rime fog"

	case 51:
		return "Light drizzle"

	case 53:
		return "Moderate drizzle"

	case 55:
		return "Dense drizzle"

	case 61:
		return "Slight rain"

	case 63:
		return "Moderate rain"

	case 65:
		return "Heavy rain"

	case 71:
		return "Slight snow"

	case 73:
		return "Moderate snow"

	case 75:
		return "Heavy snow"

	case 80:
		return "Rain showers"

	case 81:
		return "Heavy rain showers"

	case 82:
		return "Violent rain showers"

	case 95:
		return "Thunderstorm"

	case 96:
		return "Thunderstorm with hail"

	case 99:
		return "Thunderstorm with heavy hail"

	default:
		return "Unknown"
	}
}

func weatherCodeToType(code int) string {
	switch {
	case code == 0 || code == 1:
		return "clear"

	case code == 2 || code == 3:
		return "cloudy"

	case code == 45 || code == 48:
		return "clear"

	case code >= 51 && code <= 65:
		return "rain"

	case code >= 71 && code <= 75:
		return "snow"

	case code >= 80 && code <= 82:
		return "rain"

	case code >= 95:
		return "storm"

	default:
		return "default"
	}
}
