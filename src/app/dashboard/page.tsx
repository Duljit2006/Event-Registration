"use client";
import { useAuth } from "@/components/auth/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import confetti from "canvas-confetti";
import { auth } from "@/lib/firebase";

export default function DashboardPage() {
  const { user, userData, loading } = useAuth();
  const router = useRouter();
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isEmailing, setIsEmailing] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailTicket = async () => {
    if (!userData) return;
    setIsEmailing(true);
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userData.email,
          name: userData.name,
          ticketId: userData.ticketId,
          role: userData.role,
        }),
      });
      setEmailSent(true);
      setTimeout(() => setEmailSent(false), 3000);
    } catch (e) {
      console.error(e);
    } finally {
      setIsEmailing(false);
    }
  };

  useEffect(() => {
    if (userData) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#4285F4", "#EA4335", "#FBBC04", "#34A853"],
      });
    }
  }, [userData]);

  useEffect(() => {
    if (!loading && (!user || !userData)) {
      router.push("/");
    }
  }, [user, userData, loading, router]);

  if (loading || !userData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface text-on-surface">
        Loading Dashboard...
      </div>
    );
  }

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
                className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="landing-page"
                href="#"
              >
                About
              </a>
              <a
                aria-current="page"
                className="transition-colors text-primary font-bold"
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
              <a
                className="hidden sm:inline-flex items-center justify-center px-space-lg h-12 rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container hover:text-on-primary-container transition-all shadow-[0_1px_3px_1px_rgba(32,33,36,0.05),0_1px_2px_0px_rgba(32,33,36,0.08)]"
                data-path="registration-modal"
                href="#"
              >
                Get Ticket
              </a>
              <a
                className="inline-flex items-center justify-center p-space-xs rounded-full hover:bg-surface-container-high transition-colors"
                data-path="ticket-dashboard"
                href="#"
              >
                <img
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                  src={user?.photoURL || "/avatar.png"}
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-20 flex-1 bg-surface">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden flex flex-col items-center justify-center py-space-2xl px-margin md:px-margin-md lg:px-margin-lg">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-20 right-1/4 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

            <div className="w-full max-w-4xl flex items-center justify-between pb-space-lg mb-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
                  Confirmed Attendee Pass
                </span>
              </div>
              <div className="flex items-center gap-space-md">
                <span className="font-body-sm text-body-sm text-on-surface-variant hidden sm:inline">
                  Registration Active
                </span>
                <button
                  onClick={() =>
                    import("firebase/auth").then((m) => m.signOut(auth))
                  }
                  className="inline-flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant hover:text-error transition-colors px-space-md py-space-xs rounded-full hover:bg-surface-container"
                >
                  <span className="material-symbols-outlined text-title-lg">
                    logout
                  </span>
                  <span>Logout</span>
                </button>
              </div>
            </div>

            <div className="w-full max-w-4xl bg-surface-container-lowest rounded-3xl shadow-xl overflow-hidden relative transition-all duration-300 hover:shadow-2xl">
              <div className="w-full h-1.5 flex">
                <div className="flex-1 bg-primary"></div>
                <div className="flex-1 bg-error"></div>
                <div className="flex-1 bg-tertiary-fixed-dim"></div>
                <div className="flex-1 bg-secondary"></div>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
                <div className="md:col-span-8 p-space-xl lg:p-space-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-lg">
                      <div className="flex items-center gap-space-xs">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant ml-space-xs font-bold">
                          DEVFEST 2026
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-space-md py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md">
                        <span className="material-symbols-outlined text-title-lg font-bold">
                          check_circle
                        </span>
                        <span>Status: Confirmed</span>
                      </div>
                    </div>

                    <p className="font-label-md text-label-md text-primary font-bold tracking-wide uppercase mb-space-xs">
                      Google Developer Group
                    </p>
                    <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-space-lg">
                      GDG DevFest 2026 — Guwahati
                    </h1>

                    <div className="flex items-center gap-space-lg bg-surface-container-low p-space-md rounded-2xl mb-space-lg">
                      <div className="relative flex-shrink-0">
                        <img
                          alt="John Doe"
                          className="w-20 h-20 rounded-full object-cover shadow-md"
                          src={user?.photoURL || "/avatar.png"}
                        />
                        <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-sm">
                          <span className="material-symbols-outlined text-label-sm">
                            verified
                          </span>
                        </span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                          Attendee
                        </span>
                        <h2 className="font-title-lg text-title-lg text-on-surface font-bold truncate">
                          John Doe
                        </h2>
                        <span className="font-body-md text-body-md text-on-surface-variant truncate">
                          Full-Stack Developer
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-md bg-surface-container-lowest">
                    <div>
                      <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Ticket Identifier
                      </span>
                      <span className="font-mono font-headline-sm text-headline-sm text-primary tracking-tight">
                        #GDG-8472
                      </span>
                    </div>
                    <div className="flex items-center gap-space-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-headline-sm">
                        event
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          Oct 12, 2026
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Tech Hub, Guwahati
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative md:col-span-4 flex flex-col justify-center items-center bg-surface-container-low p-space-xl">
                  <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface shadow-inner z-10"></div>

                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface shadow-inner z-10"></div>

                  <div className="hidden md:block absolute left-0 top-6 bottom-6 w-0 border-r-2 border-dashed border-outline-variant"></div>

                  <div className="w-full flex flex-col items-center text-center">
                    <div className="relative p-space-md bg-surface-container-lowest rounded-2xl shadow-sm flex flex-col items-center">
                      <div className="relative w-44 h-44 flex items-center justify-center">
                        <QRCode
                          value={userData.ticketId}
                          size={150}
                          style={{ color: "currentColor" }}
                        />

                        <div className="absolute inset-0 m-auto w-9 h-9 bg-surface-container-lowest rounded-xl shadow-md flex items-center justify-center p-1">
                          <div className="grid grid-cols-2 gap-1 w-5 h-5">
                            <span className="rounded-full bg-primary w-2 h-2"></span>
                            <span className="rounded-full bg-error w-2 h-2"></span>
                            <span className="rounded-full bg-tertiary-fixed-dim w-2 h-2"></span>
                            <span className="rounded-full bg-secondary w-2 h-2"></span>
                          </div>
                        </div>
                      </div>
                      <span className="mt-space-sm font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                        Fast-Track Pass
                      </span>
                    </div>

                    <div className="mt-space-md flex flex-col items-center">
                      <span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-label-md text-secondary">
                          sensors
                        </span>
                        Scan at Entrance
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Gate B • Main Auditorium
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-space-xl flex flex-wrap items-center justify-center gap-space-md w-full max-w-4xl">
              <button
                className="inline-flex items-center justify-center gap-space-sm px-space-xl h-12 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all active:scale-95 disabled:opacity-75 disabled:pointer-events-none"
                onClick={handleEmailTicket}
                disabled={isEmailing || emailSent}
              >
                <span className="material-symbols-outlined text-headline-sm">
                  {isEmailing ? "sync" : emailSent ? "check_circle" : "mail"}
                </span>
                <span>
                  {isEmailing
                    ? "Sending..."
                    : emailSent
                      ? "Sent!"
                      : "Email Ticket"}
                </span>
              </button>

              <button
                className="inline-flex items-center justify-center gap-space-sm px-space-xl h-12 rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:bg-primary-fixed hover:text-on-primary-fixed transition-all active:scale-95"
                onClick={() => window.print()}
              >
                <span className="material-symbols-outlined text-headline-sm">
                  download
                </span>
                <span>Download Ticket (PDF)</span>
              </button>

              <button
                className="inline-flex items-center justify-center gap-space-sm px-space-xl h-12 rounded-full bg-surface-container-lowest text-error font-label-lg text-label-lg shadow-sm hover:bg-error-container hover:text-on-error-container transition-all active:scale-95"
                onClick={() => setIsCancelModalOpen(true)}
              >
                <span className="material-symbols-outlined text-headline-sm">
                  cancel
                </span>
                <span>Cancel My Registration</span>
              </button>
            </div>

            <div className="w-full max-w-4xl mt-space-2xl grid grid-cols-1 sm:grid-cols-3 gap-space-lg">
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex items-start gap-space-md">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-headline-sm">
                    id_card
                  </span>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-on-surface font-semibold mb-space-xs">
                    Government ID
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Bring physical government-issued identification matching
                    your badge name.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex items-start gap-space-md">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary flex-shrink-0">
                  <span className="material-symbols-outlined text-headline-sm">
                    schedule
                  </span>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-on-surface font-semibold mb-space-xs">
                    Doors Open 08:30
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Keynote sessions commence strictly at 09:30 AM IST. Arrive
                    early for swag.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex items-start gap-space-md">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary flex-shrink-0">
                  <span className="material-symbols-outlined text-headline-sm">
                    wifi
                  </span>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-on-surface font-semibold mb-space-xs">
                    High-Speed Wi-Fi
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Fast developer network credentials will be provided upon
                    physical check-in.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`fixed inset-0 bg-on-background/40 backdrop-blur-sm z-50 flex items-center justify-center p-margin transition-opacity duration-200 ${isCancelModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <div
              className={`bg-surface-container-lowest rounded-3xl max-w-md w-full p-space-xl shadow-2xl transition-transform duration-200 ${isCancelModalOpen ? "scale-100" : "scale-95"}`}
            >
              <div className="w-12 h-12 rounded-full bg-error-container text-error flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-headline-md">
                  warning
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                Cancel Ticket Registration?
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-xl">
                Are you sure you want to surrender your pass for GDG DevFest
                2026? This slot will immediately be reallocated to the community
                waitlist.
              </p>
              <div className="flex items-center justify-end gap-space-sm">
                <button
                  className="px-space-lg h-10 rounded-full text-on-surface-variant hover:bg-surface-container font-label-md text-label-md transition-colors"
                  onClick={() => setIsCancelModalOpen(false)}
                >
                  Keep My Ticket
                </button>
                <button
                  className="px-space-lg h-10 rounded-full bg-error text-on-error hover:bg-on-error-container font-label-md text-label-md transition-colors shadow-sm"
                  onClick={async () => {
                    await import("firebase/firestore").then(async (m) => {
                      const { db } = await import("@/lib/firebase");
                      await m.deleteDoc(m.doc(db, "users", user!.uid));
                    });
                    window.location.reload();
                  }}
                >
                  Yes, Cancel Pass
                </button>
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
