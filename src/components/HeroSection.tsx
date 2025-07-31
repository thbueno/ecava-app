import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { Download, Play, ArrowRight, Star, Zap, Shield } from 'lucide-react'


export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background/50" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-accent/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-gold/20 rounded-xl rotate-45 blur-lg animate-pulse delay-500" />

      <div className="relative z-10 container-fluid">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Premium Badge */}
            <div className="flex items-center gap-4 animate-fade-in">
              <Badge className="glass-card text-sm px-4 py-2 border-0 text-brand-primary bg-brand-primary/10">
                <Star className="w-4 h-4 mr-2 fill-current" />
                V.7 • Destaque Casa Cor 2025
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-3">
              <div className="flex items-center gap-4">
                  <div className="h-px bg-gradient-to-r from-brand-primary to-brand-accent flex-1 max-w-24" />
                  <span className="text-2xl font-light text-muted-foreground tracking-widest">
                    SUA ADEGA
                  </span>
                </div>
                <h1 className="text-6xl lg:text-8xl font-black leading-none">
                  Inteligente
                </h1>
                
              </div>
              
              <p className="text-2xl font-light text-muted-foreground max-w-2xl leading-relaxed">
                Transforme sua paixão pelo vinho em uma experiência 
                <span className="text-gradient font-medium"> inteligente e sofisticada</span>. 
                Gerencie sua adega com precisão, elegância e tecnologia de ponta.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-bounce-in">
              <Button 
                size="lg" 
                className="h-14 px-8 text-base font-semibold gradient-primary text-white shadow-elegant hover:shadow-dramatic hover-lift group"
              >
                <Download className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Baixar Aplicativo
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-8 text-base font-medium glass-card border-border/50 hover:bg-accent/5 hover-lift group"
              >
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Ver Demonstração
              </Button>
            </div>

            {/* Social Proof */}
            {/* <div className="flex items-center gap-8 pt-8 animate-fade-in delay-300">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent border-2 border-background" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">12,000+</div>
                  <div className="text-muted-foreground">Usuários ativos</div>
                </div>
              </div>
              
              <div className="w-px h-8 bg-border" />
              
              <div className="flex items-center gap-2">
                <div className="flex text-brand-gold">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9 (2,341 avaliações)</span>
              </div>
            </div> */}
          </div>

          {/* Right Content - 5 columns */}
          <div className="lg:col-span-5 relative animate-bounce-in delay-200">
            {/* Main Dashboard Card */}
            <Card className="glass-card p-8 shadow-dramatic hover-lift">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Sua Adega</h3>
                    <p className="text-sm text-muted-foreground">Visão geral inteligente</p>
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                    Online
                  </Badge>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient">347</div>
                    <div className="text-xs text-muted-foreground mt-1">Garrafas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient">94</div>
                    <div className="text-xs text-muted-foreground mt-1">Pontuação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient">18°C</div>
                    <div className="text-xs text-muted-foreground mt-1">Temperatura</div>
                  </div>
                </div>

                {/* Wine Visualization */}
                <div className="relative bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 rounded-2xl p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-24 bg-gradient-to-b from-green-800 to-green-900 rounded-lg relative overflow-hidden shadow-lg">
                      <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-t-lg" />
                      <div className="absolute inset-x-1 top-5 bottom-1 bg-gradient-to-b from-green-700 to-green-900 rounded" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground">Cabernet Sauvignon</h4>
                    <p className="text-sm text-muted-foreground">2019 • Mendoza, Argentina</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <Button size="sm" className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 border-0">
                    Degustar
                  </Button>
                  <Button size="sm" variant="outline" className="border-border/50">
                    Editar
                  </Button>
                </div>
              </div>
            </Card>

            {/* Floating Feature Cards */}
            <Card className="absolute -top-6 -left-6 glass-card p-4 w-48 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">IA Integrada</div>
                  <div className="text-xs text-muted-foreground">Recomendações inteligentes</div>
                </div>
              </div>
            </Card>

            <Card className="absolute -bottom-4 -right-6 glass-card p-4 w-44 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">Seguro</div>
                  <div className="text-xs text-muted-foreground">Proteção avançada</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}