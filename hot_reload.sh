#!/bin/bash

if ! command -v inotifywait &> /dev/null; then
    echo "Error: inotifywait not found. Please install inotify-tools."
    exit 1
fi


# Check if reset_server.sh exists and is executable
if [[ ! -x "./reset_server.sh" ]]; then
    echo "Error: reset_server.sh not found or not executable in current directory."
    exit 1
fi

echo "Monitoring current directory for changes..."

# Watch for modify, create, delete, and move events recursively
inotifywait -m -r . -e modify -e create -e delete -e move --exclude '.+\.swp$' |
while read -r path action file; do
    echo "Change detected: $action on $path$file"
    echo "Running reset_server.sh..."
    docker stop nginx
    docker rm nginx
    docker compose up --build -d
done
