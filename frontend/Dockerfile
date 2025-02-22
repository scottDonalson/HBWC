# Use Node.js as the base image
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Rebuild Tailwind in production mode
# Build Next.js (for production)
RUN npm run build && npm run postcss



# Use a minimal Node.js image for production
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/node_modules node_modules

# Expose port
EXPOSE 3000

# Start Next.js
CMD ["npm", "run", "start"]
