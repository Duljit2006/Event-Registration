"use client";
import { useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function RegistrationModal() {
  const { user, userData, refreshUserData, overrideUserData } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    role: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // If they are not logged in, or already registered, hide modal
  if (!user || userData) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role) return;

    setIsSubmitting(true);
    try {
      const ticketId =
        "DEV-GUW-2026-" + Math.floor(1000 + Math.random() * 9000);
      const newUserData = {
        uid: user.uid,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        ticketId,
        createdAt: new Date().toISOString(),
      };

      // Try saving to Firestore, but timeout after 3 seconds if Firestore is not provisioned
      const savePromise = setDoc(doc(db, "users", user.uid), newUserData);
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 3000),
      );

      try {
        await Promise.race([savePromise, timeoutPromise]);
        await refreshUserData();

        // Trigger the email API in the background
        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            name: formData.name,
            ticketId,
            role: formData.role
          })
        }).catch(e => console.error('Failed to trigger email:', e));
      } catch (err) {
        console.warn(
          "Firestore save failed or timed out. Falling back to local state for demo purposes.",
          err,
        );
        // Fallback: manually update the context so they can see the dashboard anyway!
        overrideUserData(newUserData);
      }

      router.push("/dashboard");
    } catch (error) {
      console.error("Error registering:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-margin">
      <div className="absolute inset-0 bg-on-surface/50 backdrop-blur-sm z-10 transition-opacity duration-300"></div>
      <div className="relative z-20 w-full max-w-[620px] bg-surface-container-lowest rounded-xl shadow-2xl p-space-xl md:p-space-2xl mx-margin my-space-xl transition-transform duration-300">
        <div className="flex items-start justify-between mb-space-lg">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant ml-space-xs">
                GDG Guwahati
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
              Complete Your Registration
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Reserve your spot for GDG DevFest 2026 in Guwahati.
            </p>
          </div>

          <button
            aria-label="Close registration modal"
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors focus:outline-none"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-space-xs">
            <label
              className="font-label-lg text-label-lg text-on-surface flex items-center justify-between"
              htmlFor="fullName"
            >
              <span>
                Full Name <span className="text-error">*</span>
              </span>
              <span className="font-label-sm text-label-sm text-outline font-normal">
                Badge display name
              </span>
            </label>
            <div className="relative">
              <input
                className="w-full h-14 px-space-md bg-surface-container rounded-DEFAULT font-body-md text-body-md text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all"
                name="fullName"
                placeholder="e.g. John Doe"
                required
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
                <span className="material-symbols-outlined text-[20px]">
                  badge
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-space-xs">
            <label
              className="font-label-lg text-label-lg text-on-surface flex items-center justify-between"
              htmlFor="emailAddress"
            >
              <span>
                Email Address <span className="text-error">*</span>
              </span>
              <span className="font-label-sm text-label-sm text-outline font-normal">
                For ticket &amp; QR code
              </span>
            </label>
            <div className="relative">
              <input
                className="w-full h-14 px-space-md bg-surface-container rounded-DEFAULT font-body-md text-body-md text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all"
                name="emailAddress"
                placeholder="name@example.com"
                required
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-space-xs">
            <label
              className="font-label-lg text-label-lg text-on-surface flex items-center justify-between"
              htmlFor="phoneNumber"
            >
              <span>
                Phone Number{" "}
                <span className="font-normal text-on-surface-variant font-label-sm text-label-sm">
                  (Optional)
                </span>
              </span>
              <span className="font-label-sm text-label-sm text-outline font-normal">
                SMS updates on venue day
              </span>
            </label>
            <div className="relative">
              <input
                className="w-full h-14 px-space-md bg-surface-container rounded-DEFAULT font-body-md text-body-md text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all"
                name="phoneNumber"
                placeholder="+91 98765 43210"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
                <span className="material-symbols-outlined text-[20px]">
                  call
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-space-xs">
            <label
              className="font-label-lg text-label-lg text-on-surface flex items-center justify-between"
              htmlFor="developerRole"
            >
              <span>
                Developer Role <span className="text-error">*</span>
              </span>
              <span className="font-label-sm text-label-sm text-outline font-normal">
                Tailors your track passes
              </span>
            </label>
            <div className="relative">
              <select
                className="w-full h-14 pl-space-md pr-space-2xl bg-surface-container rounded-DEFAULT font-body-md text-body-md text-on-surface appearance-none focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all cursor-pointer"
                name="developerRole"
                required
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              >
                <option className="text-outline" disabled value="">
                  Select your primary role...
                </option>
                <option className="text-on-surface" value="fullstack">
                  Full-Stack Developer
                </option>
                <option className="text-on-surface" value="frontend">
                  Frontend Developer
                </option>
                <option className="text-on-surface" value="backend">
                  Backend Developer
                </option>
                <option className="text-on-surface" value="mobile">
                  Mobile / Android
                </option>
                <option className="text-on-surface" value="aiml">
                  AI / ML Engineer
                </option>
                <option className="text-on-surface" value="student">
                  Student
                </option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant flex items-center">
                <span className="material-symbols-outlined text-[24px]">
                  expand_more
                </span>
              </div>
            </div>
          </div>

          <div className="p-space-md bg-surface-container-low rounded-DEFAULT flex items-center justify-between mt-space-xs">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined text-[20px]">
                  confirmation_number
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  General Delegate Pass
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Includes Keynote + Codelab Sandboxes
                </span>
              </div>
            </div>
            <span className="px-space-sm py-space-xs bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm font-bold tracking-wide">
              FREE TIER
            </span>
          </div>

          <div className="flex items-center justify-between pt-space-md mt-space-xs">
            <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[18px]">
                verified_user
              </span>
              <span>Fast Check-in Enabled</span>
            </div>
            <div className="flex items-center gap-space-md">
              <button
                className="px-space-md py-3 rounded-full font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none"
                type="button"
                onClick={() =>
                  import("firebase/auth").then((m) => m.signOut(auth))
                }
              >
                Cancel
              </button>
              <button
                disabled={isSubmitting}
                className="h-12 px-space-xl bg-secondary text-on-secondary rounded-full font-label-lg text-label-lg font-semibold flex items-center gap-space-xs hover:shadow-md transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:opacity-75"
                type="submit"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block animate-spin material-symbols-outlined text-[18px]">
                      sync
                    </span>
                    <span>Reserving Pass...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Registration</span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
