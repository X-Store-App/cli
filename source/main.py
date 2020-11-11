import argparse

# Program version and other data

version = "0.1"

parser = argparse.ArgumentParser()

# Parse commands, arguments, etc

parser.add_argument("-v", "--version", help="show the current XStore CLI version installed on your system", action="store_true")

# Actions

args = parser.parse_args()

if args.version:
  print(version)
