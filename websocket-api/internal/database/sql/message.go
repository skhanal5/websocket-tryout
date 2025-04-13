package sql

import (
	"github.com/doug-martin/goqu/v9"
)

func InsertMessage(content string, senderId string, recipientId string, timestamp string) (string, interface{}, error) {
	dialect := goqu.Dialect("postgres")

	record := goqu.Record{
		"content": content,
		"sender_id": senderId,
		"recipient_id": recipientId,
		"timestamp": timestamp,
	}
	result := dialect.Insert("message").Rows(
		record,
	)
	return result.ToSQL()
}

func GetMessagesWithRecipient(senderId string, recipientId string) (string, interface{}, error) {
	dialect := goqu.Dialect("postgres")

	result := dialect.From("message").
	Select("message", "sender_id", "recipient_id", "timestamp").
	Where(goqu.C("sender_id").Eq(senderId), goqu.C("recipient_id").Eq(recipientId))
	return result.ToSQL()
}