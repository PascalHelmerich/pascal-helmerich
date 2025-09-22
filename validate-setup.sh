#!/bin/bash

# Simple validation script for the Pascal Helmerich API Docker setup

echo "🚀 Pascal Helmerich API Docker Setup Validation"
echo "================================================"

# Check required files exist
echo "📁 Checking required files..."
files=(
    "api/package.json"
    "api/server.js" 
    "api/Dockerfile"
    "api/.dockerignore"
    "docker-compose.yml"
    "database/init.sql"
    "nginx/nginx.conf"
    "README.md"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (missing)"
        exit 1
    fi
done

echo ""
echo "🔍 Validating configurations..."

# Validate Node.js syntax
echo -n "JavaScript syntax: "
if node -c api/server.js; then
    echo "✅ Valid"
else
    echo "❌ Invalid syntax"
    exit 1
fi

# Validate Docker Compose config  
echo -n "Docker Compose config: "
if docker compose config > /dev/null 2>&1; then
    echo "✅ Valid"
else
    echo "❌ Invalid"
    exit 1
fi

# Check package.json has required dependencies
echo -n "API dependencies: "
if grep -q "express" api/package.json && grep -q "cors" api/package.json; then
    echo "✅ All required dependencies present"
else
    echo "❌ Missing required dependencies"
    exit 1
fi

echo ""
echo "🎉 All validations passed!"
echo ""
echo "💡 To start the full stack:"
echo "   docker compose up -d"
echo ""
echo "📋 Available services:"
echo "   • Website: http://localhost (via nginx)"  
echo "   • API: http://localhost:3000"
echo "   • Database: PostgreSQL on port 5432"
echo ""
echo "🔗 API Endpoints:"
echo "   • GET /health - Health check"
echo "   • GET /api - API information"
echo "   • GET /api/projects - List projects"
echo "   • POST /api/contact - Submit contact form"