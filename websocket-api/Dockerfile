# builder stage
FROM golang:1.24.2-alpine3.21 AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o main .

# run stage
FROM scratch
WORKDIR /
COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /app/main .
USER runner
EXPOSE 8080
CMD ["./main"]