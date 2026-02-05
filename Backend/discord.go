package main

import (
	"encoding/json"
	"net/http"
)

type DiscordActivity struct {
	Type int    `json:"type"`
	Name string `json:"name"`
}

type DiscordResponse struct {
	Status     string            `json:"status"`
	Game       *string           `json:"game"`
	Activities []DiscordActivity `json:"activities"`
}

func discordHandler(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	userID := "447236664331599882"
	url := "https://api.lanyard.rest/v1/users/" + userID

	resp, err := http.Get(url)
	if err != nil {
		http.Error(w, "lanyard err", 500)
		return
	}
	defer resp.Body.Close()

	var raw map[string]interface{}
	if err := json.NewDecoder(resp.Body).Decode(&raw); err != nil {
		http.Error(w, "decode err", 500)
		return
	}

	data, ok := raw["data"].(map[string]interface{})
	if !ok {
		http.Error(w, "no data", 500)
		return
	}

	status, _ := data["discord_status"].(string)

	var game *string

	activities, ok := data["activities"].([]interface{})
	if ok {
		for _, a := range activities {
			act, ok := a.(map[string]interface{})
			if !ok {
				continue
			}

			t, _ := act["type"].(float64)
			name, _ := act["name"].(string)

			if int(t) == 0 && game == nil {
				game = &name
			}

		}
	}

	var name *string
	var globalname *string

	user, ok := data["discord_user"].(map[string]interface{})

	if ok {
		if gn, ok := user["global_name"].(string); ok {
			globalname = &gn
		}

		if un, ok := user["username"].(string); ok {
			name = &un
		}
	}

	json.NewEncoder(w).Encode(map[string]interface{}{
		"status":   status,
		"game":     game,
		"username": name,
		"global":   globalname,
	})
}
