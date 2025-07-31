import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { 
  MapPin, 
  QrCode, 
  Heart, 
  Package, 
  TrendingUp, 
  Shield, 
  Filter, 
  Thermometer,
  BarChart3,
  Zap,
  Brain,
  Cloud,
  Lock
} from 'lucide-react'

const mainFeatures = [
  {
    icon: MapPin,
    title: 'Localização de garrafas',
    description: 'Sistema GPS interno para localização precisa',
    color: 'var(--brand-primary)',
    gradient: 'from-brand-primary/10 to-brand-primary/5'
  },
  {
    icon: Brain,
    title: 'Cadastro de rótulos por IA',
    description: 'Reconhecimento automático com 99.9% de precisão',
    color: 'var(--brand-accent)',
    gradient: 'from-brand-accent/10 to-brand-accent/5'
  },
  {
    icon: Heart,
    title: 'Lista de desejos',
    description: 'Organize seus vinhos favoritos e próximas compras',
    color: 'var(--brand-rose)',
    gradient: 'from-brand-rose/10 to-brand-rose/5'
  },
  {
    icon: Package,
    title: 'Gerenciamento de estoque',
    description: 'Controle avançado com alertas automáticos',
    color: 'var(--brand-gold)',
    gradient: 'from-brand-gold/10 to-brand-gold/5'
  }
]

const additionalFeatures = [
  {
    icon: TrendingUp,
    title: 'Histórico de entradas e saídas',
    description: 'Timeline completa da sua coleção'
  },
  {
    icon: Shield,
    title: 'Controle de patrimônio',
    description: 'Avaliação automática e seguro'
  },
  {
    icon: Filter,
    title: 'Filtros de seleção',
    description: 'Busca avançada por múltiplos critérios'
  },
  {
    icon: Thermometer,
    title: 'Monitoramento de temperatura',
    description: 'Alertas em tempo real'
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent" />
      </div>

      <div className="container-fluid relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="glass-card text-sm px-4 py-2 border-0 text-brand-primary bg-brand-primary/10 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Recursos Avançados
          </Badge>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Funções que revolucionam{' '}
            <span className="text-gradient">sua experiência</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra todas as funcionalidades que tornam o Ecava a solução mais completa 
            e sofisticada para gestão de adegas do mercado global.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left - Main Features */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid gap-6">
              {mainFeatures.map((feature, index) => (
                <Card key={index} className="group p-8 hover-lift glass-card border-border/50 overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-semibold group-hover:text-brand-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Zap className="w-5 h-5 text-brand-accent" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {additionalFeatures.map((feature, index) => (
                <Card key={index} className="p-6 hover-lift glass-card border-border/50 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm group-hover:text-brand-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right - Advanced Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-8">
              {/* Main Dashboard */}
              <Card className="glass-card p-8 shadow-dramatic">
                <div className="space-y-6">
                  {/* Header with Live Status */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">Controle Avançado</h3>
                      <p className="text-sm text-muted-foreground">Sistema inteligente ativo</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-green-600">Live</span>
                    </div>
                  </div>

                  {/* Premium Analytics */}
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4 bg-gradient-to-br from-brand-primary/10 to-transparent border-brand-primary/20">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <BarChart3 className="w-5 h-5 text-brand-primary" />
                          <span className="text-xs text-green-600 font-medium">+12%</span>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-brand-primary">347</div>
                          <div className="text-xs text-muted-foreground">Total Collection</div>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 bg-gradient-to-br from-brand-accent/10 to-transparent border-brand-accent/20">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Thermometer className="w-5 h-5 text-brand-accent" />
                          <span className="text-xs text-blue-600 font-medium">Ideal</span>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-brand-accent">16°C</div>
                          <div className="text-xs text-muted-foreground">Temperature</div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* AI Recommendations */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-brand-accent" />
                      <span className="text-sm font-medium">Recomendações IA</span>
                    </div>
                    
                    <div className="space-y-2">
                      {[
                        { wine: 'Barolo 2018', score: '95', match: '98%' },
                        { wine: 'Brunello 2017', score: '92', match: '94%' },
                        { wine: 'Chianti Classico', score: '89', match: '91%' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-brand-primary/5 to-transparent hover:from-brand-primary/10 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                              <span className="text-xs font-bold text-brand-primary">{item.score}</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium">{item.wine}</div>
                              <div className="text-xs text-muted-foreground">Match: {item.match}</div>
                            </div>
                          </div>
                          <Heart className="w-4 h-4 text-muted-foreground hover:text-brand-rose transition-colors cursor-pointer" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-2">
                    <button className="p-3 rounded-lg bg-brand-primary/10 hover:bg-brand-primary/20 transition-colors group">
                      <QrCode className="w-5 h-5 text-brand-primary mx-auto mb-1 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium text-brand-primary">Scan</span>
                    </button>
                    <button className="p-3 rounded-lg bg-brand-accent/10 hover:bg-brand-accent/20 transition-colors group">
                      <MapPin className="w-5 h-5 text-brand-accent mx-auto mb-1 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium text-brand-accent">Locate</span>
                    </button>
                    <button className="p-3 rounded-lg bg-brand-gold/10 hover:bg-brand-gold/20 transition-colors group">
                      <Package className="w-5 h-5 mx-auto mb-1 group-hover:scale-110 transition-transform" style={{ color: 'var(--brand-gold)' }} />
                      <span className="text-xs font-medium" style={{ color: 'var(--brand-gold)' }}>Stock</span>
                    </button>
                  </div>
                </div>
              </Card>

              {/* Floating Security Badge */}
              <Card className="absolute -bottom-6 -left-6 glass-card p-4 w-48 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Segurança Total</div>
                    <div className="text-xs text-muted-foreground">Criptografia de ponta</div>
                  </div>
                </div>
              </Card>

              {/* Floating Cloud Sync */}
              <Card className="absolute -top-6 -right-6 glass-card p-4 w-44 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Cloud className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Sync Cloud</div>
                    <div className="text-xs text-muted-foreground">Tempo real</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="text-center mt-20 pt-20 border-t border-border/50">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold">
              Pronto para transformar sua{' '}
              <span className="text-gradient">experiência</span>?
            </h3>
            <p className="text-lg text-muted-foreground">
              Junte-se a milhares de entusiastas que já descobriram o futuro da gestão de adegas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 gradient-primary text-white rounded-xl font-semibold hover-lift shadow-elegant">
                Baixar Gratuitamente
              </button>
              <button className="px-8 py-4 glass-card border-border/50 rounded-xl font-semibold hover-lift">
                Agendar Demo
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}