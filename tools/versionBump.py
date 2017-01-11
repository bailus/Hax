import json
import re

filename = '../package.json'

with open(filename, 'r+') as file:
	data = json.load(file)

	# Parse version string
	[ ( major, minor, patch ) ] = re.findall(r"^(\d+)\D(\d+)\D(\d+)", data['version'])

	# Increment the version
	patch = str( int(patch) + 1 )

	# Write the new version string
	data['version'] = ".".join([ major, minor, patch ])

	# Modify the file
	file.seek(0) # reset file position to the beginning
	json.dump(data, file, indent=4)
	file.truncate() # remove remaining part
