.PHONY: help dev build start lint docker-build docker-run docker-stop docker-restart docker-logs compose-up compose-down compose-logs clean

# Default image and container configuration
APP_NAME ?= bytebandits
IMAGE_NAME ?= bytebandits:latest
PORT ?= 3000
ENV_FILE ?= .env.local

help:
	@echo "Available commands:"
	@echo "  make dev             - Start Next.js development server"
	@echo "  make build           - Build Next.js standalone application locally"
	@echo "  make start           - Start Next.js production server locally"
	@echo "  make lint            - Run ESLint checks"
	@echo "  make docker-build    - Build production Docker image"
	@echo "  make docker-run      - Run production Docker container locally"
	@echo "  make docker-stop     - Stop and remove running Docker container"
	@echo "  make docker-restart  - Restart Docker container"
	@echo "  make docker-logs     - View container logs in real-time"
	@echo "  make compose-up      - Run application via Docker Compose"
	@echo "  make compose-down    - Stop Docker Compose services"
	@echo "  make compose-logs    - View Docker Compose logs"
	@echo "  make clean           - Remove build artifacts and temporary files"

# ------------------------------------------------------------------------------
# Local Development Commands
# ------------------------------------------------------------------------------

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

# ------------------------------------------------------------------------------
# Docker Commands
# ------------------------------------------------------------------------------

docker-build:
	docker build --load -t $(IMAGE_NAME) .

docker-run:
	@if [ -z "$$(docker images -q $(IMAGE_NAME) 2> /dev/null)" ]; then \
		echo "Image $(IMAGE_NAME) not found locally. Building image first..."; \
		$(MAKE) docker-build; \
	fi
	@docker stop $(APP_NAME) 2>/dev/null || true
	@docker rm $(APP_NAME) 2>/dev/null || true
	docker run -d \
		--name $(APP_NAME) \
		-p $(PORT):3000 \
		--add-host=host.docker.internal:host-gateway \
		$$( [ -f $(ENV_FILE) ] && echo "--env-file $(ENV_FILE)" || ( [ -f .env ] && echo "--env-file .env" ) ) \
		$(IMAGE_NAME)
	@echo "Container $(APP_NAME) is running at http://localhost:$(PORT)"

docker-stop:
	@docker stop $(APP_NAME) 2>/dev/null || true
	@docker rm $(APP_NAME) 2>/dev/null || true
	@echo "Container $(APP_NAME) stopped and removed."

docker-restart: docker-stop docker-run

docker-logs:
	docker logs -f $(APP_NAME)

# ------------------------------------------------------------------------------
# Docker Compose Commands
# ------------------------------------------------------------------------------

compose-up:
	docker compose up -d --build

compose-down:
	docker compose down

compose-logs:
	docker compose logs -f

# ------------------------------------------------------------------------------
# Cleanup Commands
# ------------------------------------------------------------------------------

clean:
	rm -rf .next build dist coverage *.tar.gz
	@echo "Cleaned build artifacts."
