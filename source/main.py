import argparse
import packageManager

# Program version and other data

version = "0.1"

parser = argparse.ArgumentParser()

# Parse commands, arguments, etc

group = parser.add_argument_group()

group.add_argument("install", help="install a xstore package")
group.add_argument("remove", help="remove a xstore package")

parser.add_argument("-v", "--version", help="show the current XStore CLI version installed on your system", action="store_true")

# Actions

args = parser.parse_args()

if args.install:
  pass
elif args.remove:
  pass