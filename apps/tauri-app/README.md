# Tauri App

## Run (desktop)

```
npm run dev:tauri -w tauri-app
```

## Run (web via NGINX dev proxy)

- Start NGINX dev stack:

```
npm run docker:dev
```

- Open: http://localhost:9090/tauri/

## Build

- Desktop (Tauri):

```
npm run build:tauri:desktop
```

- Web (for Docker image):

```
npm run build:tauri:web
```
