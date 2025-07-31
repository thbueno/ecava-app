"use client";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Star, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import EcavaLogo from "../assets/ecava-logo.svg";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Recursos", href: "#features" },
    { name: "Preços", href: "#pricing" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card border-border/50 shadow-elegant"
          : "bg-background/80 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <nav className="container-fluid">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src={EcavaLogo} alt="ECAVA Logo" className="h-10 w-auto" />

            {/* Premium Badge */}
            <Badge className="hidden sm:flex glass-card text-xs px-3 py-1 border-0 text-brand-accent bg-brand-accent/10">
              <Star className="w-3 h-3 mr-1 fill-current" />
              Premium
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-brand-primary transition-all duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* <ThemeToggle /> */}
              <Button
                variant="outline"
                className="glass-card border-border/50 hover:bg-accent/5 font-medium"
              >
                Entrar
              </Button>
              <Button className="gradient-primary text-white shadow-lg hover:shadow-xl hover-lift font-semibold group">
                Baixar App
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="glass-card border-border/50 hover:bg-accent/10 transition-all duration-200"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Premium Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden animate-fade-in">
            <div className="glass-card rounded-2xl mt-4 mb-4 p-6 border border-border/50 shadow-elegant">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-brand-primary hover:bg-accent/10 rounded-xl transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}

                <div className="pt-4 border-t border-border/50 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full glass-card border-border/50 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Entrar
                  </Button>
                  <Button
                    className="w-full gradient-primary text-white shadow-lg font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Baixar App
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
