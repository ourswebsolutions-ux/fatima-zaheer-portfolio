
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fatima Zaheer's Portfolio | Professional Content Writing",
  description:
    "Explore Fatima Zaheer's professional writing portfolio featuring website content, SEO copywriting, YouTube scripts, LinkedIn content, email campaigns, product descriptions, and press releases.",
  keywords: [
    "Fatima Zaheer portfolio",
    "content writing portfolio",
    "SEO content writer",
    "professional content writer",
    "website content writer",
    "SEO copywriter",
    "YouTube script writer",
    "LinkedIn content writer",
    "email copywriter",
    "product description writer",
    "press release writer",
    "content writer Pakistan",
    "freelance content writer",
    "copywriting portfolio",
    "digital content writer",
  ],
  authors: [{ name: "Fatima Zaheer" }],
  openGraph: {
    title: "Fatima Zaheer's Portfolio | Professional Content Writing",
    description:
      "A selection of professional content writing projects including website copy, SEO content, scripts, social media campaigns, email marketing, and product content.",
    type: "website",
    url: "https://storycup.vercel.app/portfolio",
    images: [
      {
        url: "/worldwideartical.jpg",
        width: 1200,
        height: 630,
        alt: "Fatima Zaheer Content Writing Portfolio",
      },
    ],
    siteName: "Fatima Zaheer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatima Zaheer's Portfolio | Content Writing",
    description:
      "Explore professional content writing, SEO copywriting, scripts, campaigns, product content, and website copy.",
    images: ["/worldwideartical.jpg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/portfolio",
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
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: "Fatima Zaheer's Content Writing Portfolio",
      author: {
        "@type": "Person",
        name: "Fatima Zaheer",
      },
      url: "https://storycup.vercel.app/portfolio",
      description:
        "Professional content writing portfolio featuring website copy, SEO copywriting, YouTube scripts, LinkedIn content, email campaigns, product descriptions, and press releases.",
    }),
  },
}

const projects = [
  {
    id: 1,
    title: "SEO Website Content",
    description:
      "Developed search-engine-friendly website content designed to communicate brand value clearly while targeting relevant keywords and improving organic visibility.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    category: "Website Content",
    technologies: [
      "SEO Writing",
      "Keyword Research",
      "Website Copy",
    ],
    liveUrl: "https://www.centricdxb.com/insights/b2b-sales-funnel",
    featured: true,
  },
  {
    id: 2,
    title: "YouTube Biography Script",
    description:
      "Created an engaging long-form biography script structured for YouTube storytelling, audience retention, and clear presentation of a subject's life and achievements.",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=80",
    category: "Scripts",
    technologies: [
      "YouTube Writing",
      "Storytelling",
      "Research",
    ],
    liveUrl: "https://rondasomontano.com/revista/188782/herramientas-de-ia-amigables-para-los-estudiantes-la-clave-de-la-excelencia-academica/",
    featured: true,
  },
  {
    id: 3,
    title: "LinkedIn Personal Branding",
    description:
      "Developed professional LinkedIn content focused on personal branding, thought leadership, audience engagement, and building a consistent professional voice.",
    image:
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=1200&q=80",
    category: "Social Media",
    technologies: [
      "LinkedIn Content",
      "Personal Branding",
      "Copywriting",
    ],
    liveUrl: "https://www.goinformation.info/7425/reformulation-du-texte-peut-elle-aider-les-etudiants-a-ameliorer-capacites-redactionnelles/",
    featured: true,
  },
  {
    id: 4,
    title: "E-Commerce Product Descriptions",
    description:
      "Created persuasive product descriptions that highlight key features, customer benefits, and buying points while maintaining a clear and conversion-focused tone.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    category: "E-Commerce",
    technologies: [
      "Product Copy",
      "Conversion Writing",
      "SEO",
    ],
    liveUrl: "https://tecnowiz.net/come-riassumere-un-articolo-senza-plagiarlo/",
    featured: false,
  },
  {
    id: 5,
    title: "Email Marketing Campaign",
    description:
      "Planned and wrote customer-focused email copy designed to capture attention, communicate value, encourage clicks, and support marketing campaign goals.",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1200&q=80",
    category: "Email Marketing",
    technologies: [
      "Email Copywriting",
      "Marketing",
      "CTA Writing",
    ],
    liveUrl: "https://zipboard.co/blog/uncategorized/the-role-of-ai-paraphrasing-tools-in-content-creation/",
    featured: false,
  },
  {
    id: 6,
    title: "Professional Press Release",
    description:
      "Produced structured press release content with strong headlines, clear messaging, news-focused writing, and publication-ready formatting.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
    category: "Press Releases",
    technologies: [
      "PR Writing",
      "News Writing",
      "Media Content",
    ],
    liveUrl: "https://www.bankingsupport.info/",
    featured: false,
  },
  {
    id: 7,
    title: "Real Estate Marketing Copy",
    description:
      "Created engaging real estate marketing copy for property listings, landing pages, and promotional campaigns focused on attracting qualified buyers.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    category: "Real Estate",
    technologies: [
      "Real Estate Copy",
      "SEO",
      "Marketing Content",
    ],
    liveUrl: "https://jornaldobairroalto.com.br/",
    featured: false,
  },
  {
    id: 8,
    title: "Technical Documentation",
    description:
      "Created easy-to-understand technical documentation, user guides, and structured help content to make complex information easier for users to follow.",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
    category: "Documentation",
    technologies: [
      "Technical Writing",
      "Documentation",
      "User Guides",
    ],
    liveUrl: "https://jornaljoseensenews.com.br/",
    featured: false,
  },
]

export default function PortfolioPage() {
  const categories = [
    "All",
    "Website Content",
    "Scripts",
    "Social Media",
    "E-Commerce",
    "Email Marketing",
    "Press Releases",
    "Real Estate",
    "Documentation",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            My Portfolio
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of professional writing projects across website
            content, SEO copywriting, scripts, personal branding,
            marketing campaigns, product content, and technical writing.
          </p>
        </section>

        {/* Project Categories */}
        <Tabs defaultValue="All" className="mb-12">

          <TabsList className="flex flex-wrap h-auto gap-1 w-full max-w-5xl mx-auto justify-center">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {projects
                  .filter(
                    (project) =>
                      category === "All" ||
                      project.category === category
                  )
                  .map((project) => (

                    <Card
                      key={project.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >

                      {/* Project Image */}
                      <div className="relative h-48">

                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                        {project.featured && (
                          <Badge className="absolute top-4 left-4">
                            Featured
                          </Badge>
                        )}

                      </div>

                      <CardHeader>

                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">
                            {project.category}
                          </Badge>
                        </div>

                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>

                      </CardHeader>

                      <CardContent>

                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">

                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}

                        </div>

                        <div className="flex gap-2">

                          <Button size="sm" asChild>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-3 w-3" />
                              View Work
                            </a>
                          </Button>

                        </div>

                      </CardContent>

                    </Card>

                  ))}

              </div>

            </TabsContent>
          ))}

        </Tabs>

        {/* Call to Action */}
        <section className="text-center py-16">

          <Card className="max-w-2xl mx-auto">

            <CardContent className="p-8">

              <h2 className="text-2xl font-bold mb-4">
                Have a Writing Project in Mind?
              </h2>

              <p className="text-muted-foreground mb-6">
                Whether you need website content, SEO copywriting,
                scripts, marketing copy, or professional business
                content, let's create something valuable together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">

                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get In Touch
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">
                    View Services
                  </Link>
                </Button>

              </div>

            </CardContent>

          </Card>

        </section>

      </div>

      <Footer />
    </div>
  )
}
