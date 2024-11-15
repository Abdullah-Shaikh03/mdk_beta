#!/bin/bash

# Counter to assign numeric names
counter=1

# Loop through all image files in the current directory
for img in *.{jpg,jpeg,png,gif}; do
  # Check if file exists (to avoid errors if no images are found)
  if [[ -f $img ]]; then
    # Get the file extension
    extension="${img##*.}"
    
    # Create the new file name with numeric values
    new_name="$counter.$extension"
    
    # Rename the file
    mv "$img" "$new_name"
    
    # Increment the counter
    ((counter++))
  fi
done

echo "All images have been renamed."
