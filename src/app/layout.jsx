import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://monteiroconnect.com.br";
const SITE_NAME = "Crie seu site profissional - Monteiro Connect";
const DEFAULT_TITLE = "Monteiro Connect";
const DEFAULT_DESCRIPTION =
  "Transforme sua presença online com um site profissional, rápido e responsivo. Solicite seu orçamento agora e destaque-se no digital!";
const OG_IMAGE_URL = `${SITE_URL}/banner_monteiro_connect.jpg`;

export const metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: `${SITE_NAME}: %s`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Glauber Monteiro", url: SITE_URL }],
  keywords: [
    "criação de sites",
    "desenvolvimento de sites",
    "agência de sites",
    "empresa de criação de sites",
    "sites profissionais",
    "criação de sites profissionais em [sua cidade ou região]",
    "empresa de desenvolvimento de sites responsivos",
    "quanto custa um site profissional",
    "criação de site personalizado para empresas",
    "desenvolvimento web com foco em conversão",
    "monteiro connect criação de sites",
    "monteiro connect agência digital",
    "monteiro connect desenvolvimento web",
    "monteiro connect sites profissionais",
    "monteiro connect soluções digitais",
    "design de sites modernos",
    "desenvolvimento de landing pages",
    "otimização de sites para SEO",
    "integração com redes sociais e WhatsApp",
    "hospedagem e manutenção de sites",
    "criação de portfólios online",
    "sites para pequenas empresas",
    "sites com WordPress",
    "sites com HTML5 e CSS3",
    "sites responsivos mobile",
    "sites otimizados para Google",
    "performance e velocidade de carregamento",
    "UI/UX design profissional",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Logo da Monteiro Connect",
      },
    ],
    locale: "pt_BR",
  },
  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
