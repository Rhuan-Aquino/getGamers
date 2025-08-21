import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  DollarSign, 
  Trophy, 
  Users, 
  Star,
  Clock,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Gamepad2,
  Target,
  Zap,
  Crown,
  Calendar,
  BarChart3
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function BecomePro() {
  const [step, setStep] = useState(1);

  const benefits = [
    {
      icon: DollarSign,
      title: "Ganhe R$ 2.000 - R$ 8.000/mês",
      description: "Transforme sua paixão por games em uma fonte de renda estável",
      highlight: "💰 Rendimento Médio"
    },
    {
      icon: Clock,
      title: "Trabalhe no Seu Horário",
      description: "Flexibilidade total para trabalhar quando e como quiser",
      highlight: "⏰ Liberdade Total"
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Conecte-se com outros profissionais e clientes engajados",
      highlight: "🎮 +10k Gamers"
    },
    {
      icon: Shield,
      title: "Pagamentos Garantidos",
      description: "Sistema de pagamento seguro com proteção total",
      highlight: "🔒 100% Seguro"
    }
  ];

  const requirements = [
    {
      category: "Platinação de Jogos",
      icon: Trophy,
      requirements: [
        "Ter platinado pelo menos 10 jogos diferentes",
        "Conhecimento profundo de mecânicas de troféus",
        "Experiência com múltiplas plataformas (PS4/PS5/Xbox)",
        "Capacidade de completar jogos em prazos específicos"
      ],
      averageEarning: "R$ 50 - R$ 150 por platina",
      demand: "Alta"
    },
    {
      category: "Rank Competitivo",
      icon: Target,
      requirements: [
        "Rank alto comprovado nos jogos oferecidos",
        "Histórico de melhorias consistentes",
        "Conhecimento de meta e estratégias atuais",
        "Experiência em jogos competitivos (min. 2 anos)"
      ],
      averageEarning: "R$ 100 - R$ 300 por rank",
      demand: "Muito Alta"
    },
    {
      category: "Coaching",
      icon: Users,
      requirements: [
        "Habilidades comprovadas de ensino",
        "Comunicação clara e didática",
        "Paciência para lidar com iniciantes",
        "Capacidade de criar planos de melhoria"
      ],
      averageEarning: "R$ 30 - R$ 80 por hora",
      demand: "Crescente"
    },
    {
      category: "Farming & Grinding",
      icon: Zap,
      requirements: [
        "Conhecimento de métodos eficientes",
        "Experiência com progressão de personagens",
        "Conhecimento de itens e economia do jogo",
        "Capacidade de trabalho repetitivo"
      ],
      averageEarning: "R$ 40 - R$ 120 por serviço",
      demand: "Média"
    }
  ];

  const successStories = [
    {
      name: "Carlos Silva",
      gamertag: "ProGamer_BR",
      specialty: "Platinação EA SPORTS™ FC 26",
      monthlyEarning: "R$ 3.200",
      rating: 4.9,
      jobs: 127,
      quote: "Transformei minha paixão pelo EA SPORTS™ FC 26 em uma renda extra incrível. Consigo platinar jogos no meu tempo livre e ainda ajudar outros gamers!",
      badge: "Top Performer"
    },
    {
      name: "Ana Santos",
      gamertag: "ValorantPro",
      specialty: "Coaching Valorant",
      monthlyEarning: "R$ 2.800",
      rating: 5.0,
      jobs: 89,
      quote: "Adoro ensinar estratégias e ver meus alunos evoluindo. É gratificante financeiramente e pessoalmente.",
      badge: "5 Star Coach"
    },
    {
      name: "Pedro Costa",
      gamertag: "RankMaster",
      specialty: "Boost Rank LoL",
      monthlyEarning: "R$ 4.500",
      rating: 4.8,
      jobs: 203,
      quote: "Consegui me tornar um dos prestadores mais procurados. A plataforma me deu visibilidade e clientes constantes.",
      badge: "Elite Pro"
    }
  ];

  const applicationSteps = [
    {
      title: "Informações Básicas",
      description: "Nome, idade, experiência em games"
    },
    {
      title: "Especialidades",
      description: "Jogos e serviços que você oferece"
    },
    {
      title: "Verificação",
      description: "Comprovação de habilidades e histórico"
    },
    {
      title: "Aprovação",
      description: "Análise do perfil e início das atividades"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-wakanda-dark via-wakanda-purple to-wakanda-accent p-8 rounded-2xl text-white mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <Badge className="bg-white/20 text-white px-4 py-2 mb-4">
                🚀 Oportunidade Exclusiva
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Seja um <span className="text-yellow-300">getGamer</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Transforme sua expertise em games numa fonte de renda. Junte-se aos melhores profissionais do Brasil e ganhe dinheiro fazendo o que ama.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg font-bold">
                  Começar Aplicação
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-yellow-300 hover:bg-white/10 px-8 py-6 text-lg">
                  Ver Requisitos
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Cadastro Gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Aprovação em 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Suporte Dedicado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Por que Ser um getGamer?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-2 hover:border-gaming-orange/50">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-r from-gaming-orange to-gaming-purple p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-8 w-8 text-black" />
                  </div>
                  <Badge className="bg-gaming-orange/10 text-gaming-orange border-gaming-orange/20 mb-3">
                    {benefit.highlight}
                  </Badge>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Especialidades e Requisitos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-gaming-blue to-gaming-purple text-black">
                  <div className="flex items-center gap-3">
                    <req.icon className="h-6 w-6" />
                    <CardTitle>{req.category}</CardTitle>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <Badge className="bg-white/20 text-black">
                      {req.averageEarning}
                    </Badge>
                    <Badge className="bg-white/20 text-black">
                      Demanda: {req.demand}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3">Requisitos:</h4>
                  <ul className="space-y-2">
                    {req.requirements.map((requirement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Histórias de Sucesso</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="bg-gradient-to-r from-gaming-blue to-gaming-purple p-3 rounded-full w-fit mx-auto mb-3">
                      <Gamepad2 className="h-6 w-6 text-black" />
                    </div>
                    <Badge className="bg-gaming-orange text-black mb-2">
                      {story.badge}
                    </Badge>
                    <h3 className="font-bold text-lg">{story.name}</h3>
                    <p className="text-gaming-blue font-medium">@{story.gamertag}</p>
                    <p className="text-sm text-muted-foreground">{story.specialty}</p>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">{story.monthlyEarning}</div>
                        <div className="text-xs text-muted-foreground">Por mês</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-bold">{story.rating}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{story.jobs} trabalhos</div>
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-sm italic text-muted-foreground border-l-4 border-gaming-orange pl-4">
                    "{story.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Processo de Aplicação</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {applicationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-gaming-blue to-gaming-purple text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < applicationSteps.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-muted-foreground mx-auto mt-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-gaming-blue to-gaming-purple text-black">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold text-center mb-8">getGamer em Números</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <BarChart3 className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold">R$ 12M+</div>
                  <div className="text-black/80 text-sm">Pagos aos Profissionais</div>
                </div>
                <div>
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-black/80 text-sm">Profissionais Ativos</div>
                </div>
                <div>
                  <Star className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold">4.9★</div>
                  <div className="text-black/80 text-sm">Avaliação Média</div>
                </div>
                <div>
                  <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold">89%</div>
                  <div className="text-black/80 text-sm">Taxa de Aprovação</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Application Form Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Comece Sua Aplicação</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
              <p className="text-muted-foreground">Preencha seus dados para começar o processo</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Idade</Label>
                  <Input id="age" type="number" placeholder="25" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gamertag">Gamertag Principal</Label>
                <Input id="gamertag" placeholder="SeuGamertag" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="specialty">Especialidade Principal</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione sua especialidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="platinacao">Platinação de Jogos</SelectItem>
                    <SelectItem value="rank">Rank Competitivo</SelectItem>
                    <SelectItem value="coaching">Coaching</SelectItem>
                    <SelectItem value="farming">Farming & Grinding</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience">Experiência em Games</Label>
                <Textarea id="experience" placeholder="Descreva sua experiência, jogos que domina, conquistas relevantes..." />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-gaming-orange to-gaming-purple hover:from-gaming-orange/90 hover:to-gaming-purple/90">
                Enviar Aplicação
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda com nossos termos de serviço para profissionais
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-gaming-orange to-gaming-purple text-black border-0">
            <CardContent className="pt-8">
              <Crown className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Pronto para Ser um Pro?</h2>
              <p className="text-xl text-black/90 mb-8 max-w-2xl mx-auto">
                Não perca a oportunidade de transformar sua paixão por games em uma carreira lucrativa. 
                Vagas limitadas disponíveis!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-gaming-orange hover:bg-white/90 px-8 py-6 text-lg font-bold">
                  Aplicar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-wakanda-dark px-8 py-6 text-lg" asChild>
                  <Link to="/how-it-works">
                    Saber Mais
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
