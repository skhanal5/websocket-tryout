package handler

import (
	"net/http"

	"github.com/skhanal5/websocket-api/internal/server/payload"
)

func (h Handler) GetUser(w http.ResponseWriter, r *http.Request) {
	userId := r.PathValue("userId")
	user, err := h.repository.GetUser(userId)
	if err != nil {
		encode(w, r, http.StatusInternalServerError, payload.Error{
			Message: "Failed to get user",
			Err:     err,
		})
	}
	encode(w, r, http.StatusOK, user)
}

func (h Handler) InsertUser(w http.ResponseWriter, r *http.Request) {
	userRequest, err := decode[payload.UserRequest](r)

	if err != nil {
		encode(w, r, http.StatusBadRequest, payload.Error{
			Message: "Error occurred when decoding request body",
			Err:     err,
		})
	}

	err = validate(userRequest)
	if err != nil {
		encode(w, r, http.StatusBadRequest, payload.Error{
			Message: "Error occurred when validating request body",
			Err:     err,
		})
	}

	err = h.repository.InsertUser(userRequest)
	if err != nil {
		encode(w, r, 400, payload.Error{
			Message: "Failed to insert user",
			Err:     err,
		})
	}
	encode(w, r, http.StatusCreated, payload.UserResponse{Message: "Inserted user"})
}
