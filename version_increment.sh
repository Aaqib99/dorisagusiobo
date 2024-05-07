#!/bin/bash

# File to store the version number
version_file="version.txt"

# Check if version file exists, if not create it with initial version 1.0.0
if [ ! -e $version_file ]; then
    echo "1.0.0" > $version_file
fi

# Read current version from the file
current_version=$(cat $version_file)

# Extract major, minor, and patch version numbers
major=$(echo $current_version | cut -d. -f1)
minor=$(echo $current_version | cut -d. -f2)
patch=$(echo $current_version | cut -d. -f3)

# Increment patch version, reset to 0 and increment minor version if patch is 9
if [ $patch -lt 9 ]; then
    patch=$((patch + 1))
else
    patch=0

    # Increment minor version, reset to 0 and increment major version if minor is 9
    if [ $minor -lt 9 ]; then
        minor=$((minor + 1))
    else
        minor=0
        major=$((major + 1))
    fi
fi

# Construct the new version number
new_version="$major.$minor.$patch"

# Output the new version number
echo "New version number: $new_version"

# Save the new version number to the file
echo $new_version > $version_file
