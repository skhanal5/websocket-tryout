package handler

import "net/http"

func HandleHealth(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(200)

	// probably a better way of doing this
	response := []byte("Hello World!")
	w.Write(response)
}
