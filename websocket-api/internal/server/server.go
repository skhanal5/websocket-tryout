package server

import (
	"log"
	"net/http"

	"github.com/skhanal5/websocket-api/internal"
	"github.com/skhanal5/websocket-api/internal/database/repository"
	"github.com/skhanal5/websocket-api/internal/server/handler"
)


func Start(cfg internal.Config) {

	// setup database
	pool := repository.NewDatabase(cfg)
	h := handler.NewHandler(pool)
	
	// setup server
	mux := http.NewServeMux()
	registerRoutes(mux, &h)

	server := &http.Server{
		Addr:    cfg.Address,
		Handler: mux,
	}

	log.Fatal(server.ListenAndServe())
}

func registerRoutes(mux *http.ServeMux, h *handler.Handler) {
	mux.HandleFunc("GET /health", h.GetHealth)
	mux.HandleFunc("GET /chat", h.InsertChat) //websockets are GET
	mux.HandleFunc("POST /users", h.InsertUser)
	mux.HandleFunc("GET /users/{userId}", h.GetUser)
	mux.HandleFunc("GET /users/{userId}/messages/{recipientId}", h.GetMessagesWithRecipient)
}