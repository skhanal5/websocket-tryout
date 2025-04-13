package server

import (
	"net/http"
	"github.com/skhanal5/websocket-api/internal/server/handler"
)

type Server struct {
	server *http.Server
}

func New(address string, h *handler.Handler) Server {
	mux := http.NewServeMux()
	registerRoutes(mux, h)

	server := &http.Server{
		Addr:    address,
		Handler: mux,
	}

	return Server{
		server: server,
	}
}

func registerRoutes(mux *http.ServeMux, h *handler.Handler) {
	mux.HandleFunc("GET /health", h.GetHealth)
	mux.HandleFunc("POST /chat", h.InsertChat)
	mux.HandleFunc("POST /users", h.InsertUser)
	mux.HandleFunc("GET /users/{userId}", h.GetUser)
	mux.HandleFunc("GET /users/{userId}/messages/{recipientId}", h.GetMessagesWithRecipient)
}

func (s *Server) Start() error {
	return s.server.ListenAndServe()
}
