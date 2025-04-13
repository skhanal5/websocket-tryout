package handler

import "github.com/skhanal5/websocket-api/internal/database/repository"

type Handler struct {
	repository repository.Repository
}