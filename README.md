# Build the Docker image
```bash
docker build -t shopping-list-app .
```

## Start the shopping-list Docker for interactive use:
```
docker run -it shopping-list-app sh
```

## Start the build Docker for interactive use:
```
docker run -it --rm -v "$PWD":/app -w /app node:22-alpine sh
```

# Run the container and expose it on port 3000
```
docker run -p 3000:80 shopping-list-app
```

