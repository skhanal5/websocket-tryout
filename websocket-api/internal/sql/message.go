package sql

import (
	"github.com/doug-martin/goqu/v9"
)

func InsertMessage(content string, sender string, recipient string, timestamp string) (string, interface{}, error) {
	dialect := goqu.Dialect("postgres")

	record := goqu.Record{
		"content": content,
		"sender": sender,
		"recipient": recipient,
		"timestamp": timestamp,
	}
	result := dialect.Insert("messages").Rows(
		record,
	)
	return result.ToSQL()
}

func GetMessagesWithRecipient(sender string, recipient string) (string, interface{}, error) {
	dialect := goqu.Dialect("postgres")

	result := dialect.From("messages").
	Select("message", "sender", "recepient", "timestamp").
	Where(goqu.C("sender").Eq(sender), goqu.C("recipient").Eq(recipient))
	return result.ToSQL()
}