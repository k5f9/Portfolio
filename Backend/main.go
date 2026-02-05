package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("/weather", weatherHendler)
	http.HandleFunc("/discord", discordHandler)
	http.ListenAndServe(":8080", nil)
}
