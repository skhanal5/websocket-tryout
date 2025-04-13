package handler

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
	"github.com/skhanal5/websocket-api/internal/server/payload"
)

// read into this
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

// TODO: not a good idea
var activeConnections = make(map[string]*websocket.Conn)

func getActiveOrMakeNewConn(w http.ResponseWriter, r *http.Request, user string) (*websocket.Conn, error) {
	senderConn, ok := activeConnections[user]
	if !ok {
		senderConn, err := upgrader.Upgrade(w, r, nil)
		if err != nil {
			return nil, err
		}
		activeConnections[user] = senderConn
	}
	return senderConn, nil
}

// probably a more elegant way of writing this
func (h Handler) InsertChat(w http.ResponseWriter, r *http.Request) {
	user := r.URL.Query().Get("user")
	senderConn, err := getActiveOrMakeNewConn(w, r, user)
	if err != nil {
		log.Fatal(err)
		return
	}

	for {
		// messages arrive in JSON format
		message := &payload.MessageRequest{}
		err := senderConn.ReadJSON(message)
		if err != nil {
			log.Println(err)
			return
		}

		// get the connection for the right user
		recipientConn := activeConnections[message.Recipient]

		// store into database
		h.repository.InsertMessage(*message)

		// write to the connection
		if err := recipientConn.WriteJSON(message); err != nil {
			log.Println(err)
			return
		}
	}
}
