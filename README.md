# Pascal Helmerich - Docker API Setup

This repository contains a personal website with a dockerized REST API backend.

## Architecture

- **Frontend**: Static HTML/CSS website
- **API**: Node.js Express REST API
- **Database**: PostgreSQL 15
- **Reverse Proxy**: Nginx

## Docker Setup

### Prerequisites

- Docker
- Docker Compose

### Quick Start

1. Clone the repository
2. Run the full stack:

```bash
docker-compose up -d
```

This will start:
- **Website**: http://localhost (port 80)
- **API**: http://localhost:3000
- **Database**: PostgreSQL on port 5432

### Individual Services

#### API Only
```bash
docker-compose up api db -d
```

#### Database Only
```bash
docker-compose up db -d
```

#### Build API Image
```bash
cd api
docker build -t pascal-helmerich-api .
```

## API Endpoints

### Health Check
- `GET /health` - API health status

### Information
- `GET /api` - API information and available endpoints

### Projects
- `GET /api/projects` - Get all projects

### Contact
- `POST /api/contact` - Submit contact form
  - Body: `{ "name": "string", "email": "string", "message": "string" }`

## Environment Variables

### API Container
- `NODE_ENV`: production/development
- `PORT`: API port (default: 3000)
- `DB_HOST`: Database hostname
- `DB_PORT`: Database port
- `DB_NAME`: Database name
- `DB_USER`: Database username
- `DB_PASSWORD`: Database password

### Database Container
- `POSTGRES_DB`: Database name
- `POSTGRES_USER`: Database username
- `POSTGRES_PASSWORD`: Database password

## Development

### Local API Development
```bash
cd api
npm install
npm run dev
```

### Database Management

Connect to the database:
```bash
docker-compose exec db psql -U postgres -d pascal_helmerich
```

View logs:
```bash
docker-compose logs api
docker-compose logs db
```

## Production Deployment

For production deployment, consider:

1. Use environment files for sensitive data
2. Set up proper SSL certificates
3. Configure firewall rules
4. Set up monitoring and logging
5. Regular database backups

## Stopping Services

```bash
docker-compose down
```

To remove volumes as well:
```bash
docker-compose down -v
```