package database

import (
	"context"
	"errors"
	"fmt"

	"github.com/georgysavva/scany/v2/pgxscan"
	"github.com/jackc/pgx/v5/pgconn"
	"github.com/skhanal5/websocket-api/internal/model"
	"github.com/skhanal5/websocket-api/internal/sql"
)

type UserRepository interface {
	GetUser(username string) (*model.User, error)
	InsertUser(username string) (error)
}

func (d Database) GetUser(username string) (*model.User, error) {
	sql, params, err := sql.GetUser(username)
	if err != nil {
		return nil, err
	}
	result, err := d.pool.Query(context.Background(), sql, params)
	if err != nil {
		var pgErr *pgconn.PgError
		if errors.As(err, &pgErr) {
			return nil, fmt.Errorf("%s", pgErr.Message)
		}
	}

	var user model.User
	if err := pgxscan.ScanOne(user, result); err != nil {
		return nil, err
	}
	return &user, nil
}

func (d Database) InsertUser(username string) (error) {

	tx, err := d.pool.Begin(context.Background())
	if err != nil {
		return err
	}

	// Rollback is safe to call even if the tx is already closed, so if
	// the tx commits successfully, this is a no-op
	defer tx.Rollback(context.Background())


	sql, params, err := sql.InsertUser(username)
	if err != nil {
		return err
	}

	_, err = tx.Exec(context.Background(), sql, params)
	if err != nil {
		var pgErr *pgconn.PgError
		if errors.As(err, &pgErr) {
			return fmt.Errorf("%s", pgErr.Message)
		}
	}

	err = tx.Commit(context.Background())
	if err != nil {
		return err
	}
	return nil
}