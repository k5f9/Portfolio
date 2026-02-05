package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/weather", weatherHendler)
	http.HandleFunc("/discord", discordHandler)
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Fatal(http.ListenAndServe(":"+port, nil))

}
