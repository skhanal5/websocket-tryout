package model


type Message struct {
	Content string `db:"content"`
	Sender string `db:"sender_id"`
	Recipient string `db:"recipient_id"`
	Timestamp string `db:"timestamp"`
}