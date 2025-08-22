#!/bin/bash

echo "🚀 Setting up Interactive Portfolio Application..."
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check if MongoDB is running
if ! command -v mongod &> /dev/null; then
    echo "⚠️  MongoDB is not installed. Please install MongoDB first."
    echo "   Visit: https://docs.mongodb.com/manual/installation/"
    echo "   Or use MongoDB Atlas (cloud): https://www.mongodb.com/atlas"
fi

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd server
npm install
cd ..

# Create environment file
echo "🔧 Creating environment configuration..."
if [ ! -f "server/.env" ]; then
    cp server/env.example server/.env
    echo "✅ Environment file created at server/.env"
    echo "⚠️  Please update server/.env with your MongoDB URI and JWT secret"
else
    echo "✅ Environment file already exists"
fi

# Create images directory
echo "📁 Creating images directory..."
mkdir -p public/images

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Update server/.env with your MongoDB connection details"
echo "2. Start MongoDB service"
echo "3. Run: cd server && node seed.js (to populate database)"
echo "4. Run: npm run dev (to start both frontend and backend)"
echo ""
echo "🌐 Access your application:"
echo "   - Frontend: http://localhost:3000"
echo "   - Admin Panel: http://localhost:3000/admin/login"
echo "   - Backend API: http://localhost:5000"
echo ""
echo "🔐 Default admin credentials:"
echo "   - Email: d3421163@gmail.com"
echo "   - Password: admin123"
echo ""
echo "Happy coding! 🚀"










