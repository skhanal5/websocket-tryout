package handler

import (
	"net/http"

	"github.com/skhanal5/websocket-api/internal/server/payload"
)

func (h Handler) GetMessagesWithRecipient(w http.ResponseWriter, r *http.Request) {
	userId := r.PathValue("userId")
	recipientId := r.PathValue("recipientId")
	//TODO: Add validation logic to see if the recipient exists

	messages, err := h.repository.GetMessagesWithRecipient(userId, recipientId)
	if err != nil {
		encode(w, r, http.StatusInternalServerError, payload.Error{
			Message: "Failed to get messages",
			Err:     err,
		})
	}
	response := payload.MessagesResponse{Messages: messages}
	encode(w, r, http.StatusOK, response)
}
