# Medication Reminder System - Backend API

## Description
Backend API for medication reminder system that helps users manage their medication schedules and receive timely notifications.

## Features
- Complete medication management
- Customizable reminder schedules
- Dose confirmation tracking
- Administration history
- Caregiver information sharing
- Low stock alerts

## Technology Stack
- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Architecture**: REST API

## Prerequisites
- Node.js 18.x or higher
- npm or yarn

## Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Configure your environment variables in .env file
```

## Development

```bash
# Run in development mode with hot reload
npm run dev
```

## Build

```bash
# Build for production
npm run build
```

## Production

```bash
# Start production server
npm start
```

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Linting

```bash
# Check code quality
npm run lint

# Fix linting issues
npm run lint:fix
```

## API Documentation

The API follows RESTful conventions and is versioned through URL paths.

### Base URL
- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Health Check
```
GET /health
```

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   ├── v1/                 # Version 1 routes
│   └── index.ts            # Main router
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
└── server.ts               # Application entry point
```

## Environment Variables

See `.env.example` for all available configuration options.

## License

ISC