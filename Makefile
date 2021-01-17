build:
	cp VERSION dist
	go build -o ./dist/xstore ./src/main.go