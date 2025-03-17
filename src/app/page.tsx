import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Code,
  Users,
  Trophy,
  Lightbulb,
  Rocket,
  Brain,
  Link,
  Globe,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 bg-gradient-radial from-purple-900/30 via-black to-black animate-gradient-slow">
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl animate-float-medium"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-violet-600/20 blur-3xl animate-float-fast"></div>

          {/* Additional orbs for more visual interest */}
          <div className="absolute top-3/4 left-1/3 w-72 h-72 rounded-full bg-fuchsia-600/15 blur-3xl animate-float-medium"></div>
          <div className="absolute bottom-1/4 right-1/2 w-48 h-48 rounded-full bg-indigo-600/15 blur-3xl animate-float-fast"></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 z-0 bg-grid opacity-20"></div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gradient-animated tracking-tight">
              CodeClash 2.0
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white/90 text-glow">
              The Ultimate 24-Hour Hackathon
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 bg-purple-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-purple-500/30 glow-border">
                <Clock className="h-5 w-5 text-purple-300" />
                <span>April 26-27, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-purple-500/30 glow-border">
                <Code className="h-5 w-5 text-purple-300" />
                <span>24 Hours of Hacking</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-purple-500/30 glow-border">
                <Users className="h-5 w-5 text-purple-300" />
                <span>Open to All</span>
              </div>
            </div>
            <div className="pt-8">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg font-semibold animate-pulse-glow transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-300" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black/40 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-800/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gradient tracking-tight">
              ABOUT
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              CodeClash is back with its second edition, promising bigger
              challenges, better rewards, and an electrifying hackathon
              experience! Whether you're a seasoned developer, an aspiring
              innovator, or a problem-solver looking to build impactful
              solutions—this is your battlefield to showcase your skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-800/50 hover:border-purple-600/50 transition-all backdrop-blur-sm glow-border hover:glow-border-intense group hover:-translate-y-1 duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-800/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-8 w-8 text-purple-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-200 group-hover:text-gradient-animated">
                  Dates
                </h3>
                <p className="text-gray-300">April 26th-27th, 2025</p>
              </div>

              <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-800/50 hover:border-purple-600/50 transition-all backdrop-blur-sm glow-border hover:glow-border-intense group hover:-translate-y-1 duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-800/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="h-8 w-8 text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-200 group-hover:text-gradient-animated">
                  Venue
                </h3>
                <p className="text-gray-300">To be announced</p>
              </div>

              <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-800/50 hover:border-purple-600/50 transition-all backdrop-blur-sm glow-border hover:glow-border-intense group hover:-translate-y-1 duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-800/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-purple-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-200 group-hover:text-gradient-animated">
                  Who Can Participate?
                </h3>
                <p className="text-gray-300">
                  Open to students and tech enthusiasts of all backgrounds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-20 bg-gradient-to-b from-black/60 to-purple-950/30 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10"></div>
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl animate-float-slow"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient-animated tracking-tight">
                🔥 What's New in CodeClash 2.0?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto animate-pulse-glow rounded-full"></div>
            </div>

            <div className="bg-purple-900/20 p-8 rounded-xl border border-purple-800/50 mb-12 backdrop-blur-sm glow-border hover:glow-border-intense transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="p-3 bg-purple-800/50 rounded-full animate-pulse-glow">
                    <Lightbulb className="h-8 w-8 text-purple-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient tracking-tight">
                    Hack Your Way to Glory
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    This is not just a coding competition—it's an experience!
                    You'll have 24 hours to brainstorm, build, and present
                    innovative solutions based on real-world problem statements.
                    Whether you want to revolutionize industries with AI,
                    disrupt finance with blockchain, or solve global
                    challenges—this is your chance to make it happen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/20 p-8 rounded-xl border border-purple-800/50 backdrop-blur-sm glow-border hover:glow-border-intense transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-6 text-gradient tracking-tight flex items-center gap-2">
                <Rocket className="h-6 w-6" />
                Themed Tracks & Open Innovation
              </h3>
              <p className="text-gray-300 mb-6">
                This year, we are bringing a mix of structured themes and open
                innovation to give you the freedom to create:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Brain className="h-5 w-5 text-purple-400" />,
                    title: "AI & Machine Learning",
                    description: "Build smarter, data-driven applications.",
                  },
                  {
                    icon: <Link className="h-5 w-5 text-purple-400" />,
                    title: "Blockchain & Web3",
                    description:
                      "Work on decentralized solutions for the future.",
                  },
                  {
                    icon: <Globe className="h-5 w-5 text-purple-400" />,
                    title: "Sustainability & Social Impact",
                    description: "Use tech to drive change.",
                  },
                  {
                    icon: <Sparkles className="h-5 w-5 text-purple-400" />,
                    title: "Wildcard/Open Innovation",
                    description: "Any groundbreaking idea is welcome!",
                  },
                ].map((track, index) => (
                  <div
                    key={index}
                    className="bg-black/30 p-6 rounded-lg hover:bg-black/40 transition-all border border-purple-700/30 hover:border-purple-500/50 group hover:-translate-y-1 duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-purple-900/50 rounded-full group-hover:animate-pulse-glow transition-all duration-300">
                        {track.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-purple-200 group-hover:text-gradient-animated">
                        {track.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 ml-11">{track.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-black/40 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl animate-float-slow"></div>
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-800/10 blur-3xl animate-float-medium"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient tracking-tight">
                What Participants Can Expect
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto animate-pulse-glow rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  icon: <Trophy className="h-8 w-8 text-purple-300" />,
                  title: "Bigger & Better Prizes",
                  description:
                    "The best projects will win exciting prizes, exclusive goodies, and recognition from industry experts. Stay tuned for prize details!",
                },
                {
                  icon: (
                    <svg
                      className="h-8 w-8 text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  ),
                  title: "Industry Mentors & Expert Guidance",
                  description:
                    "Struggling with an idea? Need help debugging your code? Our team of mentors will be available throughout the hackathon to guide you and help you refine your project.",
                },
                {
                  icon: (
                    <svg
                      className="h-8 w-8 text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  ),
                  title: "Pitch Your Idea to a Panel of Judges",
                  description:
                    "At the end of 24 hours, teams will present their projects to an esteemed panel of judges, including tech leaders and entrepreneurs. Get constructive feedback, potential investment opportunities, and a platform to showcase your skills.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-purple-900/20 border-purple-800/50 hover:border-purple-600/50 transition-all backdrop-blur-sm glow-border hover:glow-border-intense group hover:-translate-y-1 duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0 flex items-start justify-center">
                        <div className="w-16 h-16 bg-purple-800/30 rounded-full flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-gradient group-hover:text-gradient-animated">
                          {item.title}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black/60 to-purple-950/30 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl animate-float-slow"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient tracking-tight">
                Perks & Benefits
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto animate-pulse-glow rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Hack for 24 hours",
                  description:
                    "Non-stop innovation, brainstorming, and coding.",
                },
                {
                  title: "Exclusive Swag",
                  description:
                    "Get certificates, event merchandise, and exciting goodies!",
                },
                {
                  title: "Networking Opportunities",
                  description:
                    "Meet fellow developers, industry leaders, and potential future teammates.",
                },
                {
                  title: "Hands-on Learning",
                  description:
                    "Work with the latest technologies and industry-relevant problem statements.",
                },
                {
                  title: "Internship & Job Opportunities",
                  description:
                    "Stand a chance to be noticed by top recruiters and companies.",
                },
              ].map((perk, index) => (
                <div
                  key={index}
                  className="bg-purple-900/20 p-6 rounded-xl border border-purple-800/50 hover:border-purple-600/50 transition-all backdrop-blur-sm glow-border hover:glow-border-intense group hover:-translate-y-1 duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-purple-800/50 rounded-full flex items-center justify-center text-purple-200 group-hover:animate-pulse-glow">
                      ✅
                    </div>
                    <h3 className="text-xl font-semibold text-purple-200 group-hover:text-gradient-animated">
                      {perk.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 pl-11">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Participate Section */}
      <section className="py-20 bg-black/40 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-800/10 blur-3xl animate-float-medium"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient tracking-tight">
                How to Participate?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto animate-pulse-glow rounded-full"></div>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-purple-800 hidden md:block"></div>

              <div className="space-y-12">
                {[
                  {
                    number: "1️⃣",
                    title: "Register Online",
                    description: "Sign up and secure your spot.",
                  },
                  {
                    number: "2️⃣",
                    title: "Form a Team",
                    description: "Build your dream team or participate solo!",
                  },
                  {
                    number: "3️⃣",
                    title: "Start Hacking",
                    description: "Code, create, and innovate for 24 hours.",
                  },
                  {
                    number: "4️⃣",
                    title: "Pitch Your Idea",
                    description:
                      "Present your project and compete for top prizes.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-6 group">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-800 rounded-full flex items-center justify-center text-2xl z-10 relative animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                    </div>
                    <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-800/50 flex-1 backdrop-blur-sm glow-border hover:glow-border-intense group-hover:-translate-y-1 transition-all duration-300">
                      <h3 className="text-xl font-bold mb-2 text-gradient group-hover:text-gradient-animated">
                        {step.title}
                      </h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-full px-10 py-7 text-lg font-semibold animate-pulse-glow transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-900/10 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gradient-animated mb-6">
              CodeClash 2.0
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              The Ultimate 24-Hour Hackathon Experience
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              {["Twitter", "Instagram", "LinkedIn", "GitHub"].map(
                (social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-purple-300 transition-colors px-4 py-2 rounded-full hover:bg-purple-900/30 border border-transparent hover:border-purple-500/30"
                  >
                    {social}
                  </a>
                )
              )}
            </div>

            <div className="text-gray-500 text-sm">
              <p>© 2025 CodeClash. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
