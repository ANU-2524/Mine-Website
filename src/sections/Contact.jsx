import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { supabase } from "../lib/supabase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    // Check if user is already verified (logged in via magic link)
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setIsVerified(true);
        setFormData((prev) => ({ ...prev, email: user.email }));
      }
    };
    checkUser();

    // Listen for auth state changes (e.g. after clicking magic link)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setIsVerified(true);
        setFormData((prev) => ({ ...prev, email: session.user.email }));
      } else {
        setIsVerified(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmailError("");
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVerifyEmail = async () => {
    if (!formData.email) {
      setEmailError("Please enter your email first.");
      return;
    }

    setIsVerifying(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: formData.email,
      options: {
        emailRedirectTo: window.location.href, // Redirect back to current page
      },
    });

    setIsVerifying(false);
    if (error) {
      console.error("Supabase verification error:", error);
      if (error.status === 400 || error.message.includes("invalid")) {
        setEmailError("This email address is invalid or not allowed.");
        showAlertMessage("danger", "Invalid email address.");
      } else {
        showAlertMessage("danger", "Failed to send verification link.");
      }
    } else {
      showAlertMessage("success", "Magic link sent! Check your inbox to verify.");
    }
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isVerified) {
      showAlertMessage("danger", "Please verify your email before sending.");
      return;
    }

    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_w7esh7c",
        "template_azqhsh5",
        {
          from_name: formData.name,
          name: formData.name,
          sender_name: formData.name,
          user_name: formData.name,
          to_name: "Anu",
          my_name: "Anu",
          from_email: formData.email,
          email: formData.email,
          user_email: formData.email,
          reply_to: formData.email,
          to_email: "anusoni25.2006@gmail.com",
          message: formData.message,
        },
        "Oz2H1481aCZXdG_c6"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };

  return (
    <section id="contact" className="relative flex items-center justify-center c-space section-spacing py-20">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center w-full max-w-lg p-6 sm:p-10 mx-auto border border-white/10 rounded-3xl bg-primary/80 backdrop-blur-sm shadow-2xl">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Let's Talk</h2>
          <p className="text-sm sm:text-base font-normal text-neutral-400">
            {isVerified 
              ? "Your email is verified! Now you can send your message."
              : "To prevent spam, please verify your email with a magic link before sending a message."}
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="field-label flex items-center gap-2">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus h-12"
              placeholder="Your good name..."
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="field-label flex items-center gap-2">
              Email
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus flex-1 h-12"
                placeholder="Your e.address to connect"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isVerified}
                required
              />
              {!isVerified && (
                <button
                  type="button"
                  onClick={handleVerifyEmail}
                  disabled={isVerifying}
                  className="px-6 py-3 text-sm font-semibold text-white bg-royal rounded-xl hover:bg-royal/80 active:scale-95 transition-all disabled:opacity-50 h-12 flex items-center justify-center min-w-[100px]"
                >
                  {isVerifying ? "Sending..." : "Verify"}
                </button>
              )}
            </div>
            {isVerified && (
              <p className="mt-2 text-xs sm:text-sm text-green-400 font-medium">✓ Email Verified</p>
            )}
            {emailError && (
              <p className="mt-2 text-xs sm:text-sm text-red-100 bg-red-500/20 p-2 rounded-md border border-red-500/30">{emailError}</p>
            )}
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="field-label flex items-center gap-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="5"
              className="field-input field-input-focus resize-none py-3"
              placeholder="What's in your mind? Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            disabled={!isVerified || isLoading}
            className={`w-full px-1 py-4 text-lg font-bold text-center rounded-xl cursor-pointer bg-gradient-to-r from-lavender to-royal hover:opacity-90 active:scale-100 active:opacity-100 transition-all ${
              (!isVerified || isLoading) ? "opacity-40 cursor-not-allowed filter grayscale" : "shadow-lg shadow-royal/20"
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
