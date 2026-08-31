
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, GraduationCap, Briefcase } from "lucide-react"
import type { Metadata } from "next"
import { DownloadResumeButton } from "@/components/DownloadResumeButton"

export const metadata: Metadata = {
  title: "About Fatima Zaheer | SEO Content Writer & Copywriter",
  description:
    "Learn about Fatima Zaheer, an SEO Content Writer, Copywriter, and Script Writer with 5+ years of experience in SEO content, website writing, scripts, landing pages, product descriptions, and marketing copy.",
  keywords: [
    "Fatima Zaheer",
    "SEO Content Writer",
    "Copywriter",
    "Script Writer",
    "content writer Pakistan",
    "SEO content writer Pakistan",
    "freelance content writer",
    "SEO copywriter",
    "blog writer",
    "website content writer",
    "script writer",
    "product description writer",
    "content strategist",
    "keyword research",
    "WordPress content writer",
    "AI content writer",
  ],
  authors: [{ name: "Fatima Zaheer" }],
  openGraph: {
    title: "About Fatima Zaheer | SEO Content Writer & Copywriter",
    description:
      "Discover Fatima Zaheer's professional journey, skills, education, certifications, and experience as an SEO Content Writer, Copywriter, and Script Writer.",
    type: "website",
    url: "https://storycup.vercel.app/about",
    images: [
      {
        url: "/about-dp.jpeg",
        width: 1200,
        height: 630,
        alt: "Fatima Zaheer - SEO Content Writer & Copywriter",
      },
    ],
    siteName: "Fatima Zaheer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Fatima Zaheer | SEO Content Writer",
    description:
      "Learn about Fatima Zaheer's experience in SEO content writing, copywriting, script writing, and content strategy.",
    images: ["/about-dp.jpeg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/about",
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
      "@type": "Person",
      name: "Fatima Zaheer",
      jobTitle: "SEO Content Writer | Copywriter | Script Writer",
      url: "https://storycup.vercel.app/about",
      email: "fz802335@gmail.com",
      telephone: "+92 370 628 7765",
      description:
        "Fatima Zaheer is an SEO Content Writer, Copywriter, and Script Writer with 5+ years of experience creating SEO-optimized blogs, website content, scripts, landing pages, product descriptions, and marketing copy.",
      sameAs: [
        "https://www.linkedin.com/",
      ],
    }),
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/about-dp.jpeg"
              alt="Fatima Zaheer"
              fill
              className="rounded-full border-4 border-primary/20 object-cover"
            />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I am a Fatima Zaheer. I am a content writer with 5 years of experience creating engaging, well-researched, and high-quality content for businesses across various industries.
My Expertise Includes:
• Article Writing
• Blog Writing
• Website Content Writing
• Landing Page Content
• Product Descriptions
• Copywriting
• SEO Content Writing
• Guest Posts
• Business Content
• Marketing Content
• AI-Assisted Content Creation
• Content Editing & Proofreading
Over the years, I have worked on a wide range of content projects, delivering content tailored to different audiences, industries, and business goals. From informative blog posts to compelling website copy, I am committed to creating content that provides value, maintains quality, and supports business growth.
I am passionate about creating content that informs, engages, and inspires readers while helping brands establish credibility and connect with their target audience.
          </p>

          <DownloadResumeButton />
        </section>

        {/* Professional Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Journey
          </h2>

          <div className="space-y-8">

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>Content Writer</CardTitle>
                    <p className="text-muted-foreground">
                      Hashtag Ventures • Jan 2025 - Present
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Write SEO-friendly blogs and web content, develop marketing
                  copy and landing pages, and collaborate with designers and
                  marketers to create effective digital content.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">SEO Writing</Badge>
                  <Badge variant="secondary">Web Content</Badge>
                  <Badge variant="secondary">Landing Pages</Badge>
                  <Badge variant="secondary">Marketing Copy</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>Content Writer</CardTitle>
                    <p className="text-muted-foreground">
                      Softrix Technologies • 2023 - 2024
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Produced off-page SEO content and managed multiple client
                  writing projects remotely while maintaining quality,
                  consistency, and project deadlines.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Off-Page SEO</Badge>
                  <Badge variant="secondary">Article Writing</Badge>
                  <Badge variant="secondary">Client Projects</Badge>
                  <Badge variant="secondary">Remote Work</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>Script Writer</CardTitle>
                    <p className="text-muted-foreground">
                      Enzipe • 2023 - 2024
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Created promotional and video scripts designed to communicate
                  ideas clearly, maintain audience interest, and support
                  marketing campaigns.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Script Writing</Badge>
                  <Badge variant="secondary">Video Scripts</Badge>
                  <Badge variant="secondary">Promotional Content</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>Script Writer</CardTitle>
                    <p className="text-muted-foreground">
                      Funnel X • 2023 - 2024
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Developed engaging scripts for campaigns with a focus on
                  compelling storytelling, audience engagement, and effective
                  marketing communication.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Campaign Scripts</Badge>
                  <Badge variant="secondary">Storytelling</Badge>
                  <Badge variant="secondary">Marketing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>Content Writer</CardTitle>
                    <p className="text-muted-foreground">
                      Al Fajar Tech Solutions • 2021 - 2023
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Created blogs, website content, and marketing copy for
                  businesses, helping brands communicate their services and
                  ideas through clear and engaging written content.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Blog Writing</Badge>
                  <Badge variant="secondary">Website Content</Badge>
                  <Badge variant="secondary">Marketing Copy</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>Copywriter</CardTitle>
                    <p className="text-muted-foreground">
                      Buzzfic Advertisement • 2023 - 2024
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Produced persuasive advertising copy focused on clear
                  messaging, audience engagement, and stronger communication
                  for promotional campaigns.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Copywriting</Badge>
                  <Badge variant="secondary">Advertising</Badge>
                  <Badge variant="secondary">Persuasive Writing</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Writing & Content
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>SEO Content Writing</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Copywriting</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Script Writing</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  SEO & Strategy
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Keyword Research</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>On-Page SEO</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Content Strategy</span>
                    <span>88%</span>
                  </div>
                  <Progress value={88} />
                </div>

              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Tools & Skills
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>WordPress</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Proofreading</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>AI-assisted Content</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

              </CardContent>
            </Card>

          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>BS Computer Science</CardTitle>
                    <p className="text-muted-foreground">
                      Government College University Faisalabad • 2017 - 2021
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Bachelor's degree in Computer Science, providing a strong
                  foundation in technology, research, analytical thinking,
                  communication, and digital concepts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>Diploma in Search Engine Optimization</CardTitle>
                    <p className="text-muted-foreground">
                      I-Skills Faisalabad • 2024
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Professional SEO training covering search optimization,
                  keyword research, content optimization, and SEO-focused
                  digital content practices.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Awards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Awards & Recognition
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>Best Content Writer</CardTitle>
                    <p className="text-muted-foreground">
                      Web Tech Solution
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Recognized for excellence in professional content writing
                  and delivering quality written content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue" />
                  </div>

                  <div>
                    <CardTitle>Best Freelance Article Writer</CardTitle>
                    <p className="text-muted-foreground">
                      Technogenis Faisalabad
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Recognized for high-quality freelance article writing and
                  professional content delivery.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Selected Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Selected Projects
          </h2>

          <Card>
            <CardContent className="p-8">

              <div className="flex flex-wrap justify-center gap-3">

                {[
                  "fajri.com",
                  "menzclinic.com",
                  "orlandohairrestoration.com",
                  "trackmypackage.net",
                ].map((project) => (
                  <Badge
                    key={project}
                    variant="secondary"
                    className="text-sm px-4 py-2"
                  >
                    {project}
                  </Badge>
                ))}

              </div>

            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  )
}
