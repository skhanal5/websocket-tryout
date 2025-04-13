package repository

import (
	"context"
	"errors"
	"fmt"

	"github.com/georgysavva/scany/v2/pgxscan"
	"github.com/jackc/pgx/v5/pgconn"
	"github.com/skhanal5/websocket-api/internal/database/model"
	"github.com/skhanal5/websocket-api/internal/database/sql"
	"github.com/skhanal5/websocket-api/internal/server/payload"
)


type MessageRepository interface {
	GetMessagesWithRecipient(senderId string, recipientId string) ([]*model.Message, error)
	InsertMessage(message payload.MessageRequest) (error)
}

func (d Database) GetMessagesWithRecipient(sender string, recipient string) ([]*model.Message, error) {
	sql, params, err := sql.GetMessagesWithRecipient(sender, recipient)
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

	var messages []*model.Message
	if err := pgxscan.ScanAll(messages, result); err != nil {
		return nil, err
	}
	return messages, nil
}

func (d Database) InsertMessage(message payload.MessageRequest) (error) {

	tx, err := d.pool.Begin(context.Background())
	if err != nil {
		return err
	}

	// Rollback is safe to call even if the tx is already closed, so if
	// the tx commits successfully, this is a no-op
	defer tx.Rollback(context.Background())


	sql, params, err := sql.InsertMessage(message.Content, message.Sender, message.Recipient, message.Timestamp)
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