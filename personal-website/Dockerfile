# ===== Personal Website Dockerfile =====
# Stage 1: Build stage (optional, for future enhancements)
# Stage 2: Serve static files with Nginx

FROM nginx:alpine

# Remove default Nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy website files to Nginx default html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Nginx starts automatically with the base image
CMD ["nginx", "-g", "daemon off;"]
