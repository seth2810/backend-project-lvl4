setup: install

install:
	npm ci

lint:
	npx eslint .

test:
	npm test

build:
	npm run build

start-backend:
	npx nodemon server/bin/server.js

start-frontend:
	npx webpack serve
