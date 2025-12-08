'use client';


import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { EyeIcon, EyeOffIcon, Loader2, ArrowLeft } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { forgotPassword, resetPassword } from "@/server-action";

export default function SigninModal({ open, onOpenChange }) {
  const id = useId();
  const { login } = useAuth();
  const router = useRouter();

  // View State: 'signin' | 'forgot-email' | 'forgot-reset'
  const [view, setView] = useState("signin"); 
  
  // Form States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(""); // For the reset step
  
  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Reset internal state when modal closes
  const handleOpenChange = (val) => {
    if (!val) {
      setTimeout(() => {
        setView("signin");
        setError(null);
        setSuccessMessage(null);
        setToken("");
        setPassword("");
      }, 300);
    }
    onOpenChange(val);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await login(email, password);
      handleOpenChange(false);
      setTimeout(() => router.push("/booking-history"), 1000);
    } catch (err) {
      setError(err.message || "Invalid credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await forgotPassword(email);
      setSuccessMessage("Token sent! Check your email.");
      setView("forgot-reset");
    } catch (err) {
      console.error(err);
      setError(err.message || "Could not send token. Please check the email.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await resetPassword(email, token, password);
      setSuccessMessage("Password reset successfully! Please log in.");
      
      // Return to login screen after short delay
      setTimeout(() => {
        setView("signin");
        setPassword(""); 
        setToken("");
        setSuccessMessage(null);
      }, 2000);
    } catch (err) {
      console.log(err);
      setError(err.message || "Failed to reset password. Invalid token or details.");
    } finally {
      setIsLoading(false);
    }
  };

  // Switch between rendering logic based on 'view' state
  const renderHeader = () => {
    if (view === "signin") {
      return {
        title: "Welcome back",
        desc: "Enter your credentials to login to your account."
      };
    } else if (view === "forgot-email") {
      return {
        title: "Reset Password",
        desc: "Enter your email address to receive a reset token."
      };
    } else {
      return {
        title: "Secure Account",
        desc: "Enter the token from your email and your new password."
      };
    }
  };

  const headerContent = renderHeader();

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        {/* Header Section */}
        <div className="flex flex-col items-center gap-2 relative">
          {/* Back Button for Forgot Password Views */}
          {view !== "signin" && (
            <button 
              onClick={() => {
                setView("signin");
                setError(null);
                setSuccessMessage(null);
              }}
              className="absolute left-0 top-0 p-2 text-bsilver hover:text-charcoal transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          <div
            className="flex size-40 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <Image
              src="/logo_transparent.png"
              alt="logo"
              width={160}
              height={88}
              className="h-auto w-40 rounded-full"
            />
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center text-highlight transition-all">
              {headerContent.title}
            </DialogTitle>
            <DialogDescription className="sm:text-center transition-all">
              {headerContent.desc}
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* --- VIEW 1: SIGN IN FORM --- */}
        {view === "signin" && (
          <form className="space-y-5" onSubmit={handleSignIn}>
            <div className="space-y-4">
              <div className="*:not-first:mt-2">
                <Label htmlFor={`${id}-email`}>Email</Label>
                <Input
                  id={`${id}-email`}
                  placeholder="name@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="relative *:not-first:mt-2">
                <Label htmlFor={`${id}-password`}>Password</Label>
                <Input
                  id={`${id}-password`}
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute top-[22px] right-0 h-10 w-10 flex items-center justify-center bg-transparent hover:text-primary-foreground"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}
            {successMessage && <p className="text-sm text-green-600 text-center">{successMessage}</p>}

            <div className="flex justify-end gap-2">
              <button 
                type="button"
                onClick={() => {
                  setView("forgot-email");
                  setError(null);
                }}
                className="text-sm underline hover:no-underline text-gray-600 hover:text-black"
              >
                Forgot password?
              </button>
            </div>
            
            <Button type="submit" disabled={isLoading} className="w-full bg-copper hover:bg-highlight text-white hover:text-black transition-all duration-300">
              {isLoading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing In...</>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        )}

        {/* --- VIEW 2: FORGOT PASSWORD (EMAIL STEP) --- */}
        {view === "forgot-email" && (
          <form className="space-y-5" onSubmit={handleForgotEmailSubmit}>
            <div className="space-y-4">
              <div className="*:not-first:mt-2">
                <Label htmlFor={`${id}-forgot-email`}>Email Address</Label>
                <Input
                  id={`${id}-forgot-email`}
                  placeholder="Enter the email associated with account"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}

            <Button type="submit" disabled={isLoading} className="w-full bg-copper hover:bg-highlight text-white hover:text-black transition-all duration-300">
              {isLoading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
              ) : (
                "Send Reset Token"
              )}
            </Button>
          </form>
        )}

        {/* --- VIEW 3: RESET PASSWORD (TOKEN + NEW PASSWORD) --- */}
        {view === "forgot-reset" && (
          <form className="space-y-5" onSubmit={handleResetPasswordSubmit}>
             <div className="space-y-4">
               {/* Hidden email field logic or just display usage */}
               <p className="text-xs text-center text-bsilver">Resetting for: {email}</p>

              <div className="*:not-first:mt-2">
                <Label htmlFor={`${id}-token`}>Token Code</Label>
                <Input
                  id={`${id}-token`}
                  placeholder="Ex: 123456"
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>

              <div className="relative *:not-first:mt-2">
                <Label htmlFor={`${id}-new-password`}>New Password</Label>
                <Input
                  id={`${id}-new-password`}
                  placeholder="Enter new password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute top-[34px] right-0 h-10 w-10 flex items-center justify-center bg-transparent hover:text-primary-foreground"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}
            {successMessage && <p className="text-sm text-green-600 text-center">{successMessage}</p>}

            <Button type="submit" disabled={isLoading} className="w-full bg-copper hover:bg-highlight text-white hover:text-black transition-all duration-300">
              {isLoading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Resetting...</>
              ) : (
                "Reset Password"
              )}
            </Button>
          </form>
        )}

      </DialogContent>
    </Dialog>
  );
}
