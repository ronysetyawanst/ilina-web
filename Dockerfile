# Use the official Node.js 18 image as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Set environment variable to tell Next.js it is running in production
ENV NODE_ENV production

# EXPOSE TO DOCKER ENV VARIABLE
ARG NEXT_PUBLIC_BASE_URL_API
ARG NEXT_PUBLIC_BASIC_AUTH
ARG NEXT_PUBLIC_BASE_BUCKET_URL

RUN echo ${NEXT_PUBLIC_BASE_URL_API}
RUN echo ${NEXT_PUBLIC_BASIC_AUTH}
RUN echo ${NEXT_PUBLIC_BASE_BUCKET_URL}

# Start the Next.js application
CMD ["npm", "start"]