'use client'

import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence and motion from framer-motion

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
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
    <div
      className={`fixed top-0 w-full z-40 duration-300 transition ${
        isScrolled ? "backdrop-blur-sm bg-black/50" : ""
      }`}
    >
      <div className="py-4">
        <Container>
          <div className="flex justify-between items-center">
            <Image src="/images/logo.png" alt="logo" width="200" height="100" />
            <div className="hidden sm:flex justify-center items-center space-x-6">
              {routes.map((route) => (
                <Link
                  key={route.label}
                  href={route.href}
                  className={`font-medium text-sm text-white hover:text-zinc-200`}
                >
                  {route.label}
                </Link>
              ))}
            </div>
            <div className="sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-zinc-200"
              >
                {isMobileMenuOpen ? '' : <MdMenu size={30} />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      <div className="md:hidden block z-40">
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 flex flex-col bg-white"
              initial={{ y: '100%', opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-end w-full border-b px-6 py-4">
                <button className="text-xl" onClick={closeMobileMenu}>
                  <MdClose />
                </button>
              </div>
              <div className="flex flex-col mt-6 px-6">
                {routes.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center w-full  ">
                      <Link
                        href={item.href}
                        className="text-sm font-bold h-full w-3/5 my-2 py-3 hover:text-primary cursor-pointer"
                      >
                        {item.label}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
