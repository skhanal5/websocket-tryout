package main

import (
	"flag"
	"fmt"
	"os"

	"github.com/skhanal5/websocket-api/internal"
	"github.com/skhanal5/websocket-api/internal/server"
)

const (
	ENVIRONMENT       = "ENVIRONMENT"
	ADDRESS           = "ADDRESS"
	DATABASE_HOST     = "DATABASE_HOST"
	DATABASE_PORT     = "DATABASE_PORT"
	DATABASE_NAME     = "DATABASE_NAME"
	DATABASE_USERNAME = "DATABASE_USERNAME"
	DATABASE_PASSWORD = "DATABASE_PASSWORD"
)

func main() {
	cfg := internal.Config{}
	flag.StringVar(&cfg.Environment, ENVIRONMENT, GetEnvVar(ENVIRONMENT), "the application environment")
	flag.StringVar(&cfg.Address, ADDRESS, GetEnvVar(ADDRESS), "the api address")
	flag.StringVar(&cfg.DatabaseHost, DATABASE_HOST, GetEnvVar(DATABASE_HOST), "the database host")
	flag.StringVar(&cfg.DatabasePort, DATABASE_PORT, GetEnvVar(DATABASE_PORT), "the database port")
	flag.StringVar(&cfg.DatabaseName, DATABASE_NAME, GetEnvVar(DATABASE_NAME), "the database name")
	flag.StringVar(&cfg.DatabaseUser, DATABASE_USERNAME, GetEnvVar(DATABASE_USERNAME), "the database username")
	flag.StringVar(&cfg.DatabasePassword, DATABASE_PASSWORD, GetEnvVar(DATABASE_PASSWORD), "the database password")
	server.Start(cfg)
}

func GetEnvVar(key string) string {
	variable, ok := os.LookupEnv(key)
	if !ok {
		panic(fmt.Sprintf("No value found for key: %s", key))
	}
	return variable
}
