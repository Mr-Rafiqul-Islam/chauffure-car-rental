import { TextReveal } from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";

export default function TextRevealLetters() {
  return (
    <TextReveal
      className={cn(
        `bg-gradient-to-t from-highlight to-bsilver via-ivory bg-clip-text text-base sm:text-xl md:text-3xl lg:text-6xl font-bold text-transparent dark:bg-gradient-to-b`,
      )}
      from="bottom"
      split="letter">
      Welcome to Luxary Chauffure Car Service
    </TextReveal>
  );
}