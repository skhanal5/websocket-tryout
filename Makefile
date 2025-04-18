.PHONY: clean restart rund db api logs

clean:
	docker compose down

restart: clean
	docker compose rm 

rund: clean
	docker compose up -d

build-api:
	cd ./websocket-api; make build

db: clean
	docker compose up db pgadmin dozzle -d

api: clean build-api
	docker compose up db pgadmin api dozzle -d

logs:
	docker compose logs