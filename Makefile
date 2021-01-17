build:
	mkdir dist
	cp VERSION dist
	go build -o ./dist/xstore ./src/main.go