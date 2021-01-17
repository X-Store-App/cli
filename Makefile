build:
	mkdir dist -p
	cp VERSION dist
	go build -o ./dist/xstore ./src/main.go