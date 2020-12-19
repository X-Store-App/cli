dev:
	python3 main.py
build:
	pyinstaller main.py \
	 --console \
	 --onefile \
	 --noupx \
	 -n xstore