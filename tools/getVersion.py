import json
import re

filename = 'package.json'

with open(filename, 'r+') as file:
	data = json.load(file)

	# Parse version string
	[ ( major, minor, patch ) ] = re.findall(r"^(\d+)\D(\d+)\D(\d+)", data['version'])

	# Output version string
	print( ".".join([ major, minor, patch ]) )
