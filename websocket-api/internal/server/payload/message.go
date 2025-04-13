package payload

import "github.com/skhanal5/websocket-api/internal/database/model"

type MessageRequest struct {
	Content string
	Sender string
	Recipient string
	Timestamp string
}

type MessagesResponse struct {
	Messages []*model.Message
}