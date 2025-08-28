import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Calendar, BarChart3 } from "lucide-react"

export default function Dashboard() {
  // Datos de ejemplo
  const teamPoints = 245
  const ranking = 34
  const totalTeams = 1250

  // Próximos partidos con equipos reales de la Liga Nicoleña
  const nextFixtures = [
    { id: 1, home: "Argentino Oeste", away: "Social", date: "Sáb, 15 Jun", time: "15:00" },
    { id: 2, home: "Matienzo", away: "Regatas", date: "Sáb, 15 Jun", time: "17:30" },
    { id: 3, home: "Belgrano", away: "Somisa", date: "Dom, 16 Jun", time: "14:00" },
    { id: 4, home: "Los Andes", away: "Defensores de Belgrano", date: "Dom, 16 Jun", time: "16:30" },
  ]

  // Mi equipo con jugadores reales
  const myTeam = [
    {
      id: 1,
      name: "Jonas Rosales",
      team: "Argentino Oeste",
      position: "POR",
      points: 32,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Facundo Luque",
      team: "Argentino Oeste",
      position: "DEL",
      points: 28,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Marcelo Ocanto",
      team: "Belgrano",
      position: "DEL",
      points: 24,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Nicolas Dorsmich",
      team: "Regatas",
      position: "POR",
      points: 18,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Cristian Frontini",
      team: "Somisa",
      position: "DEL",
      points: 30,
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  const substitutes = [
    {
      id: 6,
      name: "Daniel Mendoza",
      team: "Argentino Oeste",
      position: "DEL",
      points: 22,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "Imanol Gomez",
      team: "General Rojo",
      position: "DEL",
      points: 26,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 8,
      name: "Kevin Frutos",
      team: "Paraná",
      position: "DEL",
      points: 20,
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  const topPerformers = [
    {
      id: 1,
      name: "Facundo Luque",
      team: "Argentino Oeste",
      position: "DEL",
      points: 38,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Marcelo Ocanto",
      team: "Belgrano",
      position: "DEL",
      points: 32,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Cristian Frontini",
      team: "Somisa",
      position: "DEL",
      points: 30,
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 border-b">
        <div className="container flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gran DT Nicoleño</h1>
          <div className="flex items-center gap-4">
            <span>Bienvenido, Manager</span>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/">Cerrar Sesión</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Panel de Control</h1>
            <p className="text-muted-foreground">Administra tu equipo del Gran DT Nicoleño</p>
          </div>
          <Button asChild>
            <Link href="/create-team">Editar Equipo</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Puntos Totales</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamPoints}</div>
              <p className="text-xs text-muted-foreground">+18 puntos la fecha pasada</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clasificación</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {ranking} / {totalTeams}
              </div>
              <p className="text-xs text-muted-foreground">Top {((ranking / totalTeams) * 100).toFixed(1)}%</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próxima Fecha</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Fecha 16</div>
              <p className="text-xs text-muted-foreground">Comienza en 3 días</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="team" className="space-y-4">
          <TabsList>
            <TabsTrigger value="team">Mi Equipo</TabsTrigger>
            <TabsTrigger value="fixtures">Partidos</TabsTrigger>
            <TabsTrigger value="leaderboard">Clasificación</TabsTrigger>
          </TabsList>

          <TabsContent value="team" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Mi Equipo</CardTitle>
                <CardDescription>Alineación actual de tu equipo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h3 className="font-semibold">Titulares</h3>
                  <div className="space-y-2">
                    {myTeam.map((player) => (
                      <div key={player.id} className="flex items-center justify-between p-2 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={player.image || "/placeholder.svg"} alt={player.name} />
                            <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{player.name}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Badge variant="outline" className="text-xs h-5">
                                {player.position}
                              </Badge>
                              <span>{player.team}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{player.points} pts</Badge>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-semibold mt-6">Suplentes</h3>
                  <div className="space-y-2">
                    {substitutes.map((player) => (
                      <div
                        key={player.id}
                        className="flex items-center justify-between p-2 border rounded-lg bg-muted/50"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={player.image || "/placeholder.svg"} alt={player.name} />
                            <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{player.name}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Badge variant="outline" className="text-xs h-5">
                                {player.position}
                              </Badge>
                              <span>{player.team}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{player.points} pts</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mejores Jugadores</CardTitle>
                <CardDescription>Jugadores con más puntos esta fecha</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((player) => (
                    <div key={player.id} className="flex items-center justify-between p-2 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={player.image || "/placeholder.svg"} alt={player.name} />
                          <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{player.name}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Badge variant="outline" className="text-xs h-5">
                              {player.position}
                            </Badge>
                            <span>{player.team}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{player.points} pts</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fixtures" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Próximos Partidos</CardTitle>
                <CardDescription>Calendario de la próxima fecha</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nextFixtures.map((fixture) => (
                    <div key={fixture.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="text-right w-32 font-medium">{fixture.home}</div>
                        <div className="text-center w-8">vs</div>
                        <div className="w-32 font-medium">{fixture.away}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {fixture.date} • {fixture.time}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leaderboard">
            <Card>
              <CardHeader>
                <CardTitle>Clasificación</CardTitle>
                <CardDescription>Mejores managers esta temporada</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg font-medium">
                    <div className="flex items-center gap-3">
                      <span className="w-8 text-center">1</span>
                      <div>
                        <p>Manager Alpha</p>
                        <p className="text-sm text-muted-foreground">Los Tigres FC</p>
                      </div>
                    </div>
                    <Badge>312 pts</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg font-medium">
                    <div className="flex items-center gap-3">
                      <span className="w-8 text-center">2</span>
                      <div>
                        <p>Manager Beta</p>
                        <p className="text-sm text-muted-foreground">Nicoleños Unidos</p>
                      </div>
                    </div>
                    <Badge>298 pts</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg font-medium">
                    <div className="flex items-center gap-3">
                      <span className="w-8 text-center">3</span>
                      <div>
                        <p>Manager Gamma</p>
                        <p className="text-sm text-muted-foreground">Fantasía Total</p>
                      </div>
                    </div>
                    <Badge>287 pts</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-primary/20 bg-primary/5 rounded-lg font-medium">
                    <div className="flex items-center gap-3">
                      <span className="w-8 text-center">{ranking}</span>
                      <div>
                        <p>Tú</p>
                        <p className="text-sm text-muted-foreground">Tu Nombre de Equipo</p>
                      </div>
                    </div>
                    <Badge>{teamPoints} pts</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="mt-auto bg-muted py-6">
        <div className="container text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Gran DT Nicoleño. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
