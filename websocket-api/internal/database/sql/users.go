package sql

import "github.com/doug-martin/goqu/v9"

func InsertUser(username string) (string, interface{}, error) {
	dialect := goqu.Dialect("postgres")

	record := goqu.Record{
		"username": username,
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