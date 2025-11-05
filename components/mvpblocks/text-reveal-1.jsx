import { TextReveal } from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";

export default function TextRevealLetters() {
  const commonStyles = "bg-gradient-to-t from-highlight to-bsilver via-ivory bg-clip-text font-bold text-transparent dark:bg-gradient-to-b";

  return (
    <div className="text-center xl:text-start">
        {/* Part 1: "Welcome to " */}
        <TextReveal
          text="Welcome to "
          className={cn(
            commonStyles,
            "text-base sm:text-xl md:text-[30px] lg:text-4xl xl:text-3xl 2xl:text-5xl"
          )}
          from="bottom"
          split="letter"
        />

        {/* Part 2: Larger Text */}
        <TextReveal
          text="Luxury Chauffeur Car Service"
          className={cn(
             commonStyles,
             // Larger sizes applied here:
             "text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl"
          )}
          from="bottom"
          split="letter"
          startIndex={11}
        />
    </div>
  );
}