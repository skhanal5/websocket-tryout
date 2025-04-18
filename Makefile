.PHONY: clean rund logs logs-api logs-ui logs-db logs-admin

clean:
	docker compose down
	docker compose rm

rund: clean
	docker compose up -d

logs:
	docker compose logs

logs-api:
	docker compose logs api

logs-ui:
	docker compose logs ui

logs-db:
	docker compose logs db

logs-admin:
	docker compose logs pgadmin
