# Travlr: Travel Management System

A full-stack travel management application featuring an ExpressJS backend + web server and AngularJS admin portal.

## Features

- **Secure Authentication System** with JWT and Passport.js
- **Rate Limiting** protection against DDoS attacks
- **REST API** with comprehensive error handling
- **Admin Portal** built with AngularJS
- **Docker Support** for easy deployment
- **Database Integration** with SQLite3

## Prerequisites

- Node.js (v23 or higher)
- npm (Node Package Manager)
- MongoDB instance
- Docker (optional)

## Tech Stack

**Backend:**
- ExpressJS
- SQLite3
- Passport.js
- JWT Authentication

**Web Server:**
- ExpressJS
- Handlebars

**Admin Portal:**
- AngularJS 6.1.0
- RxJS
- TypeScript

## Project Structure

```
├── app_server/         # Web server
│   ├── routes/         # Route definitions
│   ├── controllers/    # Controller definitions
│   ├── views/          # HBS templates
│   └── database/       # DB configuration
├── app_api/            # API server
│   ├── config/         # PassportJS config
│   ├── routes/         # Route definitions
│   └── controllers/    # Controller definitions
├── public/             # Static files
├── migrations/         # Database migration files
├── travlr/             # HTML files
└── app_admin/          # Angular admin interface
```

## Getting Started

1. **Clone the repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   - Create a `.env` file in the root directory
   - Add required environment variables

4. **Start the application**
   ```bash
   npm run start
   ```

### Docker Setup

```bash
# Build the image
docker build -t travel-management .

# Run the container
docker run -p 3000:3000 travel-management
```

## Security Features

- JWT-based authentication
- Rate limiting middleware
- CORS security configuration
- Secure password management
- Environment variable protection

## Testing

Run the test suite:
```bash
npm test
```

Includes:
- Jasmine unit tests
- Karma test runner
- Protractor E2E tests

## Key Implementation Highlights

### Collaborative Development
- Modular code structure
- Clear documentation
- Docker containerization
- Version control ready

### API Design
- RESTful architecture
- CORS enabled
- Comprehensive error handling
- Request logging

### Security Implementation
- Rate limiting algorithm
- JWT authentication flow
- Secure password handling
- Protected environment configs

## Academic Context

This project demonstrates key computer science competencies:

### Collaborative Environment (CS-499-01)
- Modular architecture supporting team development
- Clear documentation for diverse audiences
- Containerized development environment

### Technical Communication (CS-499-02)
- Professional API documentation
- Clear code organization
- Comprehensive inline comments

### Computing Solutions (CS-499-03)
- Efficient rate limiting implementation
- RESTful API patterns
- Modern authentication flow

### Industry Standards (CS-499-04)
- Contemporary framework usage
- Container technology
- Testing implementation

### Security Mindset (CS-499-05)
- DDoS protection
- Secure authentication
- Data privacy measures

---

*This project was developed as part of a Computer Science capstone course, demonstrating professional software development practices and security implementations.*