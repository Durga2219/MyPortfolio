@echo off
echo 🚀 Setting up Interactive Portfolio Application...
echo ==================================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js v16 or higher first.
    echo    Visit: https://nodejs.org/
    pause
    exit /b 1
)

REM Check Node.js version
for /f "tokens=1,2 delims=." %%a in ('node --version') do set NODE_VERSION=%%a
set NODE_VERSION=%NODE_VERSION:~1%
if %NODE_VERSION% lss 16 (
    echo ❌ Node.js version 16 or higher is required. Current version: 
    node --version
    pause
    exit /b 1
)

echo ✅ Node.js detected
node --version

REM Check if MongoDB is installed
mongod --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️  MongoDB is not installed. Please install MongoDB first.
    echo    Visit: https://docs.mongodb.com/manual/installation/
    echo    Or use MongoDB Atlas (cloud): https://www.mongodb.com/atlas
)

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
call npm install

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd server
call npm install
cd ..

REM Create environment file
echo 🔧 Creating environment configuration...
if not exist "server\.env" (
    copy "server\env.example" "server\.env"
    echo ✅ Environment file created at server\.env
    echo ⚠️  Please update server\.env with your MongoDB URI and JWT secret
) else (
    echo ✅ Environment file already exists
)

REM Create images directory
echo 📁 Creating images directory...
if not exist "public\images" mkdir "public\images"

echo.
echo 🎉 Setup completed successfully!
echo.
echo 📋 Next steps:
echo 1. Update server\.env with your MongoDB connection details
echo 2. Start MongoDB service
echo 3. Run: cd server ^&^& node seed.js (to populate database)
echo 4. Run: npm run dev (to start both frontend and backend)
echo.
echo 🌐 Access your application:
echo    - Frontend: http://localhost:3000
echo    - Admin Panel: http://localhost:3000/admin/login
echo    - Backend API: http://localhost:5000
echo.
echo 🔐 Default admin credentials:
echo    - Email: d3421163@gmail.com
echo    - Password: admin123
echo.
echo Happy coding! 🚀
pause










