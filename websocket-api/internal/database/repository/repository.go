package repository

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/skhanal5/websocket-api/internal"
)

type Repository interface {
	UserRepository
	MessageRepository
}

type Database struct {
	pool *pgxpool.Pool
}

func setupConnection(cfg internal.Config) *pgxpool.Pool {
	connString := fmt.Sprintf("postgresql://%s:%s/%s?user=%s&password=%s", cfg.DatabaseHost, cfg.DatabasePort, cfg.DatabaseName, cfg.DatabaseUser, cfg.DatabasePassword)
	dbpool, err := pgxpool.New(context.Background(), connString)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to create connection pool: %v\n", err)
		os.Exit(1)
	}
	defer dbpool.Close()
	return dbpool
}

func NewDatabase(cfg internal.Config) Repository {
	pool := setupConnection(cfg)
	return Database{
		pool: pool,
	}
}
