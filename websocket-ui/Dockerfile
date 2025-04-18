# Build stage
FROM node:23-slim AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Run using nginx
FROM nginxinc/nginx-unprivileged:alpine-perl AS runner
USER nginx
COPY --link nginx.conf /etc/nginx/nginx.conf
COPY --link --from=builder /app/dist /usr/share/nginx/html
EXPOSE 3000
ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf"]
CMD ["-g", "daemon off;"]