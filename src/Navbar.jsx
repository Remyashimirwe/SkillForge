import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useAuth } from "./AuthContext";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#f7f7f7';
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div>
      <header 
        className={`fixed h-20 top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-transparent backdrop-blur-md border-b border-primary-border shadow-lg" 
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <nav className="container mx-auto max-w-7xl px-4 md:px-6 h-full flex justify-between items-center">
          {/* Logo */}
          <Link to={isAuthenticated ? "/home" : "/"} className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white">
              SkillForge
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {[
              { name: "Home", path: "/home" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              ...(isAuthenticated ? [{ name: "Process", path: "/process" }] : []),
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className="relative text-white/90 font-medium transition-all duration-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-white" />}
            </button>

            {isAuthenticated ? (
              <>
                <Link 
                  to="/home"
                  className="hidden md:inline-flex px-5 py-2 rounded-full bg-secondary text-secondary-foreground font-semibold hover:shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="hidden md:inline-flex px-5 py-2 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/login"
                className="hidden md:inline-flex px-5 py-2 rounded-full bg-secondary text-secondary-foreground font-semibold hover:shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                Get Started
              </Link>
            )}

            <Menu 
              className="md:hidden cursor-pointer text-white hover:text-white/80 transition-colors" 
              size={24}
              onClick={() => setIsOpen(true)} 
            />
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-screen w-4/5 max-w-sm bg-background shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-bold text-foreground">Menu</h2>
              <X 
                className="cursor-pointer text-foreground hover:text-primary transition-colors" 
                size={24}
                onClick={() => setIsOpen(false)} 
              />
            </div>

            <ul className="flex flex-col gap-6 mb-8">
              {[
                { name: "Home", path: "/home" },
                { name: "About", path: "/about" },
                { name: "Courses", path: "/course" },
                { name: "Services", path: "/services" },
                ...(isAuthenticated ? [{ name: "Process", path: "/process" }] : []),
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            {isAuthenticated ? (
              <button
                onClick={() => {
                  setIsOpen(false)
                  handleLogout()
                }}
                className="w-full px-5 py-3 rounded-full bg-white/10 text-white font-semibold text-center hover:bg-white/20 transition-all hover:scale-105 active:scale-95 mb-4"
              >
                Logout
              </button>
            ) : (
              <Link 
                to="/login"
                className="w-full px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-center hover:shadow-lg transition-all hover:scale-105 active:scale-95 mb-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            )}

            {/* Dark Mode Toggle */}
            <button 
              onClick={() => {
                setDarkMode(!darkMode);
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary/20 transition-colors text-foreground"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span className="font-medium">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
