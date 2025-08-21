import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  CreditCard, 
  Shield, 
  Star,
  UserCheck,
  MessageCircle,
  CheckCircle,
  AlertTriangle,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  const clientSteps = [
    {
      number: 1,
      title: "Encontre o Serviço Ideal",
      description: "Navegue pelos serviços disponíveis ou use nossa busca avançada",
      icon: Search,
      details: [
        "Filtre por jogo, categoria e preço",
        "Veja avaliações e comentários reais",
        "Compare diferentes prestadores",
        "Leia descrições detalhadas"
      ],
      tip: "💡 Use os filtros para encontrar exatamente o que precisa!"
    },
    {
      number: 2,
      title: "Escolha seu Profissional",
      description: "Selecione um gamer verificado com boa reputação",
      icon: UserCheck,
      details: [
        "Perfis verificados e auditados",
        "Histórico de trabalhos anteriores",
        "Avaliações de outros clientes",
        "Comunicação prévia disponível"
      ],
      tip: "⭐ Profissionais com mais avaliações são mais confiáveis!"
    },
    {
      number: 3,
      title: "Faça o Pagamento Seguro",
      description: "Pague com segurança através da nossa plataforma",
      icon: CreditCard,
      details: [
        "Pagamento protegido em escrow",
        "Múltiplas formas de pagamento",
        "Dinheiro liberado após conclusão",
        "Política de reembolso clara"
      ],
      tip: "🔒 Seu dinheiro fica seguro até o serviço ser concluído!"
    },
    {
      number: 4,
      title: "Acompanhe o Progresso",
      description: "Monitore o andamento do seu serviço em tempo real",
      icon: Clock,
      details: [
        "Updates regulares do prestador",
        "Chat direto para comunicação",
        "Notificações de progresso",
        "Previsão de conclusão"
      ],
      tip: "📱 Receba notificações no app para acompanhar tudo!"
    },
    {
      number: 5,
      title: "Receba e Avalie",
      description: "Confirme a conclusão e avalie o serviço prestado",
      icon: Star,
      details: [
        "Verificação de objetivos atingidos",
        "Processo de entrega transparente",
        "Sistema de avaliação mútua",
        "Suporte pós-conclusão"
      ],
      tip: "🌟 Sua avaliação ajuda outros gamers a escolher melhor!"
    }
  ];

  const providerSteps = [
    {
      number: 1,
      title: "Cadastre-se como Profissional",
      description: "Crie seu perfil e passe pela verificação",
      icon: UserCheck,
      details: [
        "Processo de verificação rigoroso",
        "Portfolio de conquistas",
        "Validação de habilidades",
        "Background check completo"
      ]
    },
    {
      number: 2,
      title: "Configure seus Serviços",
      description: "Defina preços, prazos e descrições detalhadas",
      icon: MessageCircle,
      details: [
        "Precificação competitiva",
        "Prazos realistas",
        "Descrições claras",
        "Portfolio visual"
      ]
    },
    {
      number: 3,
      title: "Receba Pedidos",
      description: "Aceite trabalhos compatíveis com suas especialidades",
      icon: CheckCircle,
      details: [
        "Sistema de matching inteligente",
        "Liberdade para aceitar/recusar",
        "Comunicação prévia com cliente",
        "Negociação de detalhes"
      ]
    },
    {
      number: 4,
      title: "Execute com Excelência",
      description: "Realize o serviço mantendo comunicação constante",
      icon: Play,
      details: [
        "Updates regulares obrigatórios",
        "Documentação do progresso",
        "Comunicação transparente",
        "Cumprimento de prazos"
      ]
    },
    {
      number: 5,
      title: "Receba seu Pagamento",
      description: "Confirme a entrega e receba o pagamento automaticamente",
      icon: DollarSign,
      details: [
        "Pagamento automático na conclusão",
        "Taxa competitiva da plataforma",
        "Saques rápidos e seguros",
        "Relatórios financeiros detalhados"
      ]
    }
  ];

  const safetyFeatures = [
    {
      icon: Shield,
      title: "Pagamento Protegido",
      description: "Sistema de escrow que protege tanto cliente quanto prestador"
    },
    {
      icon: UserCheck,
      title: "Verificação Rigorosa",
      description: "Todos os profissionais passam por processo de verificação"
    },
    {
      icon: MessageCircle,
      title: "Comunicação Monitorada",
      description: "Todas as conversas ficam registradas na plataforma"
    },
    {
      icon: RotateCcw,
      title: "Garantia de Reembolso",
      description: "Política clara de reembolso para casos de problemas"
    }
  ];

  const faqs = [
    {
      question: "Como posso ter certeza de que o serviço será entregue?",
      answer: "Todos os nossos profissionais são verificados e possuem histórico comprovado. Além disso, oferecemos garantia de reembolso caso o serviço não seja entregue conforme acordado."
    },
    {
      question: "Minha conta de jogo está segura?",
      answer: "Sim! Utilizamos métodos seguros e nossos profissionais assinam termos de confidencialidade. Nunca compartilhamos dados pessoais e monitoramos todas as atividades."
    },
    {
      question: "Quanto tempo leva para encontrar um profissional?",
      answer: "A maioria dos serviços recebe propostas em até 24 horas. Serviços populares como coaching podem ter resposta em minutos."
    },
    {
      question: "Posso cancelar um serviço após o pagamento?",
      answer: "Sim, você pode cancelar antes do início do trabalho com reembolso total. Após o início, analisamos caso a caso conforme nossa política de cancelamento."
    },
    {
      question: "Como funciona a comunicação com o prestador?",
      answer: "Oferecemos chat integrado na plataforma, onde você pode acompanhar o progresso e tirar dúvidas em tempo real com segurança total."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-wakanda-dark via-wakanda-purple to-wakanda-accent p-8 rounded-2xl text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Como Funciona o <span className="text-yellow-300">getGamer</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Processo simples, seguro e transparente para conectar gamers e profissionais. 
              Descubra como é fácil alcançar seus objetivos nos jogos.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <Tabs defaultValue="client" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="client" className="text-lg py-3">
              <Users className="mr-2 h-5 w-5" />
              Para Clientes
            </TabsTrigger>
            <TabsTrigger value="provider" className="text-lg py-3">
              <Star className="mr-2 h-5 w-5" />
              Para Prestadores
            </TabsTrigger>
          </TabsList>

          <TabsContent value="client">
            <div className="space-y-8">
              {clientSteps.map((step, index) => (
                <Card key={step.number} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      {/* Step Number & Icon */}
                      <div className="bg-gradient-to-br from-gaming-blue to-gaming-purple p-8 text-white flex items-center justify-center">
                        <div className="text-center">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4 mx-auto w-fit">
                            <step.icon className="h-8 w-8" />
                          </div>
                          <div className="text-4xl font-bold mb-2">{step.number}</div>
                          <div className="text-sm opacity-80">Passo {step.number}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-2 p-8">
                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground mb-6 text-lg">{step.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {step.details.map((detail, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>

                        {step.tip && (
                          <Badge className="bg-gaming-orange/10 text-gaming-orange border-gaming-orange/20 px-4 py-2">
                            {step.tip}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="provider">
            <div className="space-y-8">
              {providerSteps.map((step, index) => (
                <Card key={step.number} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      <div className="bg-gradient-to-br from-gaming-orange to-gaming-purple p-8 text-white flex items-center justify-center">
                        <div className="text-center">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4 mx-auto w-fit">
                            <step.icon className="h-8 w-8" />
                          </div>
                          <div className="text-4xl font-bold mb-2">{step.number}</div>
                          <div className="text-sm opacity-80">Passo {step.number}</div>
                        </div>
                      </div>

                      <div className="lg:col-span-2 p-8">
                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground mb-6 text-lg">{step.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {step.details.map((detail, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Safety Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Segurança em Primeiro Lugar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-3 flex items-start gap-2">
                    <span className="bg-gaming-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground pl-8">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gaming-blue to-gaming-purple rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de gamers que já descobriram a forma mais fácil de dominar seus jogos favoritos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-wakanda-accent hover:bg-wakanda-accent/90 text-wakanda-dark px-8 py-6 text-lg font-bold" asChild>
              <Link to="/services">
                Encontrar Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-wakanda-dark px-8 py-6 text-lg" asChild>
              <Link to="/become-pro">
                Quero Ser um Pro
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
