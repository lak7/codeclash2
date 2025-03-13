"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Add these new CSS keyframes animations to the top of the file, just after the imports
// In a real implementation, these would be in your tailwind.config.js file or globals.css
// This is just a placeholder to show what animations to add
const animationStyles = `
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes float-slow {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes pulse-slow {
  0% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.4;
    transform: scale(1);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animate-shimmer {
  animation: shimmer 8s infinite linear;
  background: linear-gradient(90deg, rgba(168,85,247,0), rgba(168,85,247,0.4), rgba(168,85,247,0));
  background-size: 200% 100%;
}
`;

export default function Home() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Set the hackathon date (April 19th, 2024)
  useEffect(() => {
    const hackathonDate = new Date("2024-04-19T10:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = hackathonDate - now;

      if (distance > 0) {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-purple-900/30 to-black opacity-95"></div>

        {/* Animated grid overlay - Squid Game inspired - enhanced */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik00MCAyMGgtNDBtMjAtMjB2NDAiIHN0cm9rZT0icmdiYSgxNjgsMTI2LDI1NSwwLjA1KSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

        {/* Enhanced radial gradients for depth */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-purple-600/15 via-transparent to-transparent animate-pulse-slow"></div>
        <div
          className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-radial from-purple-800/15 via-transparent to-transparent animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Squid Game inspired geometric shapes with enhanced glow effects */}
        <div className="absolute top-20 left-20 w-40 h-40 border-[6px] border-purple-500 rounded-full opacity-30 animate-pulse-slow before:absolute before:inset-0 before:rounded-full before:bg-purple-500/30 before:blur-2xl"></div>
        <div
          className="absolute top-40 right-40 w-48 h-48 border-[6px] border-purple-500 opacity-30 animate-float-slow"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animationDuration: "15s",
          }}
        >
          <div
            className="absolute inset-0 bg-purple-500/20 blur-2xl"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          ></div>
        </div>
        <div
          className="absolute bottom-40 left-1/3 w-40 h-40 border-[6px] border-purple-500 opacity-30 animate-pulse-slow"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            animationDuration: "10s",
          }}
        >
          <div
            className="absolute inset-0 bg-purple-500/20 blur-2xl"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          ></div>
        </div>

        {/* Enhanced particles/dots effect */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTY4LDEyNiwyNTUsMC4yKSIvPjwvc3ZnPg==')] opacity-40"></div>

        {/* Enhanced glowing orbs with stronger blur effects */}
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-purple-600/25 blur-[120px] animate-pulse-slow mix-blend-screen"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[50rem] h-[50rem] rounded-full bg-purple-800/25 blur-[150px] animate-pulse-slow mix-blend-screen"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Header - Enhanced with stronger blur effect */}
      <header className="relative z-10 flex justify-between items-center p-6 md:p-8 backdrop-blur-xl bg-black/40 border-b border-purple-500/40 shadow-lg shadow-purple-900/30">
        <div className="flex items-center group">
          <div className="w-12 h-12 mr-4 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-700 rounded-full shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300"></div>
            <div className="absolute inset-[3px] bg-black rounded-full"></div>
            <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold flex flex-col md:flex-row items-start md:items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-600 drop-shadow-[0_0_5px_rgba(168,85,247,0.7)]">
              CodeClash
            </span>
            <span className="text-white ml-0 md:ml-2 drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">
              {" "}
              2.0
            </span>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          {["About", "Themes", "Timeline", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white hover:text-purple-300 transition-colors font-medium px-2 py-1 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300 shadow-sm shadow-purple-500/50"></span>
            </a>
          ))}
        </nav>
        <button className="md:hidden text-white p-2 rounded-full hover:bg-purple-900/50 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {/* Hero Section - Replace date text with "Coming Soon" */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-4 text-center">
        <div className="animate-float-slow max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight relative">
            <span className="absolute -inset-x-8 -inset-y-4 bg-purple-500/10 blur-xl rounded-3xl"></span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-600 relative drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
              CodeClash
            </span>
            <span className="text-white relative drop-shadow-[0_0_3px_rgba(255,255,255,0.7)]">
              {" "}
              2.0
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto text-white/90 font-light leading-relaxed">
            An exhilarating 24-hour hackathon experience that merges innovation
            with determination!
          </p>

          {/* Enhanced visual card with "Coming Soon" */}
          <div className="relative w-full max-w-2xl mx-auto h-44 mb-16 group">
            {/* Enhanced glow effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-900/50 via-purple-600/30 to-purple-900/50 rounded-[2rem] blur-2xl opacity-80 animate-pulse-slow"></div>
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-xl rounded-3xl border border-purple-500/50 group-hover:border-purple-500/70 transition-all duration-500"></div>

              {/* Enhanced glowing orbs */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 opacity-70 mix-blend-screen"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-800/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 opacity-70 mix-blend-screen"></div>

              {/* Enhanced animated grid */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik00MCAyMGgtNDBtMjAtMjB2NDAiIHN0cm9rZT0icmdiYSgxNjgsMTI2LDI1NSwwLjA3KSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

              {/* Animated Squid Game shapes with enhanced glow */}
              <div className="absolute top-1/4 left-8 w-12 h-12 border-[3px] border-purple-500/80 rounded-full opacity-80 animate-pulse-slow">
                <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl"></div>
              </div>
              <div
                className="absolute bottom-1/4 right-8 w-12 h-12 border-[3px] border-purple-500/80 opacity-80 animate-float-slow"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              >
                <div
                  className="absolute inset-0 bg-purple-500/30 blur-xl"
                  style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                ></div>
              </div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 border-[3px] border-purple-500/80 opacity-80 animate-spin-slow"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  animationDuration: "20s",
                }}
              >
                <div
                  className="absolute inset-0 bg-purple-500/30 blur-xl"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                ></div>
              </div>
            </div>

            {/* "Coming Soon" text with enhanced typography and glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative group-hover:scale-105 transition-transform duration-500">
                <div className="absolute -inset-6 bg-purple-500/30 blur-2xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-5xl font-black text-white relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-500 animate-shimmer relative drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]">
                    Coming Soon
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-16">
            <div className="w-14 h-14 border-4 border-purple-500 rounded-full mr-6 relative group">
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white relative">
              <span className="relative">About </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-600 relative drop-shadow-[0_0_3px_rgba(168,85,247,0.5)]">
                The Hackathon
              </span>
            </h2>
            <div
              className="w-14 h-14 border-4 border-purple-500 ml-6 relative group"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            >
              <div
                className="absolute inset-0 bg-purple-500/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              ></div>
            </div>
          </div>

          <div className="bg-black/70 backdrop-blur-lg p-10 md:p-12 rounded-3xl border border-purple-500/30 shadow-xl shadow-purple-500/10 mb-20 transform transition-all hover:shadow-purple-500/20 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
              "CodeClash is an exhilarating 24-hour hackathon experience that
              merges innovation with determination! Mark your calendars for
              April 19th-20th and prepare yourself, tech enthusiasts, for a
              coding extravaganza designed to ignite your passion and test your
              skills like never before. Dive into a marathon of coding,
              collaboration, and creativity at this ultimate hackathon event.
              Join us at Bharati vidyapeeth college of engineering for an
              adrenaline fueled adventure where ideas transform into reality and
              dreams into achievements. Unleash your coding genius, compete with
              the best, and let every keystroke bring you closer to victory.
              This is more than just a hackathon; it's a journey of discovery,
              collaboration, and celebration of the coding spirit. Join us and
              be part of something extraordinary!"
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              Participants at Code Clash will have the chance to demonstrate
              their abilities, gain insights from industry leaders, and build
              enduring relationships within the dynamic tech community.
            </p>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
            What participants can{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-600 drop-shadow-[0_0_2px_rgba(168,85,247,0.5)]">
              expect
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-black/70 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-purple-500/30 shadow-lg shadow-purple-500/10 transform transition-all hover:scale-[1.02] hover:shadow-purple-500/30 group">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center mr-6 shadow-lg shadow-purple-500/30 relative group-hover:shadow-purple-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-2xl font-bold text-white relative">
                    01
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  Expert Mentorship
                </h4>
              </div>
              <p className="text-white/80 leading-relaxed ml-2">
                Distinguished mentors will offer guidance to participants,
                helping them acquire valuable problem-solving skills and
                navigate technical challenges throughout the event. Our mentors
                come from diverse technical backgrounds to support all aspects
                of your project.
              </p>
            </div>

            <div className="bg-black/70 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-purple-500/30 shadow-lg shadow-purple-500/10 transform transition-all hover:scale-[1.02] hover:shadow-purple-500/30 group">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center mr-6 shadow-lg shadow-purple-500/30 relative group-hover:shadow-purple-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-2xl font-bold text-white relative">
                    02
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  Engaging Experience
                </h4>
              </div>
              <p className="text-white/80 leading-relaxed ml-2">
                The event promises engaging activities, delightful cuisine, and
                intellectual stimulation throughout. Additionally, participants
                can enjoy exclusive perks during the event designed to enhance
                creativity and foster a competitive yet collaborative
                atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="relative z-10 py-20 px-4 md:px-8 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-16">
            <div
              className="w-12 h-12 border-4 border-purple-500 mr-6 relative group"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            >
              <div
                className="absolute inset-0 bg-purple-500/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              ></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white relative">
              <span className="relative">Perks & </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-600 relative drop-shadow-[0_0_3px_rgba(168,85,247,0.5)]">
                Benefits
              </span>
            </h2>
            <div
              className="w-12 h-12 border-4 border-purple-500 ml-6 relative group"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            >
              <div
                className="absolute inset-0 bg-purple-500/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Prize Pool and Goodies",
                description:
                  "Exciting prize pool with goodies and swags for winners and participants.",
                icon: "🏆",
              },
              {
                title: "Participation Certificates",
                description:
                  "Each participant will be awarded a certificate of participation. Winners receive special recognition certificates!",
                icon: "📜",
              },
              {
                title: "Mentorship and Guidance",
                description:
                  "Seasoned mentors offer invaluable guidance, fostering an environment where every individual can enhance their skills.",
                icon: "👨‍🏫",
              },
              {
                title: "Fun and Surprise Gifts",
                description:
                  "Throughout the event, participants can look forward to exciting surprises and gifts, enhancing the fun and anticipation.",
                icon: "��",
              },
              {
                title: "Complimentary Refreshments",
                description:
                  "Indulge in a culinary journey of energy and motivation with complimentary food and refreshments throughout the hackathon.",
                icon: "🍕",
              },
              {
                title: "Networking Opportunities",
                description:
                  "Connect with like-minded individuals, industry professionals, and potential collaborators for future projects.",
                icon: "��",
              },
            ].map((perk, index) => (
              <div
                key={index}
                className="bg-black/70 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-purple-500/30 shadow-lg shadow-purple-500/10 transform transition-all hover:scale-[1.03] hover:shadow-purple-500/30 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500 relative">
                  <div className="absolute -inset-2 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">{perk.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-600 drop-shadow-[0_0_1px_rgba(168,85,247,0.5)]">
                  {perk.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-16">
            <div className="w-12 h-12 border-4 border-purple-500 rounded-full mr-6 relative group">
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-600 drop-shadow-[0_0_3px_rgba(168,85,247,0.5)]">
                FAQ
              </span>
            </h2>
            <div
              className="w-12 h-12 border-4 border-purple-500 ml-6 relative group"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            >
              <div
                className="absolute inset-0 bg-purple-500/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Who can participate in CodeClash 2.0?",
                answer:
                  "CodeClash 2.0 is open to all college students with a passion for coding and innovation.",
              },
              {
                question: "How many members can be in a team?",
                answer:
                  "Teams can have 2-4 members. Solo participation is also allowed but team participation is encouraged.",
              },
              {
                question: "Is there a registration fee?",
                answer:
                  "No, participation in CodeClash 2.0 is completely free of charge.",
              },
              {
                question: "What should I bring to the hackathon?",
                answer:
                  "Participants should bring their laptops, chargers, and any other devices they might need. Food and refreshments will be provided.",
              },
              {
                question: "Will there be internet connectivity?",
                answer:
                  "Yes, high-speed internet connectivity will be provided throughout the event.",
              },
              {
                question:
                  "Can I start working on my project before the hackathon?",
                answer:
                  "No, all projects must be started and completed during the hackathon to ensure fair competition.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-black/70 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-purple-500/30 shadow-lg shadow-purple-500/10 transform transition-all hover:shadow-purple-500/30 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-500/30 opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
                <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-600 drop-shadow-[0_0_1px_rgba(168,85,247,0.5)] group-hover:translate-x-1 transition-transform duration-300">
                  {faq.question}
                </h3>
                <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Change GDSC to DSC */}
      <footer className="relative z-10 py-12 px-4 md:px-8 bg-black/90 border-t border-purple-500/30 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <div className="w-10 h-10 mr-4 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-700 rounded-full shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300"></div>
                  <div className="absolute inset-[3px] bg-black rounded-full"></div>
                  <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h2 className="text-2xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-600 drop-shadow-[0_0_2px_rgba(168,85,247,0.5)]">
                    CodeClash 2.0
                  </span>
                  <span className="text-white"> By DSC BVP</span>
                </h2>
              </div>
              <p className="text-white/70 mt-3 ml-14">
                Venue: Bharati Vidyapeeth College of Engineering, New Delhi
              </p>
            </div>

            <div className="flex space-x-6">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.566-.247-2.229-.616-.054.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  ),
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white/70 hover:text-purple-400 transition-colors p-3 rounded-full hover:bg-purple-900/30 relative group"
                >
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-purple-500/30 blur-md transition-opacity duration-300"></div>
                  <div className="relative">{social.icon}</div>
                </a>
              ))}
            </div>
          </div>

          <div className="text-center text-white/50 text-sm relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-24 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            <p>
              Made with <span className="text-purple-400">❤️</span> by the DSC
              Tech Team!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
