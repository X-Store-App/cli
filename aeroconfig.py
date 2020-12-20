import os


def default():
    os.system("pipenv install")


def build():
    os.system("pyinstaller main.py \
	 --console \
	 --onefile \
	 --noupx \
	 -n xstore")
