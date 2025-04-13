package payload

// Error is a generic error struct used throughout the server layer
type Error struct {
	Message string `json:"message,omitempty"`
	Err error `json:"err,omitempty"`
}