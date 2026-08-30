import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, Search, ArrowRight } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fatima Zaheer's Blog | Content Writing, AI & SEO Insights",
  description:
    "Explore Fatima Zaheer's blog for practical insights on content writing, AI tools, paraphrasing, academic writing, copywriting, and SEO content.",
  keywords: [
    "Fatima Zaheer blog",
    "content writing",
    "content writing tips",
    "SEO content writing",
    "AI content writing",
    "AI paraphrasing tools",
    "academic writing",
    "copywriting tips",
    "blog writing",
    "SEO copywriting",
    "content writer Pakistan",
    "freelance content writer",
    "professional content writer",
    "AI writing tools",
    "content creation",
  ],
  authors: [{ name: "Fatima Zaheer" }],
  openGraph: {
    title: "Fatima Zaheer's Blog | Content Writing, AI & SEO Insights",
    description:
      "Read Fatima Zaheer's latest articles covering content writing, AI-powered writing tools, academic writing, paraphrasing, and copywriting.",
    type: "website",
    url: "https://storycup.vercel.app/blog",
    images: [
      {
        url: "/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fatima Zaheer Blog - Content Writing and AI Insights",
      },
    ],
    siteName: "Fatima Zaheer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatima Zaheer's Blog | Content Writing & SEO Insights",
    description:
      "Discover practical content writing, AI writing, SEO, paraphrasing, and copywriting insights from Fatima Zaheer.",
    images: ["/biography.webp"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/blog",
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
}

const blogPosts = [
  {
    id: 1,
    title: "Student-Friendly AI Tools: The Key to Academic Excellence",
    excerpt:
      "Discover how student-friendly AI tools can support academic work, improve productivity, and help students achieve better learning outcomes.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    category: "AI & Education",
    date: "2024-04-10",
    readTime: "6 min read",
    liveUrl:
      "https://rondasomontano.com/revista/188782/herramientas-de-ia-amigables-para-los-estudiantes-la-clave-de-la-excelencia-academica/",
    featured: true,
  },
  {
    id: 2,
    title: "Can Rephrasing the Text Help Students Improve Their Writing Skills?",
    excerpt:
      "Learn how text rephrasing can help students develop clearer writing, improve sentence structure, and communicate their ideas more effectively.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    category: "Academic Writing",
    date: "2024-04-05",
    readTime: "7 min read",
    liveUrl:
      "https://www.goinformation.info/7425/reformulation-du-texte-peut-elle-aider-les-etudiants-a-ameliorer-capacites-redactionnelles/",
    featured: true,
  },
  {
    id: 3,
    title: "How to Summarize an Article Without Plagiarizing It?",
    excerpt:
      "A practical guide to creating accurate article summaries while maintaining originality and avoiding plagiarism.",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
    category: "Content Writing",
    date: "2024-03-28",
    readTime: "5 min read",
    liveUrl:
      "https://tecnowiz.net/come-riassumere-un-articolo-senza-plagiarlo/",
    featured: false,
  },
  {
  id: 4,
  title: "The Role of AI Paraphrasing Tools in Content Creation",
  excerpt:
    "Explore the role of AI paraphrasing tools in modern content creation and how they can help writers refine and improve their content.",
  image:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
  category: "AI & Content",
  date: "2024-03-20",
  readTime: "8 min read",
  liveUrl:
    "https://zipboard.co/blog/uncategorized/the-role-of-ai-paraphrasing-tools-in-content-creation/",
  featured: false,
},
  {
    id: 5,
    title: "Are AI Paraphrasing Tools Helpful for Writing Portuguese Articles?",
    excerpt:
      "Explore how AI paraphrasing technology can assist writers working with Portuguese articles while improving clarity and readability.",
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
    category: "AI Writing",
    date: "2024-03-15",
    readTime: "6 min read",
    liveUrl:
      "https://jornaljoseensenews.com.br/",
    featured: false,
  },
  {
    id: 6,
    title: "How AI Helps to Polish Content in Copywriting",
    excerpt:
      "Learn how AI-powered tools can help copywriters polish their content, improve readability, and create stronger written communication.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    category: "Copywriting",
    date: "2024-03-10",
    readTime: "6 min read",
    liveUrl:
      "https://jornaldobairroalto.com.br/",
    featured: false,
  },
]

const categories = [
  "All",
  "AI & Education",
  "Academic Writing",
  "Content Writing",
  "AI & Content",
  "AI Writing",
  "Copywriting",
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Writing Insights & Tips
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore Fatima Zaheer's writing insights, AI content strategies,
            academic writing tips, copywriting techniques, and practical ideas
            for creating better content.
          </p>
        </section>

        {/* Search and Categories */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />

              <Input
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary hover:text-blue-foreground"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Featured Articles
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />

                  <Badge className="absolute top-4 left-4">
                    Featured
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <Badge variant="secondary">
                      {post.category}
                    </Badge>

                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <CardTitle className="text-xl hover:text-blue transition-colors">
                    <a
                      href={post.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.title}
                    </a>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>

                  <Button
                    variant="ghost"
                    className="p-0 h-auto"
                    asChild
                  >
                    <a
                      href={post.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Recent Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <Badge variant="secondary">
                      {post.category}
                    </Badge>

                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>

                  <CardTitle className="text-lg hover:text-blue transition-colors">
                    <a
                      href={post.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.title}
                    </a>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>

                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                    >
                      <a
                        href={post.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}