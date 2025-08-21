import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/AnimatedButton";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Search, Menu, Gamepad2, Trophy, Target, Users, Zap, TrendingUp, BookOpen, Shield, DollarSign } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const servicesDropdown = [
    {
      title: "Platinação de Jogos",
      description: "Conquiste todos os troféus dos seus jogos favoritos",
      icon: Trophy,
      href: "/services?category=platinacao",
      color: "text-yellow-600"
    },
    {
      title: "Rank Competitivo",
      description: "Suba de rank em jogos como EA SPORTS™ FC 26, Valorant, CS2",
      icon: Target,
      href: "/services?category=rank",
      color: "text-red-600"
    },
    {
      title: "Coaching",
      description: "Aprenda com os melhores players profissionais",
      icon: Users,
      href: "/services?category=coaching",
      color: "text-blue-600"
    },
    {
      title: "Farming & Grinding",
      description: "Level up, itens raros e progressão",
      icon: Zap,
      href: "/services?category=farming",
      color: "text-purple-600"
    }
  ];

  const gamesDropdown = [
    { name: "EA SPORTS™ FC 26", emoji: "⚽", href: "/games/eafc26" },
    { name: "Valorant", emoji: "🎯", href: "/games/valorant" },
    { name: "CS2", emoji: "🔫", href: "/games/cs2" },
    { name: "Fortnite", emoji: "🏗️", href: "/games/fortnite" },
    { name: "League of Legends", emoji: "⚔️", href: "/games/lol" },
    { name: "Apex Legends", emoji: "🏆", href: "/games/apex" }
  ];

  const howItWorksDropdown = [
    {
      title: "Para Clientes",
      description: "Como contratar serviços de gaming",
      icon: Users,
      href: "/how-it-works#clients",
      color: "text-green-600"
    },
    {
      title: "Para Prestadores",
      description: "Como oferecer seus serviços",
      icon: TrendingUp,
      href: "/how-it-works#providers",
      color: "text-blue-600"
    },
    {
      title: "Segurança",
      description: "Como garantimos sua prote��ão",
      icon: Shield,
      href: "/how-it-works#security",
      color: "text-purple-600"
    },
    {
      title: "Pagamentos",
      description: "Sistema de pagamento seguro",
      icon: DollarSign,
      href: "/how-it-works#payments",
      color: "text-orange-600"
    }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              className="bg-gradient-to-r from-wakanda-purple to-wakanda-deep-purple p-2 rounded-lg"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Gamepad2 className="h-6 w-6 text-white" />
            </motion.div>
            <motion.span 
              className="font-bold text-xl bg-gradient-to-r from-wakanda-purple to-wakanda-deep-purple bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              getGamer
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-2">
              {/* Serviços Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent text-foreground hover:text-wakanda-purple transition-colors">
                  Serviços
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
                    {servicesDropdown.map((service, index) => (
                      <NavigationMenuLink key={index} asChild>
                        <Link
                          to={service.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <service.icon className={`h-4 w-4 ${service.color}`} />
                            <div className="text-sm font-medium leading-none group-hover:text-white transition-colors">
                              {service.title}
                            </div>
                          </div>
                          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                            {service.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Categorias */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/categories"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:text-wakanda-purple focus:bg-transparent focus:text-wakanda-purple focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Categorias
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Jogos Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent text-foreground hover:text-wakanda-purple transition-colors">
                  Jogos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-1 p-4 w-[400px] grid-cols-2">
                    <div className="col-span-2 mb-2">
                      <h4 className="text-sm font-medium text-wakanda-purple mb-2">Jogos Populares</h4>
                    </div>
                    {gamesDropdown.map((game, index) => (
                      <NavigationMenuLink key={index} asChild>
                        <Link
                          to={game.href}
                          className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{game.emoji}</span>
                            <div className="text-sm font-medium group-hover:text-white transition-colors">
                              {game.name}
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                    <div className="col-span-2 mt-2 pt-2 border-t">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/games"
                          className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-center group"
                        >
                          <div className="text-sm font-medium text-wakanda-purple group-hover:text-white">
                            Ver Todos os Jogos →
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Como Funciona Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent text-foreground hover:text-wakanda-purple transition-colors">
                  Como Funciona
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
                    {howItWorksDropdown.map((item, index) => (
                      <NavigationMenuLink key={index} asChild>
                        <Link
                          to={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <item.icon className={`h-4 w-4 ${item.color}`} />
                            <div className="text-sm font-medium leading-none group-hover:text-white transition-colors">
                              {item.title}
                            </div>
                          </div>
                          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Seja um Pro */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/become-pro"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:text-wakanda-purple focus:bg-transparent focus:text-wakanda-purple focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Seja um Pro
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Bar */}
          <motion.div
            className="hidden lg:flex flex-1 max-w-lg mx-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-full group">
              {/* Search Icon */}
              <motion.div
                className="absolute inset-y-0 left-3 z-10 flex items-center"
                animate={{
                  scale: searchFocused ? 1.1 : 1,
                  color: searchFocused ? "#a855f7" : "#6b7280"
                }}
                transition={{ duration: 0.2 }}
              >
                <Search className="h-4 w-4 transition-colors duration-200" />
              </motion.div>

              {/* Input Field */}
              <motion.input
                type="text"
                placeholder="Procurar por serviços de games..."
                className={cn(
                  "w-full pl-10 pr-4 py-3 rounded-xl border-2 transition-all duration-300",
                  "bg-white/50 backdrop-blur-sm shadow-sm",
                  "placeholder:text-muted-foreground/70",
                  "hover:shadow-md hover:bg-white/70",
                  "focus:outline-none focus:border-wakanda-purple focus:bg-white focus:shadow-lg",
                  "group-hover:border-muted-foreground/30"
                )}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 8px 32px rgba(168, 85, 247, 0.15)"
                }}
                whileHover={{
                  scale: 1.01
                }}
                transition={{ duration: 0.2 }}
              />

              {/* Animated Background Glow */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-wakanda-purple/10 via-wakanda-accent/10 to-wakanda-purple/10 -z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: searchFocused ? 1 : 0,
                  scale: searchFocused ? 1.05 : 0.95
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating particles effect when focused */}
              {searchFocused && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-wakanda-purple/40 rounded-full"
                      style={{
                        left: `${20 + i * 25}%`,
                        top: '50%'
                      }}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Actions */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <Button variant="ghost" size="sm" asChild className="hidden md:flex">
                <Link to="/login">Entrar</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <Link to="/signup">
                <AnimatedButton 
                  size="sm" 
                  className="bg-gradient-to-r from-wakanda-purple to-wakanda-deep-purple hover:from-wakanda-purple/90 hover:to-wakanda-deep-purple/90"
                  animationType="glow"
                >
                  Cadastrar
                </AnimatedButton>
              </Link>
            </motion.div>
            
            {/* Mobile Menu Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-border bg-background py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-4">
                {/* Mobile Search */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="absolute inset-y-0 left-3 flex items-center">
                    <Search className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    placeholder="Procurar serviços..."
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                  />
                </motion.div>
                
                {/* Mobile Navigation Links */}
                <motion.nav 
                  className="flex flex-col space-y-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}
                >
                  {[
                    { to: "/services", label: "Serviços" },
                    { to: "/categories", label: "Categorias" },
                    { to: "/games", label: "Jogos" },
                    { to: "/how-it-works", label: "Como Funciona" },
                    { to: "/become-pro", label: "Seja um Pro" },
                    { to: "/login", label: "Entrar" }
                  ].map((item) => (
                    <motion.div
                      key={item.to}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <Link 
                        to={item.to} 
                        className="text-foreground hover:text-primary font-medium py-2 block transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
