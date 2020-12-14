GOC = go
SRC = src/main.go
OUT = build/server

all: $(SRC)
	$(GOC) run $(SRC)

build: $(SRC)
	$(GOC) build -o $(OUT)

clean:
	rm -rf build
