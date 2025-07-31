import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Wine, Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react";
import EcavaLogo from "./assets/ecava-logo.svg";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ecava-ui-theme">
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden antialiased">
        <Header />

        <main>
          <section id="home">
            <HeroSection />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <section id="features">
            <FeaturesSection />
          </section>

          {/* Premium CTA Section */}
          <section className="py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 gradient-mesh opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

            <div className="container-fluid relative z-10">
              <Card className="glass-card p-12 lg:p-16 shadow-dramatic text-center max-w-4xl mx-auto">
                <div className="space-y-8">
                  <Badge className="glass-card text-sm px-4 py-2 border-0 text-brand-accent bg-brand-accent/10">
                    Oferta Limitada
                  </Badge>

                  <div className="space-y-6">
                    <h2 className="text-4xl lg:text-5xl font-bold">
                      Comece sua jornada{" "}
                      <span className="text-gradient">premium</span>
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                      Transforme sua paixão pelo vinho em uma experiência
                      extraordinária. Baixe agora e descubra por que somos a
                      escolha de especialistas.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="h-14 px-8 text-base font-semibold gradient-primary text-white shadow-elegant hover:shadow-dramatic hover-lift group"
                    >
                      <Wine className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Baixar Agora!
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 px-8 text-base font-medium glass-card border-border/50 hover:bg-accent/5 hover-lift"
                    >
                      Agendar Demonstração
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Analytics Avançado</span>
                    </div>
                    <div className="w-px h-4 bg-border" />
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>Inteligência Artificial</span>
                    </div>
                    <div className="w-px h-4 bg-border" />
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span>Suporte premium</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </main>

        {/* Sophisticated Footer */}
        <footer className="relative py-20 lg:py-24">
          <div className="absolute inset-0 gradient-subtle opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

          <div className="container-fluid relative z-10">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={EcavaLogo}
                    alt="ECAVA Logo"
                    className="h-10 w-auto"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  Transformando paixão por vinho em experiência inteligente. A
                  solução mais sofisticada para gestão de adegas do mundo.
                </p>

                <div className="flex items-center gap-4">
                  <Badge className="glass-card text-xs px-3 py-1 border-0 text-brand-accent bg-brand-accent/10">
                    Premium
                  </Badge>
                  <div className="flex items-center gap-1 text-brand-gold">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-4 h-4 text-brand-gold fill-current"
                      >
                        ★
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="font-semibold text-foreground">Produto</h3>
                <div className="space-y-3">
                  {["Recursos", "Preços", "API", "Integrações", "Suporte"].map(
                    (item) => (
                      <a
                        key={item}
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-brand-primary transition-colors"
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <h3 className="font-semibold text-foreground">Empresa</h3>
                <div className="space-y-3">
                  {["Sobre", "Blog", "Carreira", "Imprensa", "Parceiros"].map(
                    (item) => (
                      <a
                        key={item}
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-brand-primary transition-colors"
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <h3 className="font-semibold text-foreground">Recursos</h3>
                <div className="space-y-3">
                  {[
                    "Documentação",
                    "Guias",
                    "Webinars",
                    "Status",
                    "Segurança",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-sm text-muted-foreground hover:text-brand-primary transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="font-semibold text-foreground">Contato</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 text-brand-accent" />
                    <span>hello@ecava.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-brand-accent" />
                    <span>+55 11 9999-9999</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-brand-accent" />
                    <span> Porto Alegre, Brasil</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-border/50 mt-16 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  <span>&copy; 2025 Ecava. Todos os direitos reservados.</span>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <a
                    href="#"
                    className="hover:text-brand-primary transition-colors"
                  >
                    Privacidade
                  </a>
                  <a
                    href="#"
                    className="hover:text-brand-primary transition-colors"
                  >
                    Termos
                  </a>
                  <a
                    href="#"
                    className="hover:text-brand-primary transition-colors"
                  >
                    Cookies
                  </a>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Feito com</span>
                  <Heart className="w-4 h-4 text-brand-rose fill-current" />
                  <span>pela Esthalo</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
