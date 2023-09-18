'use client'

import Link from "next/link";
import Container from "../Container";
import { useEffect, useState } from "react";
import { MdClose, MdMenu, MdExpandLess, MdExpandMore } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  active?: boolean;
}

const routes = [
  {
    href: "/",
    label: "Home",
    active: true,
  },
  {
    href: "/tentangKami",
    label: "Tentang Kami",
    active: false,
  },
  {
    href: "/layanan",
    label: "Layanan",
    active: false,
    subMenu: [
      {
        label: 'Kontruksi',
        href: '/'
      },
      {
        label: 'Pengadaan',
        href: '/'
      },
      {
        label: 'Intalasi',
        href: '/'
      }
    ],
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    active: false,
  },
  {
    href: "/hubungiKami",
    label: "Hubungi Kami",
    active: false,
  },
];


const Navbar = ({ active }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Use window.scrollY instead of deprecated pageYOffset
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 w-full z-40 duration-300 transition ${isScrolled ? "backdrop-blur-sm bg-black/50" : ""}`}>
      <Container>
        <div className="flex justify-between items-center py-6">
          <img src="/images/logo.png" alt="logo" className="h-10 sm:h-14 w-auto" />
          <div className="hidden sm:flex gap-6">
            {routes.map((route) => (
              <Link href={route.href} key={route.label} className="text-sm font-medium text-white">
                {route.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            {isMobileMenuOpen ? (
              <MdClose onClick={toggleMobileMenu} className="text-white text-2xl cursor-pointer" />
            ) : (
              <MdMenu onClick={toggleMobileMenu} className="text-white text-2xl cursor-pointer" />
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="sm:hidden bg-white absolute top-18 rounded-t-2xl left-0 w-full h-screen flex flex-col  text-black p-6"
            >
              <div className=" flex flex-col gap-6 pt-6">
                {routes.map((route) => (
                  <Link href={route.href} key={route.label} className="text-lg font-medium">
                    {route.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </Container>
    </div>
  );
};

export default Navbar;
