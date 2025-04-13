package server

import (
	"net/http"
	"github.com/skhanal5/websocket-api/internal/server/handler"
)

type Server struct {
	server *http.Server
}

func New(address string) Server {
	mux := http.NewServeMux()

	// separate if possible
	mux.HandleFunc("GET /health", handler.HandleHealth)
	mux.HandleFunc("POST /chat", handler.HandleChat)
	mux.HandleFunc("GET /users/{userId}", handler.HandleChat)
	mux.HandleFunc("POST /users", handler.HandleChat)
	mux.HandleFunc("GET /users/{userId}/messages", handler.HandleChat)
	mux.HandleFunc("POST /users/{userId}/messages", handler.HandleChat)

	server := &http.Server{
		Addr:    address,
		Handler: mux,
	}

	return Server{
		server: server,
	}
}

func (s *Server) Start() error {
	return s.server.ListenAndServe()
}
