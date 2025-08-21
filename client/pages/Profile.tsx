import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Edit3, 
  Star, 
  Trophy, 
  GamepadIcon, 
  DollarSign,
  Calendar,
  Clock,
  CheckCircle,
  Settings
} from "lucide-react";

export default function Profile() {
  const user = {
    name: "João Silva",
    gamertag: "ProGamer_BR",
    email: "joao@email.com",
    avatar: "/placeholder.svg",
    rating: 4.9,
    totalJobs: 127,
    totalEarnings: "R$ 15.240",
    memberSince: "Janeiro 2023",
    verified: true
  };

  const recentJobs = [
    {
      title: "Platina EA SPORTS™ FC 26",
      client: "PlayerXYZ",
      status: "completed",
      earnings: "R$ 89",
      date: "2 dias atrás",
      rating: 5
    },
    {
      title: "Rank Valorant - Ouro para Platina",
      client: "GamerABC",
      status: "in_progress",
      earnings: "R$ 150",
      date: "Em andamento",
      rating: null
    },
    {
      title: "Coaching Fortnite",
      client: "NoobMaster",
      status: "completed",
      earnings: "R$ 45",
      date: "1 semana atrás",
      rating: 4
    }
  ];

  const skills = [
    "EA SPORTS™ FC 26", "Fortnite", "Valorant", "CS2", "League of Legends", "Rocket League"
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-2xl bg-gradient-to-r from-wakanda-purple to-wakanda-deep-purple text-white">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  {user.verified && (
                    <Badge className="bg-green-500 text-white">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verificado
                    </Badge>
                  )}
                </div>
                <p className="text-lg text-wakanda-purple font-medium mb-2">@{user.gamertag}</p>
                <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{user.rating}</span>
                    <span>({user.totalJobs} avaliações)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Membro desde {user.memberSince}</span>
                  </div>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-wakanda-purple to-wakanda-deep-purple">
                <Edit3 className="h-4 w-4 mr-2" />
                Editar Perfil
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Ganho</p>
                  <p className="text-2xl font-bold text-green-600">{user.totalEarnings}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg">
                  <Trophy className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Trabalhos Concluídos</p>
                  <p className="text-2xl font-bold text-blue-600">{user.totalJobs}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded-lg">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avaliação Média</p>
                  <p className="text-2xl font-bold text-yellow-600">{user.rating}★</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="jobs">Trabalhos Recentes</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="jobs">
            <Card>
              <CardHeader>
                <CardTitle>Trabalhos Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentJobs.map((job, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">Cliente: {job.client}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge 
                            variant={job.status === 'completed' ? 'default' : 'secondary'}
                            className={job.status === 'completed' ? 'bg-green-500' : ''}
                          >
                            {job.status === 'completed' ? 'Concluído' : 'Em Andamento'}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{job.date}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">{job.earnings}</p>
                        {job.rating && (
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{job.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Minhas Especialidades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      <GamepadIcon className="h-3 w-3 mr-1" />
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline">
                  <Edit3 className="h-4 w-4 mr-2" />
                  Gerenciar Habilidades
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Configurações da Conta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" defaultValue={user.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gamertag">Gamertag</Label>
                    <Input id="gamertag" defaultValue={user.gamertag} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={user.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" />
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button className="bg-gradient-to-r from-wakanda-purple to-wakanda-deep-purple">
                    Salvar Alterações
                  </Button>
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Configurações Avançadas
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
