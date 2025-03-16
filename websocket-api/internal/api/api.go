package api

import "net/http"

type Server struct {
	server *http.Server
}

func New(address string) Server {
	mux := http.NewServeMux()
	mux.HandleFunc("/health", getHealth)
	server := &http.Server{
		Addr: address,
		Handler: mux,
	}
	return Server{
		server: server,
	}
}

func (s *Server) Start() error {
	return s.server.ListenAndServe()
}