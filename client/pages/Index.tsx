import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/AnimatedButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Target, Zap, Users, Shield, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Index() {
  const popularCategories = [
    {
      name: "Platinação de Jogos",
      icon: Trophy,
      description: "Conquiste todos os troféus dos seus jogos favoritos",
      jobs: 342,
      color: "from-wakanda-accent to-wakanda-purple"
    },
    {
      name: "Rank Competitivo",
      icon: Target,
      description: "Suba de rank em jogos como EA SPORTS™ FC 26, Fortnite, Valorant",
      jobs: 258,
      color: "from-wakanda-purple to-wakanda-deep-purple"
    },
    {
      name: "Coaching e Tutoria",
      icon: Users,
      description: "Aprenda com os melhores players",
      jobs: 189,
      color: "from-wakanda-gray to-wakanda-silver"
    },
    {
      name: "Farming e Grinding",
      icon: Zap,
      description: "Level up, itens raros e progressão de personagem",
      jobs: 156,
      color: "from-wakanda-deep-purple to-wakanda-accent"
    }
  ];

  const featuredServices = [
    {
      title: "Platina EA SPORTS™ FC 26 - 100% Garantido",
      provider: "ProGamer_BR",
      rating: 4.9,
      reviews: 127,
      price: "R$ 89",
      time: "3-5 dias",
      image: "🎮",
      badge: "Top Rated",
      category: "Platinação"
    },
    {
      title: "Subida de Rank Valorant (até Diamante)",
      provider: "ValorantPro",
      rating: 5.0,
      reviews: 89,
      price: "R$ 150",
      time: "1-2 semanas",
      image: "🎯",
      badge: "Garantido",
      category: "Rank"
    },
    {
      title: "Coaching Fortnite 1v1",
      provider: "FortniteMaster",
      rating: 4.8,
      reviews: 203,
      price: "R$ 45",
      time: "1 hora",
      image: "🏆",
      badge: "Mais Popular",
      category: "Coaching"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-wakanda-dark via-wakanda-gray to-wakanda-purple">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="bg-wakanda-accent text-wakanda-dark px-4 py-2 text-sm font-medium font-bold">
                🎮 A Nova Era dos Serviços Gaming
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Conecte-se com os
              <span className="bg-gradient-to-r from-wakanda-accent to-white bg-clip-text text-transparent"> Melhores Players </span>
              do Brasil
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Plantine jogos, suba de rank, aprenda com pros. Tudo isso com segurança e garantia total.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <AnimatedButton
                size="lg"
                className="bg-wakanda-accent hover:bg-wakanda-accent/90 text-wakanda-dark px-8 py-6 text-lg font-bold"
                animationType="pulse"
              >
                <Play className="mr-2 h-5 w-5" />
                Começar Agora
              </AnimatedButton>
              <AnimatedButton
                size="lg"
                variant="outline"
                className="border-white text-gray-500 hover:bg-white hover:text-wakanda-dark px-8 py-6 text-lg"
                animationType="glow"
              >
                Quero Prestar Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </AnimatedButton>
            </motion.div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-3">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-1">100% Seguro</h3>
                <p className="text-white/80 text-sm">Pagamento protegido e garantia de serviço</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-3">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-1">+10.000 Gamers</h3>
                <p className="text-white/80 text-sm">Comunidade ativa de players e clientes</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-3">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Melhor Avaliado</h3>
                <p className="text-white/80 text-sm">4.9★ de média em satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Categorias Mais Populares</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore os serviços de gaming mais procurados pelos jogadores brasileiros
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer">
                <CardHeader className="text-center pb-3">
                  <div className={`mx-auto w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {category.jobs} serviços disponíveis
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviços em Destaque</h2>
              <p className="text-lg text-muted-foreground">
                Os melhores profissionais com avaliações excelentes
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              Ver Todos os Serviços
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="bg-gradient-to-br from-gaming-blue to-gaming-purple h-32 flex items-center justify-center">
                    <span className="text-4xl">{service.image}</span>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-gaming-orange text-white">
                    {service.badge}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-xs mb-2">
                      {service.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <span>por</span>
                    <span className="font-medium text-foreground">{service.provider}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">{service.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({service.reviews} avaliações)</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-wakanda-purple">{service.price}</span>
                      <p className="text-xs text-muted-foreground">{service.time}</p>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-wakanda-purple to-wakanda-deep-purple hover:from-wakanda-purple/90 hover:to-wakanda-deep-purple/90">
                      Contratar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-wakanda-dark to-wakanda-purple">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Dominar Seus Jogos?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Junte-se a milhares de gamers que já transformaram sua experiência de jogo conosco
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-wakanda-accent hover:bg-wakanda-accent/90 text-wakanda-dark px-8 py-6 text-lg font-bold">
                Encontrar Serviços
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-wakanda-dark px-8 py-6 text-lg">
                Cadastrar Como Pro
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
