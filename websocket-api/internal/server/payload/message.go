package payload

import "github.com/skhanal5/websocket-api/internal/database/model"

type MessagesResponse struct {
	Messages []*model.Message
}