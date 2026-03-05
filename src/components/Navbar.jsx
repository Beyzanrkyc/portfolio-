import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Blog", link: "#blog" },
    { name: "Contact", link: "#contact" },
  ];

  const lightColors = {
    navBg: "bg-gradient-to-br from-orange-200 to-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-800",
    textHover: "text-orange-500",
    textActive: "text-orange-600",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
  };

  const darkColors = {
    navBg: "bg-gradient-to-br from-gray-900 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textHover: "text-orange-400",
    textActive: "text-orange-400",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
  };

  const colors = darkMode ? darkColors : lightColors;

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed top-0 z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center ${colors.navBg}
        backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg w-[95%]`}>
        <div className="flex items-center justify-between w-full max-w-6xl">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2">
            <span className={`text-xl font-bold ${colors.textPrimary}`}>
              BK<span className="text-orange-500">.</span>
            </span>
          </motion.a>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="relative">
                <motion.span
                  className={`font-medium transition-colors duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : `${colors.textSecondary} hover:${colors.textHover}`
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  {item.name}
                </motion.span>
                {activeSection === item.name.toLowerCase() && (

                  
                )}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;