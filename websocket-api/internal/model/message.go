package model


type Message struct {
	Content string `db:"content"`
	Sender string `db:"sender"`
	Recipient string `db:"recipient"`
	Timestamp string `db:"timestamp"`
}