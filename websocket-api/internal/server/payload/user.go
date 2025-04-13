package payload

type UserRequest struct {
	Username string `validate:"required"`
}

type UserResponse struct {
	Message string
}
