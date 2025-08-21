import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Target, 
  Users, 
  Zap, 
  TrendingUp, 
  Star,
  ArrowRight,
  Crown,
  Gamepad2,
  Sword,
  Shield,
  Rocket
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Categories() {
  const mainCategories = [
    {
      id: "platinacao",
      name: "Platinação de Jogos",
      icon: Trophy,
      description: "Conquiste todos os troféus e conquistas dos seus jogos favoritos",
      services: 342,
      avgPrice: "R$ 85",
      rating: 4.9,
      difficulty: "Médio",
      timeRange: "3-7 dias",
      color: "from-yellow-400 to-orange-500",
      popular: true,
      games: ["EA SPORTS™ FC 26", "Spider-Man", "God of War", "Horizon", "Call of Duty"],
      benefits: [
        "100% de conquistas desbloqueadas",
        "Métodos seguros e confiáveis",
        "Garantia de conclusão",
        "Suporte durante todo o processo"
      ]
    },
    {
      id: "rank",
      name: "Rank Competitivo",
      icon: Target,
      description: "Suba de rank em jogos competitivos como Valorant, CS2, EA SPORTS™ FC 26",
      services: 258,
      avgPrice: "R$ 150",
      rating: 4.8,
      difficulty: "Alto",
      timeRange: "1-3 semanas",
      color: "from-blue-500 to-purple-600",
      trending: true,
      games: ["Valorant", "CS2", "League of Legends", "EA SPORTS™ FC 26", "Rocket League"],
      benefits: [
        "Estratégias profissionais",
        "Análise de gameplay",
        "Melhorias duradouras",
        "Ranks garantidos"
      ]
    },
    {
      id: "coaching",
      name: "Coaching & Tutoria",
      icon: Users,
      description: "Aprenda com os melhores players e melhore suas habilidades",
      services: 189,
      avgPrice: "R$ 45",
      rating: 4.9,
      difficulty: "Iniciante",
      timeRange: "1-2 horas",
      color: "from-green-400 to-cyan-500",
      educational: true,
      games: ["Fortnite", "Valorant", "CS2", "League of Legends", "Apex"],
      benefits: [
        "Sessões personalizadas",
        "Feedback em tempo real",
        "Gravações das sessões",
        "Planos de melhoria"
      ]
    },
    {
      id: "farming",
      name: "Farming & Grinding",
      icon: Zap,
      description: "Level up, itens raros e progressão de personagem",
      services: 156,
      avgPrice: "R$ 65",
      rating: 4.7,
      difficulty: "Fácil",
      timeRange: "2-5 dias",
      color: "from-purple-500 to-pink-500",
      games: ["World of Warcraft", "Destiny 2", "Diablo", "Path of Exile"],
      benefits: [
        "Progressão acelerada",
        "Itens raros garantidos",
        "Métodos eficientes",
        "Conta sempre segura"
      ]
    },
    {
      id: "boost",
      name: "Account Boost",
      icon: TrendingUp,
      description: "Boost completo da sua conta com múltiplos benefícios",
      services: 94,
      avgPrice: "R$ 200",
      rating: 4.8,
      difficulty: "Alto",
      timeRange: "1-2 semanas",
      color: "from-indigo-500 to-purple-500",
      premium: true,
      games: ["Overwatch", "Apex Legends", "Rainbow Six", "Rocket League"],
      benefits: [
        "Múltiplos objetivos",
        "Pacotes personalizados",
        "Resultados garantidos",
        "Suporte premium"
      ]
    },
    {
      id: "eventos",
      name: "Eventos Especiais",
      icon: Crown,
      description: "Conquistas em eventos limitados e sazonais",
      services: 78,
      avgPrice: "R$ 120",
      rating: 4.9,
      difficulty: "Variável",
      timeRange: "1-7 dias",
      color: "from-red-500 to-orange-500",
      limited: true,
      games: ["Fortnite", "Destiny 2", "Call of Duty", "Apex Legends"],
      benefits: [
        "Itens exclusivos",
        "Recompensas limitadas",
        "Urgência garantida",
        "Expertise em eventos"
      ]
    }
  ];

  const gameCategories = [
    {
      name: "Battle Royale",
      icon: Sword,
      games: ["Fortnite", "Apex Legends", "PUBG", "Warzone"],
      services: 145,
      color: "bg-red-500"
    },
    {
      name: "FPS Tático",
      icon: Target,
      games: ["Valorant", "CS2", "Rainbow Six"],
      services: 198,
      color: "bg-blue-500"
    },
    {
      name: "MOBA",
      icon: Shield,
      games: ["League of Legends", "Dota 2"],
      services: 156,
      color: "bg-purple-500"
    },
    {
      name: "Esportes",
      icon: Trophy,
      games: ["EA SPORTS™ FC 26", "NBA 2K", "Rocket League"],
      services: 134,
      color: "bg-green-500"
    },
    {
      name: "MMO/RPG",
      icon: Zap,
      games: ["WoW", "Final Fantasy XIV", "Destiny 2"],
      services: 89,
      color: "bg-yellow-500"
    },
    {
      name: "Aventura",
      icon: Rocket,
      games: ["Spider-Man", "God of War", "Horizon"],
      services: 112,
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-wakanda-dark via-wakanda-purple to-wakanda-accent p-8 rounded-2xl text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Todas as <span className="text-yellow-300">Categorias</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
              Desde platinação de jogos até coaching profissional. Encontre exatamente o que você precisa para dominar qualquer jogo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/20 text-white px-4 py-2">🏆 500+ Serviços</Badge>
              <Badge className="bg-white/20 text-white px-4 py-2">⭐ 4.8+ Avaliação</Badge>
              <Badge className="bg-white/20 text-white px-4 py-2">🎮 20+ Jogos</Badge>
              <Badge className="bg-white/20 text-white px-4 py-2">💯 100% Garantido</Badge>
            </div>
          </div>
        </div>

        {/* Main Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Categorias de Serviços</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainCategories.map((category, index) => (
              <Card key={category.id} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 hover:border-gaming-blue/50">
                <div className={`h-32 bg-gradient-to-r ${category.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    {category.popular && <Badge className="bg-gaming-orange text-white">Mais Popular</Badge>}
                    {category.trending && <Badge className="bg-green-500 text-white">Trending</Badge>}
                    {category.educational && <Badge className="bg-blue-500 text-white">Educacional</Badge>}
                    {category.premium && <Badge className="bg-purple-500 text-white">Premium</Badge>}
                    {category.limited && <Badge className="bg-red-500 text-white">Limitado</Badge>}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <category.icon className="h-12 w-12 text-white/80" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gaming-blue transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Serviços:</span>
                      <p className="font-semibold">{category.services} disponíveis</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Preço médio:</span>
                      <p className="font-semibold text-green-600">{category.avgPrice}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Avaliação:</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{category.rating}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Tempo:</span>
                      <p className="font-semibold">{category.timeRange}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Jogos Populares:</p>
                    <div className="flex flex-wrap gap-1">
                      {category.games.slice(0, 4).map((game, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {game}
                        </Badge>
                      ))}
                      {category.games.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{category.games.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-medium mb-2">Benefícios:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {category.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-gaming-blue rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full bg-gradient-to-r from-wakanda-purple to-wakanda-deep-purple hover:from-wakanda-purple/90 hover:to-wakanda-deep-purple/90">
                    <Link to={`/services?category=${category.id}`}>
                      Ver Serviços
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Game Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Navegue por Tipo de Jogo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`${category.color} p-3 rounded-lg`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.services} serviços</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {category.games.map((game, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span>{game}</span>
                        <Badge variant="outline" className="text-xs">
                          Popular
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gaming-blue to-gaming-purple rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">getGamer em Números</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Serviços Completados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Gamers Profissionais</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9⭐</div>
              <div className="text-white/80">Avaliação Média</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Suporte Online</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
