# ===== Todo App Dockerfile =====
# Multi-stage build for smaller final image

# Stage 1: Install dependencies
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install --production

# Stage 2: Production image
FROM node:18-alpine
WORKDIR /app

# Copy dependencies from builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copy application source code
COPY . .

# Expose port 3001
EXPOSE 3001

# Start the application
CMD ["node", "server.js"]
