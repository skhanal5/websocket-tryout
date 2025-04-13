package repository

import (
	"context"
	"github.com/jackc/pgx/v5/pgxpool"
)

type Repository interface {
	UserRepository
	MessageRepository
}

type Database struct {
	pool *pgxpool.Pool
}

func NewDatabase(connection string) Repository {
	conn, err := pgxpool.New(context.Background(), connection) // context usage
	if err != nil {
		panic("Couldn't establish database connection")
	}
	return Database{
		pool: conn,
	}
}
