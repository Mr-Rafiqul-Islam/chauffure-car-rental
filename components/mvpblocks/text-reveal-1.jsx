import { TextReveal } from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";

export default function TextRevealLetters() {
  return (
    <TextReveal
      className={cn(
        `bg-gradient-to-t from-highlight to-bsilver via-ivory bg-clip-text text-base sm:text-xl md:text-4xl xl:text-3xl 2xl:text-5xl font-bold text-transparent dark:bg-gradient-to-b text-start`,
      )}
      from="bottom"
      split="letter">
      Welcome to Luxury Chauffeur Car Service
    </TextReveal>
  );
}