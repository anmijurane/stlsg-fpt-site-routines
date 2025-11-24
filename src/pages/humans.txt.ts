
export async function GET() {
  const tz = "America/Mexico_City";
  const dateFormatted = new Intl.DateTimeFormat("es-MX", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: tz,
  }).format(new Date());

  const body = `/* TEAM */

Developer: Miguel Andres Jurado Negrete
Site: anmijurane@gmail.com
Location: MX

--

Infrastructure: Daniel Ortiz
Site: daniel2598core@gmail.com
Location: MX

--

Designer: Oscar Diaz Leyva
Site: emigramm63@gmail.com
Location: MX


/ * THANKS * /
== EN ==
To the Planet Fitness MX team.
Collaborate with the: Marketing, IT, and Operations, teams to create and ensure the success of this platform.

== ES ==
Al equipo de Planet Fitness MX.
Colaborar con el equipo de: Marketing, IT y Operaciones para la creación y éxito de esta plataforma.

Marketing
Tania Gabriela Zepeda Valdés
Lucia Elías Silva

Operations
Jaime Abraham Pérez Martínez
Jonathan Gaitan Vargas

IT
Diego Iván Magaña Varela
Raúl Torres Zavala

/* SITE */
Last update: ${dateFormatted}
Standards: HTML, CSS y TypeScript
Framework: AstroJS`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
