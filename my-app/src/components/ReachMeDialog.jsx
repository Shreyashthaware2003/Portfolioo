import React, { useState } from "react";
import { toast } from "sonner";
import { CiLocationOn } from "react-icons/ci";
import { FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { Dialog, DialogContent } from "./ui/dialog";
import { Loader2 } from "lucide-react";

function ReachMeDialog({ open, onOpenChange, darkMode }) {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "42e4dcd2-d506-402f-aaf5-c70cda16083b");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Form submitted! Thanks for reaching out.");

        form.reset(); // ✅ clear form
        onOpenChange(false); // ✅ CLOSE dialog
      } else {
        toast.error("Failed to submit form. Please try again.");
        // ❌ DO NOT reset
        // ❌ DO NOT close
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Network error. Please try again.");
      // ❌ DO NOT reset
      // ❌ DO NOT close
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`max-h-[90vh] overflow-y-auto ${
          darkMode
            ? "bg-white text-black border-gray-200"
            : "bg-[#27272a] text-white border-gray-800"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 pt-2">
          {/* LEFT SIDE */}
          <div className="space-y-6 hidden md:inline">
            <h3 className="text-xl font-semibold">Get In Touch</h3>

            <div className="space-y-4">
              {/* EMAIL */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    darkMode
                      ? "bg-gray-200 text-black"
                      : "bg-[#27272a] text-white"
                  }`}
                >
                  <FiMail />
                </div>

                <div>
                  <p className="text-sm">Email</p>
                  <a
                    href="https://mail.google.com/mail/u/0/?fs=1&to=sthawaredev@gmail.com&tf=cm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-medium hover:underline ${darkMode ? "text-black" : "text-white"}`}
                  >
                    sthawaredev@gmail.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    darkMode
                      ? "bg-gray-200 text-black"
                      : "bg-[#27272a] text-white"
                  }`}
                >
                  <FiPhone />
                </div>

                <div>
                  <p className="text-sm">Phone</p>
                  <a
                    href="tel:8459220920"
                    className="font-medium hover:underline"
                  >
                    +91 84592-20920
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    darkMode
                      ? "bg-gray-200 text-black"
                      : "bg-[#27272a] text-white"
                  }`}
                >
                  <CiLocationOn />
                </div>

                <div>
                  <p className="text-sm">Location</p>
                  <p className="font-medium">Nagpur, India</p>
                </div>
              </div>

              {/* LINKEDIN */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    darkMode
                      ? "bg-gray-200 text-black"
                      : "bg-[#27272a] text-white"
                  }`}
                >
                  <FiLinkedin />
                </div>

                <div>
                  <p className="text-sm">LinkedIn</p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/shreyash-thaware1705/"
                    className="font-medium hover:underline"
                  >
                    linkedin.com/in/shreyash-thaware
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full h-10 px-3 rounded-md border"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full h-10 px-3 rounded-md border"
                />
              </div>

              <textarea
                name="message"
                placeholder="Your message"
                rows="5"
                required
                className="w-full px-3 py-2 rounded-md border"
              />

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full h-10 rounded-md flex items-center justify-center ${
                  darkMode
                    ? "bg-black text-white hover:bg-[#27272a]"
                    : "bg-white text-black hover:bg-gray-200"
                } ${isLoading ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
              >
                {isLoading ? <Loader2 className="animate-spin" /> : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ReachMeDialog;
