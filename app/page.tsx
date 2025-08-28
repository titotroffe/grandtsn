import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gran DT Nicoleño</h1>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="secondary">Iniciar Sesión</Button>
            </Link>
            <Link href="/register">
              <Button variant="secondary">Registrarse</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Crea Tu Equipo Ideal</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Construye tu equipo con un presupuesto limitado, seleccionando jugadores de los 16 clubes de la Liga
            Nicoleña de Fútbol. Gana puntos basados en el rendimiento real de los jugadores y compite con amigos!
          </p>
          <div className="mt-8">
            <Link href="/register">
              <Button size="lg" className="text-lg px-8">
                Comienza a Jugar Ahora
              </Button>
            </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Construye Tu Equipo</CardTitle>
              <CardDescription>Selecciona jugadores dentro de tu presupuesto</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Elige entre clubes como Argentino Oeste, 12 de Octubre, Social, Belgrano y más, con un máximo de 3
                jugadores por equipo. Cada jugador tiene un valor específico, y debes mantenerte dentro de tu
                presupuesto.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gana Puntos</CardTitle>
              <CardDescription>Basados en rendimiento real</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Tus jugadores ganan puntos basados en su rendimiento en la vida real, incluyendo goles, asistencias y
                tarjetas. ¡Revisa tu puntuación después de cada jornada!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compite</CardTitle>
              <CardDescription>Sube a lo más alto de la clasificación</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Compite contra otros managers en tu liga. ¡Sigue tu progreso en la clasificación y gana premios!</p>
            </CardContent>
          </Card>
        </section>

        <section className="bg-muted rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Cómo Funciona</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Regístrate</h3>
              <p>Crea una cuenta para comenzar</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Crea Equipo</h3>
              <p>Selecciona jugadores dentro de tu presupuesto</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Gana Puntos</h3>
              <p>Puntos basados en rendimiento real</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Gana Premios</h3>
              <p>Compite y gana en tu liga</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-6">
        <div className="container text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Gran DT Nicoleño. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
