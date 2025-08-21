import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  Search, 
  Filter, 
  Star, 
  Trophy, 
  Target, 
  Users, 
  Zap, 
  Clock,
  DollarSign,
  TrendingUp,
  Award,
  GamepadIcon
} from "lucide-react";
import { useState } from "react";

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const categories = [
    { id: "all", name: "Todos os Serviços", icon: GamepadIcon },
    { id: "platinacao", name: "Platinação", icon: Trophy },
    { id: "rank", name: "Rank Competitivo", icon: Target },
    { id: "coaching", name: "Coaching", icon: Users },
    { id: "farming", name: "Farming & Grinding", icon: Zap },
    { id: "boost", name: "Account Boost", icon: TrendingUp }
  ];

  const services = [
    {
      id: 1,
      title: "Platina EA SPORTS™ FC 26 - 100% Garantido",
      provider: "ProGamer_BR",
      rating: 4.9,
      reviews: 127,
      price: 89,
      originalPrice: 120,
      time: "3-5 dias",
      category: "platinacao",
      image: "🏆",
      featured: true,
      badges: ["Top Rated", "Garantido"],
      description: "Conquiste todos os troféus do EA SPORTS™ FC 26 com 100% de garantia. Método seguro e rápido."
    },
    {
      id: 2,
      title: "Subida de Rank Valorant (até Diamante)",
      provider: "ValorantPro",
      rating: 5.0,
      reviews: 89,
      price: 150,
      time: "1-2 semanas",
      category: "rank",
      image: "🎯",
      featured: true,
      badges: ["Melhor Avaliado"],
      description: "Suba de rank no Valorant com estratégias profissionais. Desde Ferro até Diamante."
    },
    {
      id: 3,
      title: "Coaching Fortnite 1v1 Personalizado",
      provider: "FortniteMaster",
      rating: 4.8,
      reviews: 203,
      price: 45,
      time: "1 hora",
      category: "coaching",
      image: "👨‍🏫",
      badges: ["Mais Popular"],
      description: "Aprenda técnicas avançadas de build e aim com coach profissional."
    },
    {
      id: 4,
      title: "Level UP CS2 - Global Elite",
      provider: "CSLegend",
      rating: 4.7,
      reviews: 156,
      price: 200,
      time: "2-3 semanas",
      category: "rank",
      image: "🔫",
      badges: ["Verificado"],
      description: "Alcance o Global Elite no CS2 com estratégias e técnicas profissionais."
    },
    {
      id: 5,
      title: "Farming Gold League of Legends",
      provider: "LoLFarmer",
      rating: 4.6,
      reviews: 92,
      price: 35,
      time: "2-4 dias",
      category: "farming",
      image: "💰",
      badges: ["Rápido"],
      description: "Farm eficiente de gold e recursos no LoL. Método seguro e discreto."
    },
    {
      id: 6,
      title: "Boost Completo Rocket League",
      provider: "RocketBooster",
      rating: 4.9,
      reviews: 178,
      price: 110,
      time: "1 semana",
      category: "boost",
      image: "🚀",
      badges: ["Champion"],
      description: "Boost completo no Rocket League incluindo ranks, itens e conquistas."
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange === "low") matchesPrice = service.price <= 50;
    else if (priceRange === "medium") matchesPrice = service.price > 50 && service.price <= 150;
    else if (priceRange === "high") matchesPrice = service.price > 150;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-wakanda-dark to-wakanda-purple p-8 rounded-2xl text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Serviços de Gaming <span className="text-wakanda-accent">Premium</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Mais de 500+ serviços profissionais disponíveis. Encontre o que você precisa para dominar seus jogos favoritos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Award className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold">100% Garantido</h3>
                <p className="text-sm text-white/80">Ou seu dinheiro de volta</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold">Entrega Rápida</h3>
                <p className="text-sm text-white/80">Resultados em tempo recorde</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold">Pros Verificados</h3>
                <p className="text-sm text-white/80">Apenas os melhores players</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar serviços..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Faixa de Preço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os Preços</SelectItem>
                  <SelectItem value="low">Até R$ 50</SelectItem>
                  <SelectItem value="medium">R$ 50 - R$ 150</SelectItem>
                  <SelectItem value="high">Acima de R$ 150</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                Filtros Avançados
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Categories Quick Access */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Navegar por Categoria</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((category) => (
              <Card 
                key={category.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedCategory === category.id ? 'ring-2 ring-gaming-blue' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="pt-6 text-center">
                  <category.icon className="h-8 w-8 mx-auto mb-2 text-gaming-blue" />
                  <p className="text-sm font-medium">{category.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {filteredServices.length} Serviços Encontrados
          </h2>
          <Select defaultValue="featured">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Mais Populares</SelectItem>
              <SelectItem value="price-low">Menor Preço</SelectItem>
              <SelectItem value="price-high">Maior Preço</SelectItem>
              <SelectItem value="rating">Melhor Avaliação</SelectItem>
              <SelectItem value="newest">Mais Recentes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="bg-gradient-to-br from-gaming-blue to-gaming-purple h-40 flex items-center justify-center">
                  <span className="text-5xl">{service.image}</span>
                </div>
                {service.featured && (
                  <Badge className="absolute top-3 left-3 bg-gaming-orange text-white">
                    Em Destaque
                  </Badge>
                )}
                {service.originalPrice && (
                  <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                    -{Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-1 mb-3">
                  {service.badges.map((badge, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="font-bold text-lg mb-2 group-hover:text-gaming-blue transition-colors line-clamp-2">
                  {service.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <span>por</span>
                  <span className="font-medium text-foreground">{service.provider}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-sm">{service.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({service.reviews})</span>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {service.time}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gaming-blue">R$ {service.price}</span>
                      {service.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          R$ {service.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-gaming-orange to-accent hover:from-gaming-orange/90 hover:to-accent/90">
                    Contratar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Carregar Mais Serviços
          </Button>
        </div>
      </div>
    </div>
  );
}
