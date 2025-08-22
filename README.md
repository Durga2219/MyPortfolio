# 🚀 Interactive Portfolio Web Application

A modern, responsive portfolio website built with React.js, Tailwind CSS, and Node.js backend. Features both a public portfolio and a secure admin panel for content management.

## ✨ Features

### 🌐 Public Portfolio
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization
- **Dark/Light Mode**: Smooth theme toggle with elegant color schemes
- **Dynamic Content**: Skills, projects, and certificates loaded from database
- **Smooth Animations**: Fade-in and slide-up animations on scroll
- **SEO Optimized**: Meta tags, structured data, and performance optimizations

### 🔐 Admin Panel
- **Secure Authentication**: JWT-based login system
- **Content Management**: Add, edit, and delete certificates, projects, and skills
- **Real-time Updates**: Changes appear instantly in the public portfolio
- **Modern Dashboard**: Clean, intuitive interface with statistics and quick actions
- **Responsive Admin UI**: Works seamlessly on all devices

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router DOM** for navigation
- **React Icons** for beautiful icons
- **Framer Motion** for animations

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Express Validator** for input validation

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd portfolio-app
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd server
npm install
cd ..
```

### 4. Environment Configuration
Create a `.env` file in the `server` directory:
```bash
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/portfolio

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

### 5. Database Setup
Start MongoDB and run the seeder:
```bash
cd server
node seed.js
```

**Default Admin Credentials:**
- Email: `d3421163@gmail.com`
- Password: `admin123`

### 6. Start the Application

#### Development Mode (Both Frontend & Backend)
```bash
npm run dev
```

#### Frontend Only
```bash
npm start
```

#### Backend Only
```bash
npm run server
```

## 🌍 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment mode | `development` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/portfolio` |
| `JWT_SECRET` | JWT signing secret | `your-secret-key` |
| `CORS_ORIGIN` | Allowed CORS origin | `http://localhost:3000` |

## 📱 Usage

### Public Portfolio
- Visit `http://localhost:3000` to view your portfolio
- Navigate through different sections: Home, About, Skills, Projects, Certificates, Contact
- Toggle between light and dark themes
- View responsive design on different screen sizes

### Admin Panel
- Access admin login at `http://localhost:3000/admin/login`
- Use your admin credentials to log in
- Manage content from the dashboard
- Add new certificates, projects, and skills
- Edit existing content or mark items as inactive

## 🗄️ Database Models

### User
- Email and password authentication
- Role-based access control
- Account status management

### Certificate
- Title, issuer, date, category
- Image and credential details
- Featured status and descriptions

### Project
- Title, description, technologies
- Category and featured status
- Links to live demo and GitHub
- Challenges and solutions documentation

### Skill
- Name, description, category
- Proficiency level (1-100)
- Related technologies
- Icon and status management

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt with salt rounds
- **Input Validation**: Server-side validation for all inputs
- **Rate Limiting**: API request throttling
- **CORS Protection**: Cross-origin request security
- **Helmet**: Security headers middleware

## 📊 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/change-password` - Change password

### Certificates
- `GET /api/certificates` - Get all certificates
- `POST /api/certificates` - Create certificate (admin)
- `PUT /api/certificates/:id` - Update certificate (admin)
- `DELETE /api/certificates/:id` - Delete certificate (admin)

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create skill (admin)
- `PUT /api/skills/:id` - Update skill (admin)
- `DELETE /api/skills/:id` - Delete skill (admin)

## 🎨 Customization

### Colors & Themes
- Modify `tailwind.config.js` for custom color schemes
- Update CSS variables in `src/index.css` for theme customization

### Content
- Edit personal information in respective page components
- Update images in the `public/images` directory
- Modify database seeder for initial content

### Styling
- Customize Tailwind classes throughout components
- Add new animations in `src/index.css`
- Modify component layouts and spacing

## 🚀 Deployment

### Frontend (React)
```bash
npm run build
```
Deploy the `build` folder to your hosting service.

### Backend (Node.js)
- Set `NODE_ENV=production`
- Use a production MongoDB instance
- Set a strong `JWT_SECRET`
- Deploy to platforms like Heroku, Vercel, or AWS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: d3421163@gmail.com
- GitHub Issues: [Create an issue](https://github.com/yourusername/portfolio-app/issues)

## 🔄 Updates & Maintenance

- **Regular Updates**: Keep dependencies updated
- **Security Patches**: Monitor for security vulnerabilities
- **Content Updates**: Regularly update portfolio content through admin panel
- **Performance**: Monitor and optimize loading times

---

**Built with ❤️ by Durga R**
