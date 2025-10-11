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
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function SigninModal({ open, onOpenChange }) {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
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
            <DialogTitle className="sm:text-center text-highlight">Welcome back</DialogTitle>
            <DialogDescription className="sm:text-center">
              Enter your credentials to login to your account.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-email`}>Email</Label>
              <Input
                id={`${id}-email`}
                placeholder="mr.rafiqulthedev@gmail.com"
                type="email"
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
              />
              <button
                type="button"
                className="absolute top-[12px] right-0 h-full w-10 bg-transparent hover:text-primary-foreground"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Link className="text-sm underline hover:no-underline" href="#">
              Forgot password?
            </Link>
          </div>
          <Button type="button" className="w-full bg-copper hover:bg-highlight text-white hover:text-black transition-all duration-300">
            Sign In
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
