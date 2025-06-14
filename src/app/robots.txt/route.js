export async function GET() {
  const robots = `User-agent: *
  Disallow:
  
  Sitemap: https://www.monteiroconnect.com.br/sitemap.xml
  `;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400", // cache 24h
    },
  });
}
