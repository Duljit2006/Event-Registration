"use client";
import GoogleSignInButton from "@/components/auth/GoogleSignInButton";
import { useAuth } from "@/components/auth/AuthProvider";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
export default function LandingPage() {
  const { user, userData } = useAuth();
  const router = useRouter();

  const handleRegisterClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (userData) {
      router.push("/dashboard");
    } else if (user && !userData) {
      // Modal should already be visible, so just scroll to top or let it be
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
      } catch (error) {
        console.error("Login failed", error);
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-[1440px] mx-auto px-margin md:px-margin-md lg:px-margin-lg flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <img
              alt="GDG Logo Mark"
              className="h-8 w-auto object-contain"
              src="/gdg_logo.png"
            />
            <div className="flex items-center gap-space-sm">
              <span className="font-title-lg text-title-lg text-on-surface tracking-tight">
                GDG Guwahati
              </span>
              <div className="hidden sm:flex items-center gap-space-xs ml-space-xs">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="w-2 h-2 rounded-full bg-error"></span>
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-space-xl">
            <nav
              className="hidden md:flex items-center gap-space-xl"
              data-active-classes="text-primary font-bold"
            >
              <a
                aria-current="page"
                className="transition-colors text-primary font-bold"
                data-path="landing-page"
                href="#"
              >
                About
              </a>
              <a
                className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="ticket-dashboard"
                href="#"
              >
                Schedule
              </a>
              <a
                className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="registration-modal"
                href="#"
              >
                FAQ
              </a>
            </nav>
            <div className="flex items-center gap-space-md">
              <GoogleSignInButton />
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-20 flex-1 bg-surface">
        <div className="flex flex-col w-full">
          {/*  */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
            <div className="absolute top-48 right-0 w-80 h-80 rounded-full bg-error/5 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-tertiary-fixed-dim/10 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
            {/*  */}
            <section className="relative z-10 max-w-[1440px] mx-auto px-margin md:px-margin-md lg:px-margin-lg pt-space-2xl pb-space-3xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-gutter-lg items-center">
                {/*  */}
                <div className="lg:col-span-7 flex flex-col items-start space-y-space-lg">
                  {/*  */}
                  <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container shadow-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface-variant font-semibold uppercase tracking-wider">
                      Annual Developer Gathering
                    </span>
                  </div>
                  {/*  */}
                  <div className="space-y-space-xs max-w-2xl">
                    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight font-bold">
                      GDG DevFest <span className="text-primary">2026</span>
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed pt-space-xs max-w-xl">
                      Join the largest local developer conference. Build, learn,
                      and connect with engineers, designers, and innovators.
                    </p>
                  </div>
                  {/*  */}
                  <div className="w-full pt-space-sm">
                    <div className="flex flex-wrap items-center gap-space-md sm:gap-space-lg p-space-md rounded-2xl bg-surface-container-low/80 backdrop-blur-sm">
                      {/*  */}
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                          <span
                            className="material-symbols-outlined text-[20px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            calendar_today
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                            Date
                          </span>
                          <span className="font-title-lg text-title-lg text-on-surface">
                            Oct 12, 2026
                          </span>
                        </div>
                      </div>
                      <div className="hidden sm:block w-px h-8 bg-outline-variant/50"></div>
                      {/*  */}
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-error">
                          <span
                            className="material-symbols-outlined text-[20px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            schedule
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                            Time
                          </span>
                          <span className="font-title-lg text-title-lg text-on-surface">
                            9:00 AM - 5:00 PM
                          </span>
                        </div>
                      </div>
                      <div className="hidden sm:block w-px h-8 bg-outline-variant/50"></div>
                      {/*  */}
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                          <span
                            className="material-symbols-outlined text-[20px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            location_on
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                            Venue
                          </span>
                          <span className="font-title-lg text-title-lg text-on-surface">
                            Tech Hub, Guwahati
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                    <a
                      className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-on-primary font-title-lg text-title-lg hover:bg-primary-container shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 group cursor-pointer"
                      onClick={handleRegisterClick}
                    >
                      <span>{userData ? "View Ticket" : "Register Now"}</span>
                      <span className="material-symbols-outlined ml-space-sm text-[22px] transition-transform duration-200 group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                    <a
                      className="inline-flex items-center justify-center px-6 h-14 rounded-full bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors"
                      href="#expect"
                    >
                      Explore Agenda
                    </a>
                  </div>
                  {/*  */}
                  <div className="flex items-center gap-space-xl pt-space-md text-on-surface-variant">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        12+
                      </span>
                      <span className="font-body-sm text-body-sm">
                        Deep-Dive Tracks
                      </span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
                    <div className="flex items-center gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        800+
                      </span>
                      <span className="font-body-sm text-body-sm">
                        Attendees
                      </span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
                    <div className="flex items-center gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        18
                      </span>
                      <span className="font-body-sm text-body-sm">
                        GDE Speakers
                      </span>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="lg:col-span-5 relative flex justify-center items-center">
                  <div className="relative w-full max-w-[540px]">
                    {/*  */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-tertiary-fixed-dim/20 -z-10 animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-3xl bg-primary-fixed/40 -z-10 rotate-12"></div>
                    {/*  */}
                    <div className="relative overflow-hidden rounded-3xl bg-surface-container-lowest shadow-xl p-space-sm transition-all duration-300 hover:shadow-2xl">
                      <img
                        alt="GDG DevFest 2026 Developer Community Illustration"
                        className="w-full h-auto object-cover rounded-2xl aspect-[1.34]"
                        src="/hero_illustration.png"
                      />
                      {/*  */}
                      <div className="absolute bottom-space-md right-space-md px-space-md py-space-xs rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-md flex items-center gap-space-xs">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                        <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Live in Guwahati
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*  */}
            <section
              className="relative z-10 max-w-[1440px] mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-2xl md:py-space-3xl"
              id="expect"
            >
              {/*  */}
              <div className="flex flex-col items-start mb-space-2xl">
                <div className="flex items-center gap-space-xs mb-space-xs">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
                    Conference Highlights
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
                  What to Expect
                </h2>
                {/*  */}
                <div className="flex items-center gap-1 mt-space-sm w-36 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-primary rounded-full"></div>
                  <div className="h-full w-1/4 bg-error rounded-full"></div>
                  <div className="h-full w-1/4 bg-tertiary-fixed-dim rounded-full"></div>
                  <div className="h-full w-1/4 bg-secondary rounded-full"></div>
                </div>
              </div>
              {/*  */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
                {/*  */}
                <div className="group relative flex flex-col justify-between p-space-xl rounded-3xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden">
                  {/*  */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary to-primary-container"></div>
                  <div>
                    {/*  */}
                    <div className="w-16 h-16 rounded-2xl bg-primary-fixed/40 flex items-center justify-center text-primary mb-space-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="material-symbols-outlined text-[32px]">
                        terminal
                      </span>
                    </div>
                    {/*  */}
                    <div className="flex items-center justify-between gap-space-sm mb-space-sm">
                      <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Workshops
                      </h3>
                      <span className="px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                        Hands-on
                      </span>
                    </div>
                    {/*  */}
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Hands-on coding sessions led by industry experts covering
                      Gemini, Android, Cloud, and Web. Build end-to-end
                      practical prototypes in small, collaborative cohorts.
                    </p>
                  </div>
                  {/*  */}
                  <div className="pt-space-xl mt-space-lg flex items-center justify-between">
                    <div className="flex items-center gap-space-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px]">
                        laptop_chromebook
                      </span>
                      <span className="font-label-sm text-label-sm font-medium">
                        Bring Laptop
                      </span>
                    </div>
                    <a
                      className="inline-flex items-center text-primary font-label-lg text-label-lg group-hover:underline"
                      href="#"
                    >
                      <span>View Sessions</span>
                      <span className="material-symbols-outlined text-[18px] ml-1 transition-transform group-hover:translate-x-0.5">
                        chevron_right
                      </span>
                    </a>
                  </div>
                </div>
                {/*  */}
                <div className="group relative flex flex-col justify-between p-space-xl rounded-3xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden">
                  {/*  */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-error to-tertiary-fixed-dim"></div>
                  <div>
                    {/*  */}
                    <div className="w-16 h-16 rounded-2xl bg-error-container/40 flex items-center justify-center text-error mb-space-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="material-symbols-outlined text-[32px]">
                        record_voice_over
                      </span>
                    </div>
                    {/*  */}
                    <div className="flex items-center justify-between gap-space-sm mb-space-sm">
                      <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Tech Talks
                      </h3>
                      <span className="px-space-sm py-0.5 rounded-full bg-error/10 text-error font-label-sm text-label-sm font-semibold">
                        Keynotes
                      </span>
                    </div>
                    {/*  */}
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Inspiring keynotes and deep-dive technical sessions by
                      Google Developer Experts and engineering leaders exploring
                      AI architectures, modern infra, and cloud scalability.
                    </p>
                  </div>
                  {/*  */}
                  <div className="pt-space-xl mt-space-lg flex items-center justify-between">
                    <div className="flex items-center gap-space-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px]">
                        mic
                      </span>
                      <span className="font-label-sm text-label-sm font-medium">
                        Live Q&amp;A
                      </span>
                    </div>
                    <a
                      className="inline-flex items-center text-error font-label-lg text-label-lg group-hover:underline"
                      href="#"
                    >
                      <span>Speaker List</span>
                      <span className="material-symbols-outlined text-[18px] ml-1 transition-transform group-hover:translate-x-0.5">
                        chevron_right
                      </span>
                    </a>
                  </div>
                </div>
                {/*  */}
                <div className="group relative flex flex-col justify-between p-space-xl rounded-3xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden">
                  {/*  */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-secondary to-secondary-fixed-dim"></div>
                  <div>
                    {/*  */}
                    <div className="w-16 h-16 rounded-2xl bg-secondary-container/50 flex items-center justify-center text-secondary mb-space-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="material-symbols-outlined text-[32px]">
                        groups
                      </span>
                    </div>
                    {/*  */}
                    <div className="flex items-center justify-between gap-space-sm mb-space-sm">
                      <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Networking
                      </h3>
                      <span className="px-space-sm py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                        Community
                      </span>
                    </div>
                    {/*  */}
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Connect with fellow developers, founders, students, and
                      recruiters across the tech ecosystem. Discover mentorship,
                      career opportunities, and project partners.
                    </p>
                  </div>
                  {/*  */}
                  <div className="pt-space-xl mt-space-lg flex items-center justify-between">
                    <div className="flex items-center gap-space-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px]">
                        coffee
                      </span>
                      <span className="font-label-sm text-label-sm font-medium">
                        Lounges &amp; Mixer
                      </span>
                    </div>
                    <a
                      className="inline-flex items-center text-secondary font-label-lg text-label-lg group-hover:underline"
                      href="#"
                    >
                      <span>Join Channels</span>
                      <span className="material-symbols-outlined text-[18px] ml-1 transition-transform group-hover:translate-x-0.5">
                        chevron_right
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/*  */}
            <section className="max-w-[1440px] mx-auto px-margin md:px-margin-md lg:px-margin-lg pb-space-3xl">
              <div className="w-full rounded-3xl bg-surface-container-low p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
                <div className="space-y-space-xs text-center md:text-left">
                  <h4 className="font-title-lg text-title-lg text-on-surface font-bold">
                    Interested in partnering with DevFest Guwahati?
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Showcase your engineering brand to 800+ passionate
                    developers and tech decision-makers.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-center px-space-lg h-12 rounded-full bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:shadow-md hover:bg-surface transition-all whitespace-nowrap"
                  href="#"
                >
                  Sponsor DevFest 2026
                </a>
              </div>
            </section>
            {/*  */}
            <div className="w-full bg-surface-container-lowest/60">
              <div className="max-w-[1440px] mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
                {/*  */}
                <div className="flex items-center gap-space-sm">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    #DevFest2026
                  </span>
                  <span className="text-on-surface-variant font-body-sm text-body-sm">
                    • Guwahati Edition
                  </span>
                </div>
                {/*  */}
                <div className="flex items-center gap-space-xs text-on-surface-variant">
                  {/*  */}
                  <a
                    aria-label="DevFest on Twitter"
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container hover:text-primary transition-colors"
                    href="https://twitter.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/*  */}
                  <a
                    aria-label="DevFest on LinkedIn"
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container hover:text-primary transition-colors"
                    href="https://linkedin.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.28a1.64 1.64 0 0 0-1.66 1.64c0 .91.74 1.64 1.66 1.64.9 0 1.64-.73 1.64-1.64 0-.9-.74-1.64-1.64-1.64Z" />
                    </svg>
                  </a>
                  {/*  */}
                  <a
                    aria-label="DevFest on YouTube"
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container hover:text-error transition-colors"
                    href="https://youtube.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.19C2 8.76 2 12 2 12s0 3.24.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.24 22 12 22 12s0-3.24-.42-4.81M10 15V9l5.2 3z" />
                    </svg>
                  </a>
                  {/*  */}
                  <a
                    aria-label="DevFest on GitHub"
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container hover:text-on-surface transition-colors"
                    href="https://github.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-xl flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="font-headline-sm text-headline-sm text-primary">
              #DevFest2026
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant hidden sm:inline">
              • Google Developer Group Guwahati
            </span>
          </div>
          <div className="flex items-center gap-space-lg text-on-surface-variant">
            <a
              className="font-label-md text-label-md hover:text-on-surface transition-colors"
              href="#"
            >
              Community Guidelines
            </a>
            <a
              className="font-label-md text-label-md hover:text-on-surface transition-colors"
              href="#"
            >
              Terms &amp; Privacy
            </a>
            <div className="flex items-center gap-space-sm ml-space-sm">
              <a
                aria-label="Global Community"
                className="p-space-xs rounded-full hover:bg-surface-container hover:text-on-surface transition-colors flex items-center justify-center"
                href="#"
              >
                <span className="material-symbols-outlined text-title-lg">
                  public
                </span>
              </a>
              <a
                aria-label="Event Schedule Feed"
                className="p-space-xs rounded-full hover:bg-surface-container hover:text-on-surface transition-colors flex items-center justify-center"
                href="#"
              >
                <span className="material-symbols-outlined text-title-lg">
                  rss_feed
                </span>
              </a>
              <a
                aria-label="Contact Organizers"
                className="p-space-xs rounded-full hover:bg-surface-container hover:text-on-surface transition-colors flex items-center justify-center"
                href="#"
              >
                <span className="material-symbols-outlined text-title-lg">
                  mail
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
