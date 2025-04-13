package handler

import "net/http"

func (h Handler) GetUser(w http.ResponseWriter, r *http.Request) {


	// h.db.GetUser()

	// // set up response
	// w.WriteHeader(200)
	// w.Write(response)
}

func (h Handler) InsertUser(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(200)

	// probably a better way of doing this
	response := []byte("Hello World!")
	w.Write(response)
}
