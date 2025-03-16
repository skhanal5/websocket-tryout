package main

import (
	"log"

	"github.com/skhanal5/websocket-api/internal/api"
)

func main() {
	s := api.New(":8080")
	log.Fatal(s.Start())
}
