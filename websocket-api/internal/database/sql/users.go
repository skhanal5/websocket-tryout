package sql

import (
	"github.com/doug-martin/goqu/v9"
	"github.com/skhanal5/websocket-api/internal/server/payload"
)

func InsertUser(request payload.UserRequest) (string, interface{}, error) {
	dialect := goqu.Dialect("postgres")

	record := goqu.Record{
		"username": request.Username,
	}
	result := dialect.Insert("users").Rows(
		record,
	)
	return result.ToSQL()
}

func GetUser(username string) (string, interface{}, error) {
	dialect := goqu.Dialect("postgres")

	result := dialect.From("users").Select("username")
	return result.ToSQL()
}