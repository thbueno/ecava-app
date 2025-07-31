import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import {
  Wine,
  Brain,
  MapPin,
  TrendingUp,
  Star,
  Zap,
} from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Wine,
      title: "Gestão Completa",
      description:
        "Controle total do seu inventário com tecnologia avançada",
      color: "var(--brand-primary)",
      bg: "bg-brand-primary/5",
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description:
        "Recomendações personalizadas baseadas em seu perfil",
      color: "var(--brand-accent)",
      bg: "bg-brand-accent/5",
    },
    {
      icon: MapPin,
      title: "Localização Precisa",
      description: "Encontre qualquer garrafa em segundos",
      color: "var(--brand-gold)",
      bg: "bg-brand-gold/5",
    },
    {
      icon: TrendingUp,
      title: "Analytics Avançado",
      description: "Insights detalhados sobre sua coleção",
      color: "var(--brand-wood)",
      bg: "bg-brand-wood/5",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-subtle opacity-30" />

      <div className="container-fluid relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Content - 6 columns */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <Badge className="glass-card text-sm px-4 py-2 border-0 text-brand-accent bg-brand-accent/10">
                <Zap className="w-4 h-4 mr-2" />
                Tecnologia Avançada
              </Badge>

              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Acesse a sua adega de{" "}
                  <span className="text-gradient">
                    onde estiver
                  </span>
                  .
                </h2>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    O Ecava é uma solução revolucionária para a{" "}
                    <span className="font-semibold text-brand-primary">
                      gestão de adegas
                    </span>
                    . Desenvolvido com tecnologia de ponta,
                    simplifica o controle dos vinhos em todos os
                    aspectos.
                  </p>

                  <p className="text-muted-foreground">
                    Transforme a gestão da sua adega em uma
                    experiência{" "}
                    <span className="font-semibold text-brand-accent">
                      prática, rápida e intuitiva
                    </span>
                    , com um aplicativo sofisticado na palma da
                    sua mão.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">
                  99.9%
                </div>
                <div className="text-sm text-muted-foreground">
                  Precisão IA
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">
                  &lt;2s
                </div>
                <div className="text-sm text-muted-foreground">
                  Tempo busca
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Monitoramento
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 6 columns */}
          <div className="lg:col-span-6 relative">
            {/* Main Dashboard Mockup */}
            <Card className="glass-card p-8 shadow-dramatic">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Dashboard Principal
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Visão geral da sua adega
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-green-600 font-medium">
                      Sincronizado
                    </span>
                  </div>
                </div>

                {/* Analytics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 border-brand-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                        <Wine className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-brand-primary">
                          347
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Total Garrafas
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 bg-gradient-to-br from-brand-accent/5 to-brand-accent/10 border-brand-accent/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                        <Star className="w-5 h-5 text-brand-accent fill-current" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-brand-accent">
                          94.2
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Pontuação Média
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 bg-gradient-to-br from-brand-gold/5 to-brand-gold/10 border-brand-gold/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center">
                        <MapPin
                          className="w-5 h-5"
                          style={{ color: "var(--brand-gold)" }}
                        />
                      </div>
                      <div>
                        <div
                          className="text-2xl font-bold"
                          style={{ color: "var(--brand-gold)" }}
                        >
                          16°C
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Temperatura
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 bg-gradient-to-br from-brand-wood/5 to-brand-wood/10 border-brand-wood/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-wood/20 rounded-lg flex items-center justify-center">
                        <TrendingUp
                          className="w-5 h-5"
                          style={{ color: "var(--brand-wood)" }}
                        />
                      </div>
                      <div>
                        <div
                          className="text-2xl font-bold"
                          style={{ color: "var(--brand-wood)" }}
                        >
                          +12%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Este Mês
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                    Atividade Recente
                  </h4>
                  <div className="space-y-2">
                    {[
                      {
                        action: "Adicionado",
                        wine: "Château Margaux 2015",
                        time: "2h atrás",
                      },
                      {
                        action: "Degustado",
                        wine: "Barolo Brunate 2018",
                        time: "1d atrás",
                      },
                      {
                        action: "Movido",
                        wine: "Dom Pérignon 2012",
                        time: "2d atrás",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-brand-accent rounded-full" />
                          <div>
                            <div className="text-sm font-medium">
                              {item.action} • {item.wine}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {item.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating Feature Cards */}
            <Card className="absolute -top-6 -left-6 glass-card p-4 w-52 shadow-soft hover-lift">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <div className="font-semibold text-sm">
                    IA Avançada
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Recomendações personalizadas
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">
              Recursos que fazem a diferença
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologia de ponta para uma experiência sem igual
              na gestão da sua adega
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover-lift glass-card border-border/50 group"
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon
                      className="w-6 h-6"
                      style={{ color: feature.color }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 group-hover:text-brand-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}