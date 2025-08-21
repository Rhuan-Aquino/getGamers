import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/AnimatedButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Trophy, Target, Users, Clock, DollarSign, ArrowLeft, ArrowRight, Shield, TrendingUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

// Base de dados dos jogos
const allGamesData = {
  eafc26: {
    name: "EA SPORTS™ FC 26",
    category: "Esportes",
    image: "⚽",
    description: "Domine os campos virtuais com os melhores jogadores do mundo",
    longDescription: "O EA SPORTS™ FC 26 traz a experiência mais autêntica do futebol com a tecnologia HyperMotion V e ligas licenciadas, oferecendo uma jogabilidade realista e envolvente. Com o novo sistema de personalização e modos de jogo aprimorados, crie sua jornada rumo à glória no futebol.",
    rating: 4.8,
    totalServices: 156,
    totalPros: 45,
    avgPrice: "R$ 75",
    difficulty: "Médio",
    color: "from-green-500 to-blue-600",
    primaryColor: "green-500",
    accentColor: "blue-600",
    specialties: [
      { name: "Platinação Completa", price: "R$ 89", time: "7-10 dias", difficulty: "Médio" },
      { name: "FUT Champions", price: "R$ 120", time: "1 semana", difficulty: "Alto" },
      { name: "Division Rivals", price: "R$ 65", time: "3-5 dias", difficulty: "Fácil" },
      { name: "Career Mode", price: "R$ 45", time: "2-3 dias", difficulty: "Fácil" },
      { name: "Ultimate Team Coins", price: "R$ 35", time: "24h", difficulty: "Fácil" },
      { name: "Pro Clubs Boost", price: "R$ 55", time: "3-4 dias", difficulty: "Médio" }
    ]
  },
  valorant: {
    name: "Valorant",
    category: "FPS Tático",
    image: "🎯",
    description: "Precise mira, estratégia perfeita e teamwork impecável",
    longDescription: "Valorant é um jogo de tiro tático em primeira pessoa onde a estratégia precisa se encontra com o gameplay de alta habilidade. Cada partida é uma experiência intensa onde a precisão e o trabalho em equipe determinam a vitória.",
    rating: 4.9,
    totalServices: 189,
    totalPros: 67,
    avgPrice: "R$ 120",
    difficulty: "Muito Alto",
    color: "from-red-500 to-orange-500",
    primaryColor: "red-500",
    accentColor: "orange-500",
    specialties: [
      { name: "Rank Boost (até Imortal)", price: "R$ 200", time: "1-2 semanas", difficulty: "Muito Alto" },
      { name: "Coaching Individual", price: "R$ 80", time: "2 horas", difficulty: "Médio" },
      { name: "Aim Training", price: "R$ 45", time: "1 semana", difficulty: "Médio" },
      { name: "Map Control", price: "R$ 60", time: "5 dias", difficulty: "Alto" },
      { name: "Agent Mastery", price: "R$ 55", time: "3-4 dias", difficulty: "Médio" },
      { name: "Team Strategy", price: "R$ 150", time: "1 semana", difficulty: "Alto" }
    ]
  },
  cs2: {
    name: "Counter-Strike 2",
    category: "FPS Tático",
    image: "🔫",
    description: "O clássico FPS que define habilidade e precisão",
    longDescription: "Counter-Strike 2 é a evolução do lendário jogo de tiro tático. Com gráficos atualizados e mecânicas refinadas, CS2 continua sendo o padrão ouro dos jogos competitivos de FPS.",
    rating: 4.7,
    totalServices: 145,
    totalPros: 52,
    avgPrice: "R$ 180",
    difficulty: "Muito Alto",
    color: "from-yellow-500 to-red-600",
    primaryColor: "yellow-500",
    accentColor: "red-600",
    specialties: [
      { name: "Global Elite", price: "R$ 300", time: "2-3 semanas", difficulty: "Muito Alto" },
      { name: "Faceit Boost", price: "R$ 250", time: "1-2 semanas", difficulty: "Alto" },
      { name: "Premier Mode", price: "R$ 150", time: "1 semana", difficulty: "Alto" },
      { name: "Aim Training", price: "R$ 60", time: "1 semana", difficulty: "Médio" },
      { name: "Map Knowledge", price: "R$ 80", time: "5 dias", difficulty: "Médio" },
      { name: "Team Tactics", price: "R$ 120", time: "1 semana", difficulty: "Alto" }
    ]
  },
  fortnite: {
    name: "Fortnite",
    category: "Battle Royale",
    image: "🏗️",
    description: "Construa, lute e vença com estratégias profissionais",
    longDescription: "Fortnite revolucionou o gênero Battle Royale com sua mecânica única de construção. Combine habilidades de tiro, construção e estratégia para ser o último jogador em pé.",
    rating: 4.9,
    totalServices: 203,
    totalPros: 89,
    avgPrice: "R$ 45",
    difficulty: "Alto",
    color: "from-purple-500 to-pink-500",
    primaryColor: "purple-500",
    accentColor: "pink-500",
    specialties: [
      { name: "Victory Royales", price: "R$ 35", time: "1-2 dias", difficulty: "Alto" },
      { name: "Building Training", price: "R$ 50", time: "3 dias", difficulty: "Médio" },
      { name: "Coaching 1v1", price: "R$ 45", time: "1 hora", difficulty: "Médio" },
      { name: "Arena Boost", price: "R$ 80", time: "1 semana", difficulty: "Alto" },
      { name: "Creative Maps", price: "R$ 25", time: "1 dia", difficulty: "Fácil" },
      { name: "Competitive Training", price: "R$ 100", time: "1 semana", difficulty: "Alto" }
    ]
  },
  lol: {
    name: "League of Legends",
    category: "MOBA",
    image: "⚔️",
    description: "Domine a Fenda do Invocador com estratégias profissionais",
    longDescription: "League of Legends é o MOBA mais popular do mundo, onde duas equipes de cinco jogadores únicos lutam para destruir a base inimiga. Cada partida é uma experiência estratégica única.",
    rating: 4.6,
    totalServices: 167,
    totalPros: 78,
    avgPrice: "R$ 95",
    difficulty: "Alto",
    color: "from-blue-600 to-purple-600",
    primaryColor: "blue-600",
    accentColor: "purple-600",
    specialties: [
      { name: "Elo Boost (até Diamante)", price: "R$ 150", time: "1-2 semanas", difficulty: "Alto" },
      { name: "Coaching Lane", price: "R$ 70", time: "2 horas", difficulty: "Médio" },
      { name: "Champion Mastery", price: "R$ 45", time: "3-5 dias", difficulty: "Médio" },
      { name: "Ranked Flex", price: "R$ 80", time: "1 semana", difficulty: "Médio" },
      { name: "TFT Boost", price: "R$ 60", time: "3-5 dias", difficulty: "Fácil" },
      { name: "Duo Queue", price: "R$ 90", time: "1 semana", difficulty: "Alto" }
    ]
  },
  apex: {
    name: "Apex Legends",
    category: "Battle Royale",
    image: "🏆",
    description: "Legends nunca morrem, eles simplesmente reagrupam",
    longDescription: "Apex Legends combina elementos de hero shooter com Battle Royale, oferecendo personagens únicos com habilidades especiais em combates rápidos e intensos.",
    rating: 4.8,
    totalServices: 98,
    totalPros: 34,
    avgPrice: "R$ 65",
    difficulty: "Alto",
    color: "from-orange-500 to-red-500",
    primaryColor: "orange-500",
    accentColor: "red-500",
    specialties: [
      { name: "Rank Push (até Predator)", price: "R$ 180", time: "1-2 semanas", difficulty: "Muito Alto" },
      { name: "Arena Training", price: "R$ 50", time: "3 dias", difficulty: "Médio" },
      { name: "Legend Mastery", price: "R$ 60", time: "5 dias", difficulty: "Médio" },
      { name: "Team Formation", price: "R$ 90", time: "1 semana", difficulty: "Alto" },
      { name: "Movement Training", price: "R$ 45", time: "3 dias", difficulty: "Médio" },
      { name: "Competitive Coaching", price: "R$ 85", time: "1 semana", difficulty: "Alto" }
    ]
  },
  cod: {
    name: "Call of Duty: Black Ops 6",
    category: "FPS",
    image: "💣",
    description: "O mais intenso e realista combate moderno",
    longDescription: "Call of Duty: Black Ops 6 oferece uma experiência cinematográfica de tiro em primeira pessoa. Com campanhas imersivas, modos multijogador acelerados e o icônico Battle Royale Warzone, é a franquia definitiva para os fãs de ação.",
    rating: 4.7,
    totalServices: 210,
    totalPros: 95,
    avgPrice: "R$ 85",
    difficulty: "Alto",
    color: "from-gray-800 to-black",
    primaryColor: "gray-800",
    accentColor: "black",
    specialties: [
      { name: "Multiplayer Rank Up", price: "R$ 120", time: "1 semana", difficulty: "Alto" },
      { name: "Warzone Victories", price: "R$ 90", time: "3-5 dias", difficulty: "Médio" },
      { name: "Weapon Camo Grind", price: "R$ 75", time: "7-10 dias", difficulty: "Médio" },
      { name: "DMZ Mission Complete", price: "R$ 60", time: "3 dias", difficulty: "Fácil" },
      { name: "Sniper Mastery", price: "R$ 50", time: "2 dias", difficulty: "Médio" },
      { name: "Coaching de Estratégia", price: "R$ 70", time: "2 horas", difficulty: "Médio" }
    ]
  },
  rocketleague: {
    name: "Rocket League",
    category: "Esportes",
    image: "🚗",
    description: "Futebol e carros de corrida em um só jogo",
    longDescription: "Rocket League é uma fusão explosiva de futebol com carros a jato. Domine as acrobacias aéreas e as manobras no chão para marcar gols espetaculares e subir no ranking.",
    rating: 4.8,
    totalServices: 75,
    totalPros: 25,
    avgPrice: "R$ 60",
    difficulty: "Alto",
    color: "from-blue-600 to-red-600",
    primaryColor: "blue-600",
    accentColor: "red-600",
    specialties: [
      { name: "Rank Boost", price: "R$ 100", time: "1 semana", difficulty: "Alto" },
      { name: "Aerial Training", price: "R$ 45", time: "3 dias", difficulty: "Médio" },
      { name: "Coaching Individual", price: "R$ 55", time: "1 hora", difficulty: "Médio" },
      { name: "Team Training", price: "R$ 80", time: "1 semana", difficulty: "Alto" },
      { name: "Dribbling Drills", price: "R$ 35", time: "2 dias", difficulty: "Fácil" },
      { name: "Freestyle Training", price: "R$ 65", time: "5 dias", difficulty: "Médio" }
    ]
  },
  overwatch2: {
    name: "Overwatch 2",
    category: "FPS de Heróis",
    image: "🛡️",
    description: "Batalhas em equipe, heróis únicos e objetivos estratégicos",
    longDescription: "Overwatch 2 é um jogo de tiro em equipe com um elenco de heróis futuristas, cada um com habilidades e papéis distintos. A estratégia e a sinergia de equipe são cruciais para a vitória.",
    rating: 4.6,
    totalServices: 88,
    totalPros: 30,
    avgPrice: "R$ 70",
    difficulty: "Médio",
    color: "from-orange-500 to-yellow-400",
    primaryColor: "orange-500",
    accentColor: "yellow-400",
    specialties: [
      { name: "Rank Boost", price: "R$ 110", time: "1-2 semanas", difficulty: "Alto" },
      { name: "Hero Mastery", price: "R$ 50", time: "3 dias", difficulty: "Médio" },
      { name: "Coaching de Funções", price: "R$ 65", time: "2 horas", difficulty: "Médio" },
      { name: "Team Strategy", price: "R$ 95", time: "1 semana", difficulty: "Alto" },
      { name: "Loot Box Farming", price: "R$ 20", time: "1 dia", difficulty: "Fácil" },
      { name: "Arcade Modes", price: "R$ 30", time: "2 dias", difficulty: "Fácil" }
    ]
  },
  rainbowsix: {
    name: "Rainbow Six Siege",
    category: "FPS Tático",
    image: "🎖️",
    description: "Táticas de elite e destruição ambiental em um combate tenso",
    longDescription: "Rainbow Six Siege é um FPS tático onde o planejamento e a comunicação são tudo. As partidas são curtas e intensas, com ambientes destrutíveis que mudam a estratégia do jogo a cada rodada.",
    rating: 4.7,
    totalServices: 105,
    totalPros: 40,
    avgPrice: "R$ 105",
    difficulty: "Muito Alto",
    color: "from-blue-700 to-gray-800",
    primaryColor: "blue-700",
    accentColor: "gray-800",
    specialties: [
      { name: "Ranked Boost", price: "R$ 200", time: "1-2 semanas", difficulty: "Muito Alto" },
      { name: "Operator Mastery", price: "R$ 70", time: "5 dias", difficulty: "Médio" },
      { name: "Coaching de Ataque", price: "R$ 80", time: "3 horas", difficulty: "Alto" },
      { name: "Coaching de Defesa", price: "R$ 80", time: "3 horas", difficulty: "Alto" },
      { name: "Map Knowledge", price: "R$ 50", time: "4 dias", difficulty: "Médio" },
      { name: "Team Strategy", price: "R$ 150", time: "1 semana", difficulty: "Alto" }
    ]
  },
  destiny2: {
    name: "Destiny 2",
    category: "RPG de Tiro",
    image: "🌌",
    description: "A aventura de um Guardião em um universo de ficção científica",
    longDescription: "Destiny 2 é um FPS em um mundo persistente, combinando elementos de RPG com uma jogabilidade de tiro fluida. Explore planetas, enfrente inimigos alienígenas e colete equipamentos lendários para se tornar mais poderoso.",
    rating: 4.5,
    totalServices: 130,
    totalPros: 50,
    avgPrice: "R$ 80",
    difficulty: "Médio",
    color: "from-indigo-600 to-purple-600",
    primaryColor: "indigo-600",
    accentColor: "purple-600",
    specialties: [
      { name: "Raid Boost (Loot)", price: "R$ 150", time: "2-3 dias", difficulty: "Alto" },
      { name: "Crucible PvP", price: "R$ 90", time: "1 semana", difficulty: "Médio" },
      { name: "Grandmaster Nightfall", price: "R$ 120", time: "2 dias", difficulty: "Muito Alto" },
      { name: "Dungeon Completion", price: "R$ 70", time: "1 dia", difficulty: "Médio" },
      { name: "Exotic Quest", price: "R$ 45", time: "1 dia", difficulty: "Fácil" },
      { name: "Power Leveling", price: "R$ 60", time: "3-4 dias", difficulty: "Médio" }
    ]
  },
  pubg: {
    name: "PUBG: Battlegrounds",
    category: "Battle Royale",
    image: "🪂",
    description: "O jogo que popularizou o gênero Battle Royale",
    longDescription: "PUBG: Battlegrounds é o pioneiro do gênero, com uma abordagem mais realista e tática. Salte de paraquedas, procure armas e lute pela sua sobrevivência em um mapa que diminui constantemente.",
    rating: 4.4,
    totalServices: 65,
    totalPros: 22,
    avgPrice: "R$ 70",
    difficulty: "Alto",
    color: "from-yellow-400 to-green-500",
    primaryColor: "yellow-400",
    accentColor: "green-500",
    specialties: [
      { name: "Rank Boost", price: "R$ 130", time: "1-2 semanas", difficulty: "Muito Alto" },
      { name: "Chicken Dinners", price: "R$ 40", time: "1-2 dias", difficulty: "Médio" },
      { name: "Loot Farming", price: "R$ 30", time: "1 dia", difficulty: "Fácil" },
      { name: "Survival Training", price: "R$ 55", time: "3 dias", difficulty: "Médio" },
      { name: "Coaching de Veículos", price: "R$ 25", time: "1 hora", difficulty: "Fácil" },
      { name: "Squad Strategy", price: "R$ 80", time: "1 semana", difficulty: "Alto" }
    ]
  },
  dota2: {
    name: "Dota 2",
    category: "MOBA",
    image: "🗡️",
    description: "Um dos MOBAs mais complexos e desafiadores do mundo",
    longDescription: "Dota 2 é a essência do MOBA, com uma profundidade tática e mecânica quase infinita. Cada partida é uma experiência de aprendizado, onde a cooperação e a habilidade individual são testadas ao máximo.",
    rating: 4.5,
    totalServices: 112,
    totalPros: 55,
    avgPrice: "R$ 150",
    difficulty: "Muito Alto",
    color: "from-red-600 to-blue-700",
    primaryColor: "red-600",
    accentColor: "blue-700",
    specialties: [
      { name: "Rank Boost (MMR)", price: "R$ 250", time: "2-3 semanas", difficulty: "Muito Alto" },
      { name: "Coaching de Herói", price: "R$ 90", time: "3 horas", difficulty: "Alto" },
      { name: "Last Hit Training", price: "R$ 50", time: "2 dias", difficulty: "Médio" },
      { name: "Role Mastery", price: "R$ 70", time: "1 semana", difficulty: "Médio" },
      { name: "Team Strategy", price: "R$ 180", time: "1 semana", difficulty: "Muito Alto" },
      { name: "Itemization Guide", price: "R$ 40", time: "1 dia", difficulty: "Fácil" }
    ]
  },
  amongus: {
    name: "Among Us",
    category: "Social",
    image: "👽",
    description: "Descubra o impostor ou execute suas tarefas",
    longDescription: "Among Us é um jogo de dedução social onde uma equipe de tripulantes deve completar tarefas em uma nave, enquanto um ou mais impostores tentam sabotá-los e eliminá-los, tudo sem serem descobertos.",
    rating: 4.9,
    totalServices: 40,
    totalPros: 15,
    avgPrice: "R$ 30",
    difficulty: "Fácil",
    color: "from-blue-400 to-green-400",
    primaryColor: "blue-400",
    accentColor: "green-400",
    specialties: [
      { name: "Impostor Strategy", price: "R$ 25", time: "1 hora", difficulty: "Fácil" },
      { name: "Crewmate Deduction", price: "R$ 20", time: "1 hora", difficulty: "Fácil" },
      { name: "Public Lobby Win", price: "R$ 15", time: "1 dia", difficulty: "Fácil" },
      { name: "Private Game Hosting", price: "R$ 50", time: "2 horas", difficulty: "Fácil" },
      { name: "Modded Game Training", price: "R$ 35", time: "1 dia", difficulty: "Médio" },
      { name: "Voice Chat Guide", price: "R$ 10", time: "30 min", difficulty: "Fácil" }
    ]
  },
  minecraft: {
    name: "Minecraft",
    category: "Sandbox",
    image: "🧱",
    description: "Construa seu mundo, crie sua aventura",
    longDescription: "Minecraft é um jogo de mundo aberto onde a única regra é a sua imaginação. Construa estruturas, explore mundos vastos, crie ferramentas e defenda-se de monstros em um universo feito de blocos.",
    rating: 4.9,
    totalServices: 250,
    totalPros: 105,
    avgPrice: "R$ 40",
    difficulty: "Fácil",
    color: "from-brown-400 to-green-500",
    primaryColor: "brown-400",
    accentColor: "green-500",
    specialties: [
      { name: "Mega Build", price: "R$ 150", time: "1-2 semanas", difficulty: "Alto" },
      { name: "Redstone Engineering", price: "R$ 80", time: "5 dias", difficulty: "Médio" },
      { name: "Survival World", price: "R$ 60", time: "3-5 dias", difficulty: "Médio" },
      { name: "Modpack Guide", price: "R$ 45", time: "2 dias", difficulty: "Fácil" },
      { name: "Server Setup", price: "R$ 90", time: "1 dia", difficulty: "Médio" },
      { name: "Minigame Training", price: "R$ 30", time: "1 dia", difficulty: "Fácil" }
    ]
  },
  gtav: {
    name: "GTA V",
    category: "Ação",
    image: "🚓",
    description: "Viva uma vida de crime e liberdade em Los Santos",
    longDescription: "GTA V é um jogo de ação e aventura em mundo aberto, onde você explora a vasta cidade de Los Santos e participa de missões épicas e roubos audaciosos. O mundo de GTA Online oferece ainda mais possibilidades.",
    rating: 4.8,
    totalServices: 190,
    totalPros: 80,
    avgPrice: "R$ 50",
    difficulty: "Médio",
    color: "from-blue-600 to-red-600",
    primaryColor: "blue-600",
    accentColor: "red-600",
    specialties: [
      { name: "Heist Help (Online)", price: "R$ 60", time: "2-3 dias", difficulty: "Médio" },
      { name: "Money Farming", price: "R$ 40", time: "1-2 dias", difficulty: "Fácil" },
      { name: "Story Mode Completion", price: "R$ 75", time: "3-5 dias", difficulty: "Médio" },
      { name: "Racing Skills", price: "R$ 35", time: "1 dia", difficulty: "Fácil" },
      { name: "PvP Training", price: "R$ 55", time: "2 dias", difficulty: "Médio" },
      { name: "Business Setup (Online)", price: "R$ 85", time: "2 dias", difficulty: "Médio" }
    ]
  },
  wow: {
    name: "World of Warcraft",
    category: "MMO",
    image: "🐉",
    description: "Embarque em uma jornada épica no mundo de Azeroth",
    longDescription: "World of Warcraft é o MMO de fantasia mais icônico do mundo. Escolha sua facção, explore vastos continentes, enfrente chefes lendários em raides e participe de combates PvP massivos.",
    rating: 4.5,
    totalServices: 230,
    totalPros: 110,
    avgPrice: "R$ 110",
    difficulty: "Muito Alto",
    color: "from-blue-800 to-yellow-600",
    primaryColor: "blue-800",
    accentColor: "yellow-600",
    specialties: [
      { name: "Raid Carry (Heroic/Mythic)", price: "R$ 200", time: "1-2 dias", difficulty: "Muito Alto" },
      { name: "PvP Arena Boost", price: "R$ 180", time: "1 semana", difficulty: "Alto" },
      { name: "Dungeon Farming", price: "R$ 70", time: "3 dias", difficulty: "Médio" },
      { name: "Power Leveling", price: "R$ 90", time: "1 semana", difficulty: "Médio" },
      { name: "Gold Farming", price: "R$ 50", time: "2 dias", difficulty: "Fácil" },
      { name: "Mount Farming", price: "R$ 65", time: "3-5 dias", difficulty: "Médio" }
    ]
  },
  ffxiv: {
    name: "Final Fantasy XIV",
    category: "MMO",
    image: "⚡",
    description: "Uma jornada inesquecível em um mundo de fantasia",
    longDescription: "Final Fantasy XIV oferece uma experiência rica em história e um sistema de combate dinâmico. Junte-se a outros aventureiros em Eorzea e descubra uma das histórias mais aclamadas dos games.",
    rating: 4.9,
    totalServices: 155,
    totalPros: 75,
    avgPrice: "R$ 100",
    difficulty: "Alto",
    color: "from-purple-800 to-red-700",
    primaryColor: "purple-800",
    accentColor: "red-700",
    specialties: [
      { name: "Main Scenario Quest", price: "R$ 120", time: "1-2 semanas", difficulty: "Médio" },
      { name: "Extreme Trial", price: "R$ 80", time: "1-2 dias", difficulty: "Alto" },
      { name: "Savage Raid", price: "R$ 250", time: "3-5 dias", difficulty: "Muito Alto" },
      { name: "Crafting/Gathering", price: "R$ 60", time: "3 dias", difficulty: "Médio" },
      { name: "Treasure Hunting", price: "R$ 45", time: "1 dia", difficulty: "Fácil" },
      { name: "Mount Farming", price: "R$ 70", time: "2-3 dias", difficulty: "Médio" }
    ]
  },
  haloinfinite: {
    name: "Halo Infinite",
    category: "FPS",
    image: "👽",
    description: "Vista o Manto do Master Chief e salve a humanidade",
    longDescription: "Halo Infinite traz o lendário herói Master Chief de volta com um mundo aberto épico. Experimente uma jogabilidade de tiro fluida e um multijogador competitivo com a essência de Halo.",
    rating: 4.6,
    totalServices: 60,
    totalPros: 20,
    avgPrice: "R$ 65",
    difficulty: "Médio",
    color: "from-green-500 to-blue-500",
    primaryColor: "green-500",
    accentColor: "blue-500",
    specialties: [
      { name: "Ranked Boost", price: "R$ 100", time: "1 semana", difficulty: "Alto" },
      { name: "Campaign Completion", price: "R$ 85", time: "2-3 dias", difficulty: "Médio" },
      { name: "Multiplayer Coaching", price: "R$ 50", time: "2 horas", difficulty: "Médio" },
      { name: "Battle Pass Grind", price: "R$ 40", time: "3 dias", difficulty: "Fácil" },
      { name: "Custom Games", price: "R$ 30", time: "1 dia", difficulty: "Fácil" },
      { name: "Challenge Completion", price: "R$ 25", time: "1 dia", difficulty: "Fácil" }
    ]
  },
  fallguys: {
    name: "Fall Guys",
    category: "Battle Royale",
    image: "🍊",
    description: "Caos, diversão e muita competição",
    longDescription: "Fall Guys é um jogo de plataforma multiplayer onde você e dezenas de outros competidores enfrentam desafios malucos e caóticos em uma série de rodadas eliminatórias até que reste apenas um vencedor.",
    rating: 4.7,
    totalServices: 50,
    totalPros: 18,
    avgPrice: "R$ 35",
    difficulty: "Fácil",
    color: "from-pink-500 to-yellow-300",
    primaryColor: "pink-500",
    accentColor: "yellow-300",
    specialties: [
      { name: "Crown Farming", price: "R$ 40", time: "1-2 dias", difficulty: "Médio" },
      { name: "Race Training", price: "R$ 25", time: "1 hora", difficulty: "Fácil" },
      { name: "Show Buck Grind", price: "R$ 30", time: "1 dia", difficulty: "Fácil" },
      { name: "Challenge Completion", price: "R$ 20", time: "1 dia", difficulty: "Fácil" },
      { name: "Team Game Coaching", price: "R$ 35", time: "2 horas", difficulty: "Médio" },
      { name: "Creative Maps", price: "R$ 15", time: "1 dia", difficulty: "Fácil" }
    ]
  },
  nba2k25: {
    name: "NBA 2K25",
    category: "Esportes",
    image: "🏀",
    description: "Sinta a adrenalina do basquete profissional",
    longDescription: "NBA 2K25 oferece a experiência mais autêntica do basquete com gráficos realistas e jogabilidade aprimorada. Crie seu MyPLAYER, junte-se à vizinhança e construa sua lenda nas quadras virtuais.",
    rating: 4.6,
    totalServices: 80,
    totalPros: 30,
    avgPrice: "R$ 70",
    difficulty: "Médio",
    color: "from-orange-500 to-yellow-500",
    primaryColor: "orange-500",
    accentColor: "yellow-500",
    specialties: [
      { name: "MyCAREER Boost", price: "R$ 60", time: "3-5 dias", difficulty: "Médio" },
      { name: "MyTEAM Card Farming", price: "R$ 50", time: "2-3 dias", difficulty: "Fácil" },
      { name: "Park Rep Grind", price: "R$ 80", time: "1 semana", difficulty: "Médio" },
      { name: "Dribbling Training", price: "R$ 45", time: "2 dias", difficulty: "Fácil" },
      { name: "Jump Shot Guide", price: "R$ 25", time: "1 dia", difficulty: "Fácil" },
      { name: "2K League Training", price: "R$ 90", time: "1 semana", difficulty: "Alto" }
    ]
  },
  maddennfl: {
    name: "Madden NFL 25",
    category: "Esportes",
    image: "🏈",
    description: "Lidere sua equipe à vitória no campo de futebol americano",
    longDescription: "Madden NFL 25 é a simulação definitiva do futebol americano. Controle seu time favorito, domine jogadas complexas e viva a emoção do esporte mais popular da América do Norte.",
    rating: 4.5,
    totalServices: 60,
    totalPros: 25,
    avgPrice: "R$ 65",
    difficulty: "Médio",
    color: "from-blue-700 to-white",
    primaryColor: "blue-700",
    accentColor: "white",
    specialties: [
      { name: "Franchise Mode", price: "R$ 70", time: "3-5 dias", difficulty: "Médio" },
      { name: "Ultimate Team Coins", price: "R$ 40", time: "1-2 dias", difficulty: "Fácil" },
      { name: "Draft Champions", price: "R$ 55", time: "2 dias", difficulty: "Médio" },
      { name: "Offensive Playbook", price: "R$ 35", time: "1 dia", difficulty: "Fácil" },
      { name: "Defensive Strategy", price: "R$ 35", time: "1 dia", difficulty: "Fácil" },
      { name: "Head-to-Head Coaching", price: "R$ 60", time: "1 hora", difficulty: "Médio" }
    ]
  },
  godofwar: {
    name: "God of War Ragnarök",
    category: "Aventura",
    image: "⚔️",
    description: "A jornada de Kratos e Atreus em um épico nórdico",
    longDescription: "God of War Ragnarök continua a jornada de Kratos e Atreus na mitologia nórdica. Com um combate aprimorado e uma narrativa ainda mais profunda, explore um mundo vasto e enfrente a batalha final.",
    rating: 4.9,
    totalServices: 35,
    totalPros: 12,
    avgPrice: "R$ 50",
    difficulty: "Médio",
    color: "from-red-700 to-gray-500",
    primaryColor: "red-700",
    accentColor: "gray-500",
    specialties: [
      { name: "Platinação Completa", price: "R$ 80", time: "5-7 dias", difficulty: "Alto" },
      { name: "Valquírias Secretas", price: "R$ 45", time: "2 dias", difficulty: "Médio" },
      { name: "Encontrar Todos os Colecionáveis", price: "R$ 30", time: "1-2 dias", difficulty: "Fácil" },
      { name: "Modo Novo Jogo+", price: "R$ 55", time: "3 dias", difficulty: "Médio" },
      { name: "Desafios de Muspelheim", price: "R$ 40", time: "1 dia", difficulty: "Médio" },
      { name: "Boss Fight Help", price: "R$ 25", time: "1 hora", difficulty: "Fácil" }
    ]
  },
  spiderman: {
    name: "Marvel's Spider-Man 2",
    category: "Aventura",
    image: "🕷️",
    description: "Balance pela cidade como o Homem-Aranha",
    longDescription: "Marvel's Spider-Man 2 traz uma aventura épica com Peter Parker e Miles Morales. Explore a cidade de Nova York em uma jogabilidade ainda mais fluida, com novos poderes e vilões.",
    rating: 4.9,
    totalServices: 40,
    totalPros: 15,
    avgPrice: "R$ 45",
    difficulty: "Fácil",
    color: "from-red-600 to-blue-600",
    primaryColor: "red-600",
    accentColor: "blue-600",
    specialties: [
      { name: "Platinação Completa", price: "R$ 70", time: "3-5 dias", difficulty: "Médio" },
      { name: "Todos os Colecionáveis", price: "R$ 35", time: "1 dia", difficulty: "Fácil" },
      { name: "Combate Master", price: "R$ 40", time: "2 dias", difficulty: "Médio" },
      { name: "Side Mission Completion", price: "R$ 25", time: "1 dia", difficulty: "Fácil" },
      { name: "Trophy Guide", price: "R$ 20", time: "1 dia", difficulty: "Fácil" },
      { name: "Photo Mode", price: "R$ 15", time: "1 hora", difficulty: "Fácil" }
    ]
  },
  horizon: {
    name: "Horizon Forbidden West",
    category: "Aventura",
    image: "🏹",
    description: "Explore um mundo pós-apocalíptico e enfrente máquinas temíveis",
    longDescription: "Junte-se a Aloy em sua jornada para o Oeste Proibido. Explore uma paisagem vasta e perigosa, enfrente máquinas colossais e descubra os segredos por trás do colapso da civilização.",
    rating: 4.8,
    totalServices: 55,
    totalPros: 20,
    avgPrice: "R$ 60",
    difficulty: "Médio",
    color: "from-green-600 to-red-600",
    primaryColor: "green-600",
    accentColor: "red-600",
    specialties: [
      { name: "Platinação Completa", price: "R$ 90", time: "5-7 dias", difficulty: "Alto" },
      { name: "Todos os Colecionáveis", price: "R$ 50", time: "2-3 dias", difficulty: "Médio" },
      { name: "Caça a Máquinas", price: "R$ 45", time: "2 dias", difficulty: "Médio" },
      { name: "Side Quest Completion", price: "R$ 35", time: "1-2 dias", difficulty: "Fácil" },
      { name: "Legendary Armor", price: "R$ 60", time: "3 dias", difficulty: "Médio" },
      { name: "Arena Challenges", price: "R$ 40", time: "1 dia", difficulty: "Médio" }
    ]
  },
  thelastofus: {
    name: "The Last of Us Part II Remastered",
    category: "Aventura",
    image: "🧟",
    description: "Uma emocionante jornada de sobrevivência em um mundo devastado",
    longDescription: "The Last of Us Part II Remastered continua a história de Ellie em um mundo cruel. Com aprimoramentos gráficos, modo de jogo rogue-like e novas fases, mergulhe em uma narrativa intensa e emocionante.",
    rating: 4.9,
    totalServices: 30,
    totalPros: 10,
    avgPrice: "R$ 55",
    difficulty: "Médio",
    color: "from-gray-800 to-green-800",
    primaryColor: "gray-800",
    accentColor: "green-800",
    specialties: [
      { name: "Platinação Completa", price: "R$ 80", time: "4-6 dias", difficulty: "Alto" },
      { name: "Modo de Dificuldade Extrema", price: "R$ 70", time: "3-5 dias", difficulty: "Muito Alto" },
      { name: "Find All Collectibles", price: "R$ 40", time: "2 dias", difficulty: "Médio" },
      { name: "Factions MP Coaching", price: "R$ 50", time: "2 horas", difficulty: "Médio" },
      { name: "Permadeath Run", price: "R$ 100", time: "1-2 dias", difficulty: "Muito Alto" },
      { name: "Survivor Mode", price: "R$ 60", time: "2 dias", difficulty: "Alto" }
    ]
  },
  tekken8: {
    name: "Tekken 8",
    category: "Luta",
    image: "👊",
    description: "O Rei do Punho de Ferro está de volta",
    longDescription: "Tekken 8 eleva a franquia de luta a um novo patamar com gráficos impressionantes e novas mecânicas de jogo. Domine combos e a psicologia do combate para se tornar o campeão.",
    rating: 4.8,
    totalServices: 45,
    totalPros: 18,
    avgPrice: "R$ 75",
    difficulty: "Muito Alto",
    color: "from-orange-600 to-blue-600",
    primaryColor: "orange-600",
    accentColor: "blue-600",
    specialties: [
      { name: "Ranked Climb (Tekken God)", price: "R$ 150", time: "1-2 semanas", difficulty: "Muito Alto" },
      { name: "Character Mastery", price: "R$ 60", time: "4-6 dias", difficulty: "Médio" },
      { name: "Combo Training", price: "R$ 40", time: "2 dias", difficulty: "Médio" },
      { name: "Arcade Quest", price: "R$ 25", time: "1 dia", difficulty: "Fácil" },
      { name: "Online Coaching", price: "R$ 80", time: "2 horas", difficulty: "Alto" },
      { name: "Customization Unlock", price: "R$ 30", time: "1 dia", difficulty: "Fácil" }
    ]
  },
  streetfighter6: {
    name: "Street Fighter 6",
    category: "Luta",
    image: "🥊",
    description: "Novos lutadores, novas mecânicas e a ascensão de uma nova era",
    longDescription: "Street Fighter 6 traz um sistema de Drive aprimorado e uma lista diversificada de personagens. Explore a World Tour, crie seu avatar e lute para se tornar o melhor.",
    rating: 4.7,
    totalServices: 50,
    totalPros: 20,
    avgPrice: "R$ 70",
    difficulty: "Muito Alto",
    color: "from-yellow-400 to-red-600",
    primaryColor: "yellow-400",
    accentColor: "red-600",
    specialties: [
      { name: "Ranked Climb (Master)", price: "R$ 160", time: "1-2 semanas", difficulty: "Muito Alto" },
      { name: "Character Guide", price: "R$ 55", time: "3 dias", difficulty: "Médio" },
      { name: "Combo Practice", price: "R$ 45", time: "2 dias", difficulty: "Médio" },
      { name: "World Tour Completion", price: "R$ 65", time: "4-5 dias", difficulty: "Médio" },
      { name: "Battle Hub Coaching", price: "R$ 75", time: "2 horas", difficulty: "Alto" },
      { name: "Drive System Mastery", price: "R$ 50", time: "3 dias", difficulty: "Médio" }
    ]
  },
  mortalkombat: {
    name: "Mortal Kombat 1",
    category: "Luta",
    image: "🩸",
    description: "Prepare-se para o combate brutal e fatalidades icônicas",
    longDescription: "Mortal Kombat 1 reinicia a série com uma nova era de lutas sangrentas. Com um sistema de 'Kameos' e um modo história cinematográfico, o jogo oferece uma experiência de luta brutal e visualmente impressionante.",
    rating: 4.8,
    totalServices: 40,
    totalPros: 16,
    avgPrice: "R$ 60",
    difficulty: "Alto",
    color: "from-red-800 to-black",
    primaryColor: "red-800",
    accentColor: "black",
    specialties: [
      { name: "Invasion Mode", price: "R$ 50", time: "3 dias", difficulty: "Médio" },
      { name: "Story Mode Completion", price: "R$ 40", time: "2 dias", difficulty: "Fácil" },
      { name: "Kameo Mastery", price: "R$ 35", time: "1 dia", difficulty: "Fácil" },
      { name: "Ranked Play", price: "R$ 90", time: "1 semana", difficulty: "Alto" },
      { name: "Kombo Guide", price: "R$ 55", time: "3 dias", difficulty: "Médio" },
      { name: "Fatality Guide", price: "R$ 20", time: "1 hora", difficulty: "Fácil" }
    ]
  },
  granturismo: {
    name: "Gran Turismo 7",
    category: "Corrida",
    image: "🏎️",
    description: "O simulador de corrida definitivo para os amantes de carros",
    longDescription: "Gran Turismo 7 oferece uma experiência de corrida autêntica com gráficos fotorrealistas e física precisa. Colecione carros icônicos, domine pistas lendárias e participe de corridas online.",
    rating: 4.7,
    totalServices: 30,
    totalPros: 10,
    avgPrice: "R$ 50",
    difficulty: "Médio",
    color: "from-blue-600 to-gray-500",
    primaryColor: "blue-600",
    accentColor: "gray-500",
    specialties: [
      { name: "Driving School", price: "R$ 40", time: "2 dias", difficulty: "Médio" },
      { name: "License Completion", price: "R$ 30", time: "1 dia", difficulty: "Fácil" },
      { name: "Circuit Experience", price: "R$ 50", time: "3 dias", difficulty: "Médio" },
      { name: "Car Tuning", price: "R$ 35", time: "1 dia", difficulty: "Fácil" },
      { name: "Race Strategy", price: "R$ 60", time: "2 horas", difficulty: "Médio" },
      { name: "Online Rank Up", price: "R$ 80", time: "1 semana", difficulty: "Alto" }
    ]
  },
  f124: {
    name: "F1 24",
    category: "Corrida",
    image: "🏁",
    description: "Sinta a velocidade e a precisão dos carros de Fórmula 1",
    longDescription: "F1 24 oferece a experiência mais realista da Fórmula 1. Pilote os carros mais rápidos do mundo, gerencie sua estratégia de corrida e compita pelo campeonato mundial.",
    rating: 4.6,
    totalServices: 35,
    totalPros: 12,
    avgPrice: "R$ 55",
    difficulty: "Alto",
    color: "from-red-600 to-white",
    primaryColor: "red-600",
    accentColor: "white",
    specialties: [
      { name: "Career Mode", price: "R$ 70", time: "4-6 dias", difficulty: "Médio" },
      { name: "My Team Setup", price: "R$ 50", time: "2 dias", difficulty: "Médio" },
      { name: "Online Racing Coaching", price: "R$ 65", time: "2 horas", difficulty: "Alto" },
      { name: "Time Trial Records", price: "R$ 45", time: "1 dia", difficulty: "Fácil" },
      { name: "Car Setup Guide", price: "R$ 30", time: "1 dia", difficulty: "Fácil" },
      { name: "Championship Season", price: "R$ 80", time: "5 dias", difficulty: "Alto" }
    ]
  },
  nfs: {
    name: "Need for Speed Unbound",
    category: "Corrida",
    image: "🚙",
    description: "Corridas de rua ilegais, personalização e perseguições policiais",
    longDescription: "Need for Speed Unbound é a franquia de arcade de corrida definitiva. Domine as ruas, fuja da polícia em perseguições eletrizantes e customize seus carros com detalhes infinitos.",
    rating: 4.4,
    totalServices: 25,
    totalPros: 8,
    avgPrice: "R$ 40",
    difficulty: "Fácil",
    color: "from-purple-600 to-black",
    primaryColor: "purple-600",
    accentColor: "black",
    specialties: [
      { name: "Story Mode", price: "R$ 50", time: "3 dias", difficulty: "Médio" },
      { name: "Car Collection", price: "R$ 30", time: "1 dia", difficulty: "Fácil" },
      { name: "Online Race Coaching", price: "R$ 45", time: "2 horas", difficulty: "Médio" },
      { name: "Heat Level Farming", price: "R$ 20", time: "1 dia", difficulty: "Fácil" },
      { name: "Race Series", price: "R$ 35", time: "2 dias", difficulty: "Médio" },
      { name: "Drift Guide", price: "R$ 25", time: "1 hora", difficulty: "Fácil" }
    ]
  },
  diablo4: {
    name: "Diablo 4",
    category: "RPG",
    image: "😈",
    description: "Retorne a Sanctuary e enfrente as forças demoníacas",
    longDescription: "Diablo 4 é um RPG de ação onde você mergulha em um mundo sombrio. Escolha sua classe, aniquile hordas de demônios, colete itens lendários e explore um mundo aberto vasto e perigoso.",
    rating: 4.8,
    totalServices: 110,
    totalPros: 50,
    avgPrice: "R$ 95",
    difficulty: "Alto",
    color: "from-red-800 to-black",
    primaryColor: "red-800",
    accentColor: "black",
    specialties: [
      { name: "Leveling", price: "R$ 100", time: "2-3 dias", difficulty: "Médio" },
      { name: "Nightmare Dungeon", price: "R$ 80", time: "1-2 dias", difficulty: "Alto" },
      { name: "Uber Lilith", price: "R$ 150", time: "1 dia", difficulty: "Muito Alto" },
      { name: "Legendary Farming", price: "R$ 60", time: "3 dias", difficulty: "Médio" },
      { name: "PvP Fields of Hatred", price: "R$ 70", time: "1 semana", difficulty: "Médio" },
      { name: "Build Optimization", price: "R$ 90", time: "3 dias", difficulty: "Alto" }
    ]
  },
  pathofexile: {
    name: "Path of Exile",
    category: "RPG",
    image: "💎",
    description: "Um RPG de ação com profundidade e complexidade infinitas",
    longDescription: "Path of Exile é um RPG de ação gratuito com um sistema de personalização de personagem incomparável. Explore o vasto e sombrio mundo de Wraeclast, colete itens raros e crie a sua build definitiva.",
    rating: 4.6,
    totalServices: 95,
    totalPros: 40,
    avgPrice: "R$ 85",
    difficulty: "Muito Alto",
    color: "from-brown-700 to-gray-700",
    primaryColor: "brown-700",
    accentColor: "gray-700",
    specialties: [
      { name: "Leveling Boost", price: "R$ 120", time: "2-3 dias", difficulty: "Alto" },
      { name: "Endgame Mapping", price: "R$ 100", time: "1 semana", difficulty: "Muito Alto" },
      { name: "Boss Kill Service", price: "R$ 150", time: "1-2 dias", difficulty: "Muito Alto" },
      { name: "Build Guide", price: "R$ 70", time: "2 dias", difficulty: "Médio" },
      { name: "Currency Farming", price: "R$ 60", time: "3 dias", difficulty: "Médio" },
      { name: "Trial Mastery", price: "R$ 50", time: "1 dia", difficulty: "Fácil" }
    ]
  },
  eldenring: {
    name: "Elden Ring",
    category: "RPG",
    image: "🗿",
    description: "O RPG de ação definitivo em um vasto mundo aberto",
    longDescription: "Elden Ring é a colaboração de FromSoftware com George R. R. Martin. Explore as Terras Intermédias, enfrente inimigos desafiadores e desvende o mistério do Anel Prístino.",
    rating: 4.9,
    totalServices: 70,
    totalPros: 30,
    avgPrice: "R$ 80",
    difficulty: "Muito Alto",
    color: "from-yellow-700 to-brown-700",
    primaryColor: "yellow-700",
    accentColor: "brown-700",
    specialties: [
      { name: "Boss Kill Service", price: "R$ 90", time: "1-2 dias", difficulty: "Alto" },
      { name: "Full Game Walkthrough", price: "R$ 180", time: "1-2 semanas", difficulty: "Muito Alto" },
      { name: "Item Farming", price: "R$ 50", time: "3 dias", difficulty: "Médio" },
      { name: "Build Guide", price: "R$ 65", time: "2 dias", difficulty: "Médio" },
      { name: "Dungeon Exploration", price: "R$ 75", time: "4 dias", difficulty: "Médio" },
      { name: "Rune Farming", price: "R$ 40", time: "1 dia", difficulty: "Fácil" }
    ]
  },
  darksouls: {
    name: "Dark Souls 3",
    category: "RPG",
    image: "🔥",
    description: "Desafios brutais e uma narrativa profunda em um mundo sombrio",
    longDescription: "A franquia Dark Souls é a epítome do RPG de ação desafiador. Domine o combate, explore masmorras perigosas e enfrente chefes memoráveis para sobreviver em um mundo em ruínas.",
    rating: 4.7,
    totalServices: 65,
    totalPros: 25,
    avgPrice: "R$ 75",
    difficulty: "Muito Alto",
    color: "from-gray-700 to-black",
    primaryColor: "gray-700",
    accentColor: "black",
    specialties: [
      { name: "Boss Kill Service", price: "R$ 80", time: "1-2 dias", difficulty: "Alto" },
      { name: "Full Game Walkthrough", price: "R$ 150", time: "1-2 semanas", difficulty: "Muito Alto" },
      { name: "Covenant Item Farming", price: "R$ 60", time: "3-5 dias", difficulty: "Médio" },
      { name: "PvP Training", price: "R$ 70", time: "2 horas", difficulty: "Alto" },
      { name: "Build Creation", price: "R$ 55", time: "2 dias", difficulty: "Médio" },
      { name: "Souls Farming", price: "R$ 40", time: "1 dia", difficulty: "Fácil" }
    ]
  },
  cyberpunk: {
    name: "Cyberpunk 2077",
    category: "RPG de Ação",
    image: "🤖",
    description: "Torne-se um mercenário aprimorado em Night City",
    longDescription: "Cyberpunk 2077 é um RPG de ação em mundo aberto. Explore a megalópole futurista de Night City, customize seu personagem com aprimoramentos cibernéticos e viva uma história de alto risco e muita adrenalina.",
    rating: 4.6,
    totalServices: 80,
    totalPros: 35,
    avgPrice: "R$ 65",
    difficulty: "Médio",
    color: "from-yellow-400 to-pink-500",
    primaryColor: "yellow-400",
    accentColor: "pink-500",
    specialties: [
      { name: "Story Completion", price: "R$ 90", time: "4-6 dias", difficulty: "Médio" },
      { name: "Side Quest Completion", price: "R$ 50", time: "3 dias", difficulty: "Fácil" },
      { name: "Build Guide", price: "R$ 40", time: "2 dias", difficulty: "Médio" },
      { name: "Item & Cyberware Farming", price: "R$ 60", time: "3 dias", difficulty: "Médio" },
      { name: "Edgerunner Training", price: "R$ 70", time: "2 dias", difficulty: "Alto" },
      { name: "Gig Completion", price: "R$ 35", time: "1 dia", difficulty: "Fácil" }
    ]
  },
  thewitcher3: {
    name: "The Witcher 3: Wild Hunt",
    category: "RPG",
    image: "🐺",
    description: "Cace monstros e desvende mistérios como Geralt de Rívia",
    longDescription: "The Witcher 3 é um RPG em mundo aberto com uma história madura e complexa. Como o bruxo Geralt de Rívia, explore um continente vasto, cace criaturas lendárias e tome decisões que moldam o destino do mundo.",
    rating: 4.9,
    totalServices: 100,
    totalPros: 45,
    avgPrice: "R$ 70",
    difficulty: "Alto",
    color: "from-gray-700 to-yellow-600",
    primaryColor: "gray-700",
    accentColor: "yellow-600",
    specialties: [
      { name: "Platinação Completa", price: "R$ 120", time: "1-2 semanas", difficulty: "Muito Alto" },
      { name: "Main Story Completion", price: "R$ 80", time: "5-7 dias", difficulty: "Médio" },
      { name: "Monster Contract", price: "R$ 50", time: "2 dias", difficulty: "Médio" },
      { name: "Gwent Coaching", price: "R$ 35", time: "1 dia", difficulty: "Fácil" },
      { name: "All Side Quests", price: "R$ 60", time: "3-5 dias", difficulty: "Médio" },
      { name: "Build Guide", price: "R$ 45", time: "2 dias", difficulty: "Fácil" }
    ]
  },
  reddead: {
    name: "Red Dead Redemption 2",
    category: "Aventura",
    image: "🤠",
    description: "Uma saga épica no Velho Oeste americano",
    longDescription: "Red Dead Redemption 2 é um épico de mundo aberto que conta a história de Arthur Morgan. Experimente uma narrativa profunda e realista em um dos mundos mais detalhados e imersivos já criados nos games.",
    rating: 4.9,
    totalServices: 75,
    totalPros: 30,
    avgPrice: "R$ 65",
    difficulty: "Médio",
    color: "from-red-800 to-brown-700",
    primaryColor: "red-800",
    accentColor: "brown-700",
    specialties: [
      { name: "Story Completion", price: "R$ 90", time: "4-6 dias", difficulty: "Médio" },
      { name: "Collectibles Guide", price: "R$ 50", time: "3 dias", difficulty: "Médio" },
      { name: "Trophy Guide", price: "R$ 75", time: "5-7 dias", difficulty: "Alto" },
      { name: "Horse Breaking", price: "R$ 30", time: "1 dia", difficulty: "Fácil" },
      { name: "Hunting Guide", price: "R$ 40", time: "2 dias", difficulty: "Fácil" },
      { name: "Online Rank Up", price: "R$ 60", time: "3 dias", difficulty: "Médio" }
    ]
  },
  assassinscreed: {
    name: "Assassin's Creed Shadows",
    category: "Aventura",
    image: "🗡️",
    description: "Explore a história e os segredos da Irmandade",
    longDescription: "Assassin's Creed Shadows é o novo capítulo da franquia, levando os jogadores ao Japão feudal. Viva uma história com novos protagonistas e uma jogabilidade focada em furtividade e combate de samurais.",
    rating: 4.7,
    totalServices: 120,
    totalPros: 50,
    avgPrice: "R$ 60",
    difficulty: "Médio",
    color: "from-gray-600 to-black",
    primaryColor: "gray-600",
    accentColor: "black",
    specialties: [
      { name: "Story Completion", price: "R$ 80", time: "4-6 dias", difficulty: "Médio" },
      { name: "All Collectibles", price: "R$ 55", time: "3-5 dias", difficulty: "Médio" },
      { name: "Map Exploration", price: "R$ 40", time: "2 dias", difficulty: "Fácil" },
      { name: "Stealth Training", price: "R$ 50", time: "2 horas", difficulty: "Médio" },
      { name: "Combat Mastery", price: "R$ 45", time: "2 dias", difficulty: "Médio" },
      { name: "Historical Facts", price: "R$ 25", time: "1 hora", difficulty: "Fácil" }
    ]
  },
  residentevil: {
    name: "Resident Evil 4 Remake",
    category: "Terror",
    image: "🧟‍♂️",
    description: "Sobreviva a um pesadelo infestado de zumbis",
    longDescription: "Resident Evil 4 Remake é uma reimaginação do clássico que redefiniu o gênero de terror de sobrevivência. Com gráficos e jogabilidade modernos, enfrente horrores em uma vila rural espanhola.",
    rating: 4.9,
    totalServices: 25,
    totalPros: 10,
    avgPrice: "R$ 65",
    difficulty: "Médio",
    color: "from-green-700 to-black",
    primaryColor: "green-700",
    accentColor: "black",
    specialties: [
      { name: "Platinação Completa", price: "R$ 80", time: "3-5 dias", difficulty: "Alto" },
      { name: "S-Rank Professional", price: "R$ 90", time: "2-3 dias", difficulty: "Muito Alto" },
      { name: "Treasure Hunting", price: "R$ 40", time: "1 dia", difficulty: "Fácil" },
      { name: "Mercenaries Mode", price: "R$ 50", time: "2 dias", difficulty: "Médio" },
      { name: "Story Completion", price: "R$ 60", time: "3 dias", difficulty: "Médio" },
      { name: "All Achievements", price: "R$ 75", time: "4 dias", difficulty: "Médio" }
    ]
  },
  silenthill: {
    name: "Silent Hill 2 Remake",
    category: "Terror Psicológico",
    image: "🌫️",
    description: "Entre na névoa e enfrente seus medos mais profundos",
    longDescription: "Silent Hill 2 Remake é a recriação de uma das maiores obras do terror psicológico. Siga James Sunderland em sua busca por sua esposa em uma cidade assombrada por seus próprios demônios internos.",
    rating: 4.8,
    totalServices: 18,
    totalPros: 7,
    avgPrice: "R$ 70",
    difficulty: "Médio",
    color: "from-gray-600 to-red-800",
    primaryColor: "gray-600",
    accentColor: "red-800",
    specialties: [
      { name: "Story Completion", price: "R$ 75", time: "2-3 dias", difficulty: "Médio" },
      { name: "All Endings", price: "R$ 90", time: "5-7 dias", difficulty: "Alto" },
      { name: "Puzzle Solutions", price: "R$ 40", time: "1 dia", difficulty: "Fácil" },
      { name: "Item Collectibles", price: "R$ 35", time: "2 dias", difficulty: "Fácil" },
      { name: "Combat Guide", price: "R$ 50", time: "1 dia", difficulty: "Médio" },
      { name: "Lore Deep Dive", price: "R$ 60", time: "3 dias", difficulty: "Médio" }
    ]
  },
  dbd: {
    name: "Dead by Daylight",
    category: "Terror",
    image: "💀",
    description: "Um jogo de esconde-esconde sangrento",
    longDescription: "Dead by Daylight é um jogo de terror multiplayer assimétrico. Um assassino implacável caça quatro sobreviventes em uma arena assustadora, enquanto eles tentam escapar e sobreviver.",
    rating: 4.5,
    totalServices: 55,
    totalPros: 25,
    avgPrice: "R$ 45",
    difficulty: "Médio",
    color: "from-red-900 to-black",
    primaryColor: "red-900",
    accentColor: "black",
    specialties: [
      { name: "Ranked Boost (Killer/Survivor)", price: "R$ 80", time: "1 semana", difficulty: "Alto" },
      { name: "Perk Farming", price: "R$ 50", time: "3-5 dias", difficulty: "Médio" },
      { name: "Killer Mastery", price: "R$ 65", time: "4 dias", difficulty: "Médio" },
      { name: "Survivor Strategy", price: "R$ 60", time: "3 dias", difficulty: "Médio" },
      { name: "Bloodpoint Grind", price: "R$ 40", time: "2 dias", difficulty: "Fácil" },
      { name: "Custom Game Coaching", price: "R$ 55", time: "2 horas", difficulty: "Médio" }
    ]
  },
  phasmophobia: {
    name: "Phasmophobia",
    category: "Terror",
    image: "👻",
    description: "Cace fantasmas em equipes e capture evidências paranormais",
    longDescription: "Phasmophobia é um jogo de terror psicológico cooperativo. Você e sua equipe de investigadores paranormais devem coletar evidências de fantasmas em locais assombrados, mas cuidado para não se tornar a próxima vítima.",
    rating: 4.6,
    totalServices: 30,
    totalPros: 15,
    avgPrice: "R$ 40",
    difficulty: "Médio",
    color: "from-blue-600 to-gray-400",
    primaryColor: "blue-600",
    accentColor: "gray-400",
    specialties: [
      { name: "Professional Hunts", price: "R$ 50", time: "1-2 dias", difficulty: "Médio" },
      { name: "Ghost Identification", price: "R$ 35", time: "1 hora", difficulty: "Fácil" },
      { name: "All Evidence", price: "R$ 45", time: "1 dia", difficulty: "Médio" },
      { name: "Insanity Mode", price: "R$ 60", time: "2 dias", difficulty: "Alto" },
      { name: "Map Guide", price: "R$ 25", time: "1 dia", difficulty: "Fácil" },
      { name: "Solo Run", price: "R$ 70", time: "3 dias", difficulty: "Alto" }
    ]
  },
  baldursgate3: {
    name: "Baldur's Gate 3",
    category: "RPG",
    image: "🎲",
    description: "Crie sua lenda em um vasto mundo de fantasia",
    longDescription: "Baldur's Gate 3 é um RPG de fantasia com combate tático baseado em turnos. Explore um mundo vasto, crie seu personagem, recrute companheiros e descubra uma história rica em escolhas e consequências.",
    rating: 4.9,
    totalServices: 80,
    totalPros: 40,
    avgPrice: "R$ 95",
    difficulty: "Alto",
    color: "from-purple-800 to-gold-500",
    primaryColor: "purple-800",
    accentColor: "gold-500",
    specialties: [
      { name: "Full Campaign Completion", price: "R$ 180", time: "2-3 semanas", difficulty: "Muito Alto" },
      { name: "Class/Build Guide", price: "R$ 70", time: "3 dias", difficulty: "Médio" },
      { name: "All Side Quests", price: "R$ 90", time: "1 semana", difficulty: "Alto" },
      { name: "Honour Mode", price: "R$ 200", time: "2-3 semanas", difficulty: "Muito Alto" },
      { name: "Companion Quests", price: "R$ 50", time: "4 dias", difficulty: "Médio" },
      { name: "Item Farming", price: "R$ 60", time: "3 dias", difficulty: "Médio" }
    ]
  },
  starfield: {
    name: "Starfield",
    category: "RPG",
    image: "🚀",
    description: "Uma aventura épica pelos confins do espaço",
    longDescription: "Starfield é o primeiro novo universo da Bethesda Game Studios em 25 anos. Crie seu próprio personagem e explore o cosmos em uma jornada para responder à maior pergunta da humanidade: 'O que há lá fora?'",
    rating: 4.5,
    totalServices: 60,
    totalPros: 25,
    avgPrice: "R$ 80",
    difficulty: "Médio",
    color: "from-blue-800 to-gray-500",
    primaryColor: "blue-800",
    accentColor: "gray-500",
    specialties: [
      { name: "Main Story Completion", price: "R$ 100", time: "1 semana", difficulty: "Médio" },
      { name: "Ship Building", price: "R$ 50", time: "2 dias", difficulty: "Fácil" },
      { name: "Exploration Guide", price: "R$ 75", time: "5 dias", difficulty: "Médio" },
      { name: "Resource Farming", price: "R$ 40", time: "1 dia", difficulty: "Fácil" },
      { name: "Faction Questlines", price: "R$ 60", time: "3 dias", difficulty: "Médio" },
      { name: "Outpost Building", price: "R$ 55", time: "2 dias", difficulty: "Médio" }
    ]
  },
  palworld: {
    name: "Palworld",
    category: "Survival",
    image: "🐾",
    description: "Crie, lute e colete monstros em um mundo aberto",
    longDescription: "Palworld é um jogo de sobrevivência de mundo aberto com elementos de coleta de monstros. Sobreviva em um mundo perigoso, crie armas, construa bases e use seus 'Pals' para lutar e realizar tarefas.",
    rating: 4.7,
    totalServices: 40,
    totalPros: 15,
    avgPrice: "R$ 50",
    difficulty: "Médio",
    color: "from-blue-300 to-green-500",
    primaryColor: "blue-300",
    accentColor: "green-500",
    specialties: [
      { name: "Base Building", price: "R$ 60", time: "2-3 dias", difficulty: "Médio" },
      { name: "Pal Farming", price: "R$ 45", time: "1 dia", difficulty: "Fácil" },
      { name: "Boss Kill Service", price: "R$ 70", time: "2 dias", difficulty: "Médio" },
      { name: "Item & Resource Farming", price: "R$ 35", time: "1 dia", difficulty: "Fácil" },
      { name: "Dungeon Guide", price: "R$ 40", time: "1 dia", difficulty: "Fácil" },
      { name: "Survival Training", price: "R$ 55", time: "2 dias", difficulty: "Médio" }
    ]
  },
  helldivers2: {
    name: "Helldivers 2",
    category: "Coop",
    image: "👾",
    description: "Lute pela Liberdade e Democracia em uma guerra galáctica",
    longDescription: "Helldivers 2 é um jogo de tiro cooperativo em terceira pessoa. Junte-se a outros Helldivers e lute para espalhar a 'Democracia Gerenciada' pela galáxia, enfrentando hordas de alienígenas.",
    rating: 4.8,
    totalServices: 50,
    totalPros: 20,
    avgPrice: "R$ 55",
    difficulty: "Alto",
    color: "from-gold-500 to-blue-700",
    primaryColor: "gold-500",
    accentColor: "blue-700",
    specialties: [
      { name: "Helldive Mission", price: "R$ 70", time: "1 dia", difficulty: "Muito Alto" },
      { name: "Stratagem Unlocks", price: "R$ 60", time: "2 dias", difficulty: "Médio" },
      { name: "Sample Farming", price: "R$ 40", time: "1 dia", difficulty: "Fácil" },
      { name: "Team Strategy", price: "R$ 50", time: "2 horas", difficulty: "Médio" },
      { name: "Weapon & Armor", price: "R$ 45", time: "2 dias", difficulty: "Médio" },
      { name: "Major Order Completion", price: "R$ 80", time: "3 dias", difficulty: "Alto" }
    ]
  },
  seaofthieves: {
    name: "Sea of Thieves",
    category: "Aventura",
    image: "🏴‍☠️",
    description: "Viva a vida de um pirata no mar alto",
    longDescription: "Sea of Thieves é uma aventura de piratas em mundo compartilhado. Navegue com sua tripulação, procure tesouros, enfrente monstros marinhos e duele com outras tripulações em batalhas navais.",
    rating: 4.6,
    totalServices: 35,
    totalPros: 10,
    avgPrice: "R$ 45",
    difficulty: "Médio",
    color: "from-blue-700 to-green-500",
    primaryColor: "blue-700",
    accentColor: "green-500",
    specialties: [
      { name: "Legendary Thief", price: "R$ 80", time: "1 semana", difficulty: "Alto" },
      { name: "Treasure Hunting", price: "R$ 40", time: "2 dias", difficulty: "Fácil" },
      { name: "Story Quest (Tall Tales)", price: "R$ 55", time: "3 dias", difficulty: "Médio" },
      { name: "Athena's Fortune", price: "R$ 100", time: "1 semana", difficulty: "Muito Alto" },
      { name: "Emissary Flag Farming", price: "R$ 30", time: "1 dia", difficulty: "Fácil" },
      { name: "PvP Naval Combat", price: "R$ 65", time: "2 horas", difficulty: "Médio" }
    ]
  },
  nomanssky: {
    name: "No Man's Sky",
    category: "Exploração",
    image: "🌍",
    description: "Explore um universo infinito, um planeta de cada vez",
    longDescription: "No Man's Sky é um jogo de exploração e sobrevivência de ficção científica. Viaje por um universo proceduralmente gerado, descubra novos planetas, colete recursos e desvende mistérios cósmicos.",
    rating: 4.7,
    totalServices: 45,
    totalPros: 15,
    avgPrice: "R$ 50",
    difficulty: "Médio",
    color: "from-pink-500 to-blue-400",
    primaryColor: "pink-500",
    accentColor: "blue-400",
    specialties: [
      { name: "Base Building", price: "R$ 60", time: "3-5 dias", difficulty: "Médio" },
      { name: "Freighter & Frigate", price: "R$ 70", time: "2 dias", difficulty: "Médio" },
      { name: "Quests & Story", price: "R$ 55", time: "3 dias", difficulty: "Médio" },
      { name: "Resource Farming", price: "R$ 40", time: "1 dia", difficulty: "Fácil" },
      { name: "Exotic Ship Hunting", price: "R$ 50", time: "2 dias", difficulty: "Médio" },
      { name: "Nexus Missions", price: "R$ 30", time: "1 dia", difficulty: "Fácil" }
    ]
  }
};

export default function GameDetail() {
  const { gameId } = useParams();
  
  // Função para converter nomes de jogos para IDs válidos
  const getGameData = (id: string) => {
    // Primeiro tenta encontrar o jogo pelo ID direto
    if (allGamesData[id as keyof typeof allGamesData]) {
      return allGamesData[id as keyof typeof allGamesData];
    }
    
    // Busca por nome convertido
    const gameEntries = Object.entries(allGamesData);
    const found = gameEntries.find(([key, game]) => {
      const convertedName = game.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      return convertedName === id || key === id;
    });
    
    return found ? found[1] : null;
  };

  const game = getGameData(gameId || '');

  if (!game) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md text-center">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Jogo não encontrado</h2>
            <p className="text-muted-foreground mb-4">Este jogo ainda não está disponível em nossa plataforma.</p>
            <Button asChild>
              <Link to="/games">Voltar aos Jogos</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const topPros = [
    {
      name: "Carlos Silva",
      gamertag: `${game.name.replace(/\s+/g, '')}Pro_BR`,
      rating: 4.9,
      jobs: 127,
      specialties: game.specialties.slice(0, 2).map(s => s.name.split(' ')[0]),
      price: `A partir de ${game.specialties[0].price}`,
      verified: true
    },
    {
      name: "Ana Santos", 
      gamertag: `${game.category.replace(/\s+/g, '')}Queen`,
      rating: 5.0,
      jobs: 89,
      specialties: game.specialties.slice(1, 3).map(s => s.name.split(' ')[0]),
      price: `A partir de ${game.specialties[1].price}`,
      verified: true
    },
    {
      name: "Pedro Costa",
      gamertag: "ProGamer_YT",
      rating: 4.8,
      jobs: 203,
      specialties: game.specialties.slice(2, 4).map(s => s.name.split(' ')[0]),
      price: `A partir de ${game.specialties[2].price}`,
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <motion.div 
          className="flex items-center gap-2 mb-8 text-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/games" className="text-muted-foreground hover:text-foreground transition-colors">
            Jogos
          </Link>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">{game.name}</span>
        </motion.div>

        {/* Hero Section - Cores dinâmicas baseadas no jogo */}
        <ScrollReveal animation="fadeInUp">
          <div className="mb-16">
            <div className={`bg-gradient-to-r ${game.color} p-8 rounded-2xl text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-6xl">{game.image}</span>
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold">{game.name}</h1>
                      <Badge className="bg-white/20 text-white mt-2">{game.category}</Badge>
                    </div>
                  </div>
                  <p className="text-xl text-white/90 mb-6">
                    {game.longDescription}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <AnimatedButton 
                      size="lg"
                      className="bg-wakanda-accent hover:bg-wakanda-accent/90 text-wakanda-dark font-bold"
                      animationType="pulse"
                    >
                      Ver Todos os Serviços
                    </AnimatedButton>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-foreground"
                      asChild
                    >
                      <Link to="/games">
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Voltar aos Jogos
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="pt-4 text-center">
                      <Star className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                      <div className="text-2xl font-bold">{game.rating}★</div>
                      <div className="text-white/80 text-sm">Avaliação Média</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="pt-4 text-center">
                      <Users className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{game.totalPros}</div>
                      <div className="text-white/80 text-sm">Profissionais</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="pt-4 text-center">
                      <Trophy className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{game.totalServices}</div>
                      <div className="text-white/80 text-sm">Serviços</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="pt-4 text-center">
                      <DollarSign className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{game.avgPrice}</div>
                      <div className="text-white/80 text-sm">Preço Médio</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <Tabs defaultValue="services" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="services">Serviços Populares</TabsTrigger>
            <TabsTrigger value="pros">Top Profissionais</TabsTrigger>
            <TabsTrigger value="info">Informações</TabsTrigger>
          </TabsList>

          <TabsContent value="services">
            <ScrollReveal animation="fadeInUp">
              <h2 className="text-3xl font-bold mb-8">Serviços Mais Procurados - {game.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {game.specialties.map((service, index) => (
                  <ScrollReveal key={index} animation="scaleIn" delay={index * 0.1}>
                    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-wakanda-purple/50">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-wakanda-purple transition-colors">
                              {service.name}
                            </h3>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center gap-2">
                                <DollarSign className="h-4 w-4 text-green-500" />
                                <span className="font-semibold text-green-600">{service.price}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-blue-500" />
                                <span>{service.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Target className="h-4 w-4 text-orange-500" />
                                <Badge variant="outline" className="text-xs">
                                  {service.difficulty}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AnimatedButton 
                          className="w-full bg-gradient-to-r from-wakanda-purple to-wakanda-deep-purple"
                          animationType="glow"
                        >
                          Ver Prestadores
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </AnimatedButton>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </TabsContent>

          <TabsContent value="pros">
            <ScrollReveal animation="fadeInUp">
              <h2 className="text-3xl font-bold mb-8">Profissionais Destacados - {game.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topPros.map((pro, index) => (
                  <ScrollReveal key={index} animation="fadeInLeft" delay={index * 0.2}>
                    <Card className="group hover:shadow-xl transition-all duration-300">
                      <CardContent className="pt-6">
                        <div className="text-center mb-4">
                          <div className="bg-gradient-to-r from-wakanda-purple to-wakanda-deep-purple p-3 rounded-full w-fit mx-auto mb-3">
                            <Users className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex justify-center gap-2 mb-2">
                            <Badge className="bg-wakanda-accent text-wakanda-dark">
                              Top Rated
                            </Badge>
                            {pro.verified && (
                              <Badge className="bg-green-500 text-white">
                                <Shield className="h-3 w-3 mr-1" />
                                Verificado
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-bold text-lg">{pro.name}</h3>
                          <p className="text-wakanda-purple font-medium">@{pro.gamertag}</p>
                        </div>
                        
                        <div className="bg-muted rounded-lg p-4 mb-4">
                          <div className="grid grid-cols-2 gap-4 text-center text-sm">
                            <div>
                              <div className="flex items-center justify-center gap-1 mb-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-bold">{pro.rating}</span>
                              </div>
                              <div className="text-xs text-muted-foreground">Avaliação</div>
                            </div>
                            <div>
                              <div className="font-bold">{pro.jobs}</div>
                              <div className="text-xs text-muted-foreground">Trabalhos</div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-medium mb-2">Especialidades:</p>
                          <div className="flex flex-wrap gap-1">
                            {pro.specialties.map((specialty, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="text-center mb-4">
                          <p className="text-green-600 font-semibold">{pro.price}</p>
                        </div>

                        <AnimatedButton 
                          className="w-full bg-gradient-to-r from-wakanda-purple to-wakanda-deep-purple"
                          animationType="bounce"
                        >
                          Ver Perfil
                        </AnimatedButton>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </TabsContent>

          <TabsContent value="info">
            <ScrollReveal animation="fadeInUp">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Sobre {game.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{game.longDescription}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Categoria:</span>
                        <Badge variant="outline">{game.category}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Dificuldade:</span>
                        <Badge variant="outline">{game.difficulty}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Preço médio:</span>
                        <span className="font-semibold text-green-600">{game.avgPrice}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Estatísticas do {game.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-green-500" />
                          <span>Serviços Completados</span>
                        </div>
                        <span className="font-bold text-2xl">1,240</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-blue-500" />
                          <span>Profissionais Ativos</span>
                        </div>
                        <span className="font-bold text-2xl">{game.totalPros}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 text-yellow-500" />
                          <span>Avaliação Média</span>
                        </div>
                        <span className="font-bold text-2xl">{game.rating}★</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-5 w-5 text-purple-500" />
                          <span>Taxa de Sucesso</span>
                        </div>
                        <span className="font-bold text-2xl">98%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </TabsContent>
        </Tabs>

        {/* CTA Section com cores dinâmicas */}
        <ScrollReveal animation="fadeInUp">
          <div className={`bg-gradient-to-r ${game.color} rounded-2xl p-8 text-white text-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Pronto para Dominar {game.name}?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Conecte-se com os melhores profissionais e leve seu jogo para o próximo nível.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton 
                  size="lg"
                  className="bg-wakanda-accent hover:bg-wakanda-accent/90 text-wakanda-dark px-8 py-6 text-lg font-bold"
                  animationType="pulse"
                >
                  Encontrar Profissionais
                </AnimatedButton>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-wakanda-dark px-8 py-6 text-lg"
                  asChild
                >
                  <Link to="/games">Ver Outros Jogos</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
