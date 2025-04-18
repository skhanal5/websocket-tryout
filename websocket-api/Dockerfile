# builder stage
FROM golang:1.24.2-alpine3.21 AS builder
RUN addgroup -S appgroup && adduser -S runner -G appgroup
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o main cmd/websocket-api/main.go

# run stage
FROM scratch
WORKDIR /
COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /app/main main
USER runner
EXPOSE 80
CMD ["./main"]