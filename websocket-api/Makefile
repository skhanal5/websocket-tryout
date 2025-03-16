BINARY_NAME=websocket-api
GOOS=windows
GOARCH=386

.PHONY: clean vet  fmt lint build run test

clean:
	@echo "Cleaning up..."
	go clean 
	@if [ -f $(BINARY_NAME) ]; then rm $(BINARY_NAME); else echo "No binary to delete"; fi

vet:
	go vet

fmt:
	go fmt ./...

lint:
	golangci-lint run --enable-all

build: clean
	@echo "Building the binary..."
	GOOS=${GOOS} GOARCH=${GOARCH} go build -o ${BINARY_NAME} ./cmd/websocket-api/main.go 

run: build
	./${BINARY_NAME}

test:
	go test ./...
 