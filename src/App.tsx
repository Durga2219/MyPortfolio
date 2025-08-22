import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AdminProvider } from './contexts/AdminContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [isDarkBackground, setIsDarkBackground] = React.useState(true);

  React.useEffect(() => {
    const img = new Image();
    const publicUrl = process.env.PUBLIC_URL || '';
    const src = `${publicUrl}/images/portfolio-bg.jpg`; // Save your provided image as public/images/portfolio-bg.jpg
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) return;
        const sampleSize = 32;
        canvas.width = sampleSize;
        canvas.height = sampleSize;
        context.drawImage(img, 0, 0, sampleSize, sampleSize);
        const { data } = context.getImageData(0, 0, sampleSize, sampleSize);
        let r = 0, g = 0, b = 0, count = 0;
        for (let i = 0; i < data.length; i += 4) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          count++;
        }
        r /= count; g /= count; b /= count;
        // Perceived luminance
        const luminance = 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);
        setIsDarkBackground(luminance < 0.55);
      } catch {
        setIsDarkBackground(true);
      }
    };
    img.onerror = () => setIsDarkBackground(true);
  }, []);

  const textClass = isDarkBackground ? 'text-white' : 'text-gray-900';

  return (
    <ThemeProvider>
      <AdminProvider>
        <Router>
          <div className={`relative min-h-screen transition-all duration-300 text-on-dark`}>
            {/* Background image */}
            <div
              className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL || ''}/images/fuchsia-smoke-bg.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            {/* 50% black overlay for readability */}
            <div className="fixed inset-0 -z-10" style={{ background: 'rgba(0, 0, 0, 0.5)' }} />

            <ScrollProgress />
            <Routes>
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              
              {/* Public Portfolio Routes */}
              <Route path="/*" element={
                <>
                  <Navbar />
                  <main className="pt-16">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/skills" element={<Skills />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/certificates" element={<Certificates />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              } />
            </Routes>
          </div>
        </Router>
      </AdminProvider>
    </ThemeProvider>
  );
}

export default App;
