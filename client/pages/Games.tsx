import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/AnimatedButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Target, Users, TrendingUp, ArrowRight, Gamepad2, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Games() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const popularGames = [
    {
      id: "fifa",
      name: "EA SPORTS™ FC 26",
      category: "Esportes",
      image: "⚽",
      services: 156,
      avgRating: 4.8,
      avgPrice: "R$ 75",
      description: "Domine os campos virtuais com os melhores jogadores do Brasil",
      specialties: ["Platinação", "FUT Champions", "Division Rivals", "Career Mode"],
      difficulty: "Médio",
      color: "from-green-500 to-blue-600"
    },
    {
      id: "fortnite",
      name: "Fortnite",
      category: "Battle Royale",
      image: "🏗️",
      services: 203,
      avgRating: 4.9,
      avgPrice: "R$ 45",
      description: "Construa, lute e vença com estratégias profissionais",
      specialties: ["Coaching", "Rank Push", "Victory Royales", "Building"],
      difficulty: "Alto",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "valorant",
      name: "Valorant",
      category: "FPS Tático",
      image: "🎯",
      services: 189,
      avgRating: 4.9,
      avgPrice: "R$ 120",
      description: "Precise mira, estratégia perfeita e teamwork impecável",
      specialties: ["Rank Boost", "Aim Training", "Map Control", "Agent Mastery"],
      difficulty: "Muito Alto",
      color: "from-red-500 to-orange-500"
    },
    {
      id: "cs2",
      name: "Counter-Strike 2",
      category: "FPS Tático",
      image: "🔫",
      services: 145,
      avgRating: 4.7,
      avgPrice: "R$ 180",
      description: "O clássico FPS que define habilidade e precisão",
      specialties: ["Global Elite", "Faceit", "Premier Mode", "Aim Training"],
      difficulty: "Muito Alto",
      color: "from-yellow-500 to-red-600"
    },
    {
      id: "lol",
      name: "League of Legends",
      category: "MOBA",
      image: "⚔️",
      services: 167,
      avgRating: 4.6,
      avgPrice: "R$ 95",
      description: "Domine a Fenda do Invocador com estratégias profissionais",
      specialties: ["Elo Boost", "Coaching", "Champion Mastery", "Ranked"],
      difficulty: "Alto",
      color: "from-blue-600 to-purple-600"
    },
    {
      id: "apex",
      name: "Apex Legends",
      category: "Battle Royale",
      image: "🏆",
      services: 98,
      avgRating: 4.8,
      avgPrice: "R$ 65",
      description: "Legends nunca morrem, eles simplesmente reagrupam",
      specialties: ["Rank Push", "Arena", "Team Formation", "Legend Training"],
      difficulty: "Alto",
      color: "from-orange-500 to-red-500"
    }
  ];

  const gameCategories = [
    {
      name: "Battle Royale",
      games: ["Fortnite", "Apex Legends", "PUBG", "Call of Duty"],
      icon: Trophy,
      color: "bg-red-500"
    },
    {
      name: "FPS Tático",
      games: ["Valorant", "CS2", "Rainbow Six"],
      icon: Target,
      color: "bg-blue-500"
    },
    {
      name: "MOBA",
      games: ["League of Legends", "Dota 2"],
      icon: Users,
      color: "bg-purple-500"
    },
    {
      name: "Esportes",
      games: ["EA SPORTS™ FC 26", "NBA 2K", "Rocket League"],
      icon: Gamepad2,
      color: "bg-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-wakanda-dark via-wakanda-purple to-wakanda-accent p-8 rounded-2xl text-white mb-8">
              <motion.div
                className="flex justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Gamepad2 className="h-12 w-12" />
                </div>
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Jogos <span className="text-wakanda-accent">Populares</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
                Escolha seu jogo favorito e conecte-se com os melhores profissionais especializados.
                Cada jogo tem suas próprias estratégias e técnicas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-white/20 text-white px-4 py-2">🎮 6 Jogos Principais</Badge>
                <Badge className="bg-white/20 text-white px-4 py-2">⭐ 4.8+ Avaliação</Badge>
                <Badge className="bg-white/20 text-white px-4 py-2">🏆 1000+ Serviços</Badge>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Game Categories */}
        <ScrollReveal animation="fadeInUp">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Navegue por Categoria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gameCategories.map((category, index) => (
                <ScrollReveal key={index} animation="scaleIn" delay={index * 0.1}>
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="pt-6 text-center">
                      <div className={`${category.color} p-3 rounded-lg mx-auto w-fit mb-4 group-hover:scale-110 transition-transform`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold mb-2">{category.name}</h3>
                      <div className="space-y-1">
                        {category.games.map((game, i) => (
                          <Badge key={i} variant="outline" className="text-xs mr-1 mb-1">
                            {game}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Popular Games */}
        <div className="mb-16">
          <ScrollReveal animation="fadeInUp">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-bold mb-4 md:mb-0">Jogos Mais Populares</h2>
              <AnimatedButton
                variant="outline"
                className="border-wakanda-purple text-wakanda-purple hover:bg-wakanda-purple hover:text-white"
                animationType="slide"
                onClick={() => {
                  document.getElementById('all-games')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Todos os Jogos
                <ArrowRight className="ml-2 h-4 w-4" />
              </AnimatedButton>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularGames.map((game, index) => (
              <ScrollReveal key={game.id} animation="fadeInUp" delay={index * 0.1}>
                <Link to={`/games/${game.id}`} className="block">
                  <Card className="group hover:shadow-xl transition-all duration-500 overflow-hidden border-2 hover:border-wakanda-purple/50 cursor-pointer h-full">
                    <div className={`h-40 bg-gradient-to-r ${game.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-wakanda-accent text-wakanda-dark font-bold">
                          {game.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="text-5xl">{game.image}</span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-white/20 text-white">
                          {game.services} serviços
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-wakanda-purple transition-colors">
                          {game.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {game.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Avaliação:</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{game.avgRating}</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Preço médio:</span>
                          <p className="font-semibold text-green-600">{game.avgPrice}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Dificuldade:</span>
                          <p className="font-semibold">{game.difficulty}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Serviços:</span>
                          <p className="font-semibold">{game.services}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-sm font-medium mb-2">Especialidades:</p>
                        <div className="flex flex-wrap gap-1">
                          {game.specialties.map((specialty, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-center text-wakanda-purple group-hover:text-wakanda-deep-purple transition-colors">
                        <span className="text-sm font-medium mr-2">Ver Serviços</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* All Games Section */}
        <div id="all-games" className="mb-16">
          <ScrollReveal animation="fadeInUp">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Todos os Jogos Disponíveis</h2>
                <Badge className="bg-wakanda-purple text-white px-4 py-2">
                  50+ Jogos
                </Badge>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {["Todos", "FPS", "BR", "MOBA", "Esportes", "RPG", "Aventura"].map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-wakanda-purple hover:bg-wakanda-purple/90"
                        : "border-wakanda-purple text-wakanda-purple hover:bg-wakanda-purple hover:text-white"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[
              { name: "EA SPORTS™ FC 26", emoji: "⚽", category: "Esportes", available: true },
              { name: "Valorant", emoji: "🎯", category: "FPS", available: true },
              { name: "CS2", emoji: "🔫", category: "FPS", available: true },
              { name: "Fortnite", emoji: "🏗️", category: "Battle Royale", available: true },
              { name: "League of Legends", emoji: "⚔️", category: "MOBA", available: true },
              { name: "Apex Legends", emoji: "🏆", category: "Battle Royale", available: true },
              { name: "Call of Duty: Black Ops 6", emoji: "💣", category: "FPS", available: true },
              { name: "Rocket League", emoji: "🚗", category: "Esportes", available: true },
              { name: "Overwatch 2", emoji: "🛡️", category: "FPS de Heróis", available: true },
              { name: "Rainbow Six Siege", emoji: "🎖️", category: "FPS Tático", available: true },
              { name: "Destiny 2", emoji: "🌌", category: "RPG de Tiro", available: true },
              { name: "PUBG: Battlegrounds", emoji: "🪂", category: "Battle Royale", available: true },
              { name: "Dota 2", emoji: "🗡️", category: "MOBA", available: true },
              { name: "Among Us", emoji: "👽", category: "Social", available: true },
              { name: "Minecraft", emoji: "🧱", category: "Sandbox", available: true },
              { name: "GTA V", emoji: "🚓", category: "Ação", available: true },
              { name: "World of Warcraft", emoji: "🐉", category: "MMO", available: true },
              { name: "Final Fantasy XIV", emoji: "⚡", category: "MMO", available: true },
              { name: "Halo Infinite", emoji: "👽", category: "FPS", available: true },
              { name: "Fall Guys", emoji: "🍊", category: "Battle Royale", available: true },
              { name: "NBA 2K25", emoji: "🏀", category: "Esportes", available: true },
              { name: "Madden NFL 25", emoji: "🏈", category: "Esportes", available: true },
              { name: "God of War Ragnarök", emoji: "⚔️", category: "Aventura", available: true },
              { name: "Marvel's Spider-Man 2", emoji: "🕷️", category: "Aventura", available: true },
              { name: "Horizon Forbidden West", emoji: "🏹", category: "Aventura", available: true },
              { name: "The Last of Us Part II Remastered", emoji: "🧟", category: "Aventura", available: true },
              { name: "Tekken 8", emoji: "👊", category: "Luta", available: true },
              { name: "Street Fighter 6", emoji: "🥊", category: "Luta", available: true },
              { name: "Mortal Kombat 1", emoji: "🩸", category: "Luta", available: true },
              { name: "Gran Turismo 7", emoji: "🏎️", category: "Corrida", available: true },
              { name: "F1 24", emoji: "🏁", category: "Corrida", available: true },
              { name: "Need for Speed Unbound", emoji: "🚙", category: "Corrida", available: true },
              { name: "Diablo 4", emoji: "😈", category: "RPG", available: true },
              { name: "Path of Exile", emoji: "💎", category: "RPG", available: true },
              { name: "Elden Ring", emoji: "🗿", category: "RPG", available: true },
              { name: "Dark Souls 3", emoji: "🔥", category: "RPG", available: true },
              { name: "Cyberpunk 2077", emoji: "🤖", category: "RPG de Ação", available: true },
              { name: "The Witcher 3: Wild Hunt", emoji: "🐺", category: "RPG", available: true },
              { name: "Red Dead Redemption 2", emoji: "🤠", category: "Aventura", available: true },
              { name: "Assassin's Creed Shadows", emoji: "🗡️", category: "Aventura", available: true },
              { name: "Resident Evil 4 Remake", emoji: "🧟‍♂️", category: "Terror", available: false },
              { name: "Silent Hill 2 Remake", emoji: "🌫️", category: "Terror Psicológico", available: false },
              { name: "Dead by Daylight", emoji: "💀", category: "Terror", available: false },
              { name: "Phasmophobia", emoji: "👻", category: "Terror", available: false },
              { name: "Baldur's Gate 3", emoji: "🎲", category: "RPG", available: false },
              { name: "Starfield", emoji: "🚀", category: "RPG", available: false },
              { name: "Palworld", emoji: "🐾", category: "Survival", available: false },
              { name: "Helldivers 2", emoji: "👾", category: "Coop", available: false },
              { name: "Sea of Thieves", emoji: "🏴‍☠️", category: "Aventura", available: false },
              { name: "No Man's Sky", emoji: "🌍", category: "Exploração", available: false }
            ].map((game, index) => (
              <ScrollReveal key={index} animation="scaleIn" delay={index * 0.02}>
                {game.available ? (
                  <Link to={`/games/${game.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`} className="block">
                    <Card className="group transition-all duration-300 cursor-pointer hover:shadow-lg hover:border-wakanda-purple/50 border-2 h-full">
                      <CardContent className="p-4 text-center">
                        <div className="text-3xl mb-2">{game.emoji}</div>
                        <h3 className="font-semibold text-sm mb-1 group-hover:text-wakanda-purple transition-colors">
                          {game.name}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {game.category}
                        </Badge>
                        <div className="mt-2 text-xs text-wakanda-purple opacity-0 group-hover:opacity-100 transition-opacity">
                          Ver Serviços →
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ) : (
                  <Card className="group transition-all duration-300 opacity-60 cursor-not-allowed border border-dashed h-full">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl mb-2">{game.emoji}</div>
                      <h3 className="font-semibold text-sm mb-1">
                        {game.name}
                      </h3>
                      <Badge variant="outline" className="text-xs opacity-50">
                        {game.category}
                      </Badge>
                      <div className="mt-2">
                        <Badge className="bg-muted text-muted-foreground text-xs">
                          Em Breve
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <ScrollReveal animation="fadeInUp">
          <div className="bg-gradient-to-r from-wakanda-dark to-wakanda-purple rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">getGamer Games em Números</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-white/80">Jogos Suportados</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-bold mb-2">1.2k+</div>
                <div className="text-white/80">Serviços Ativos</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-bold mb-2">800+</div>
                <div className="text-white/80">Pros Especializados</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-bold mb-2">4.8⭐</div>
                <div className="text-white/80">Satisfação Média</div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
