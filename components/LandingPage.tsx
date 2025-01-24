import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";
import Logo from "./Logo";
import Link from "next/link";

const Hero12 = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container">
        <div className="magicpattern absolute inset-x-0 top-0 -z-10 flex h-full w-full items-center justify-center opacity-100" />
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 flex flex-col items-center gap-6 text-center">
            <Logo fontSize="text-4xl" itemSize={40} />
            <div className="mt-4">
              <h1 className="mb-6 text-pretty text-2xl font-bold lg:text-5xl">
                Your Recipe Assistant.
              </h1>
              <p className="text-muted-foreground lg:text-xl">
              ChefAI is an intelligent recipe generator that helps you turn everyday ingredients into delicious meals with the power of AI. Simply enter the ingredients you have at home, and ChefAI will suggest creative, easy-to-follow recipes tailored to your preferences. Whether you&apos;re looking for quick dinner ideas, healthy meal options, or just experimenting in the kitchen, ChefAI has you covered.
              </p>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <Button><Link href="/chef-ai">Get Started</Link></Button>
              <Button variant="outline">
                Learn more <ExternalLink className="ml-2 h-4" />
              </Button>
            </div>
            <div className="mt-20 flex flex-col items-center gap-4">
              <p className="text-center: text-muted-foreground lg:text-left">
                Built with open-source technologies
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://ui.shadcn.com/" target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
                >
                  <img
                    src="https://shadcnblocks.com/images/block/logos/shadcn-ui-small.svg"
                    alt="company logo"
                    className="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
                <a
                  href="https://www.typescriptlang.org/" target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
                >
                  <img
                    src="https://shadcnblocks.com/images/block/logos/typescript-small.svg"
                    alt="company logo"
                    className="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>

                <a target="_blank"
                  href="https://react.dev/"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
                >
                  <img
                    src="https://shadcnblocks.com/images/block/logos/react-icon.svg"
                    alt="company logo"
                    className="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
                <a
                  href="https://tailwindcss.com/" target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
                >
                  <img
                    src="https://shadcnblocks.com/images/block/logos/tailwind-small.svg"
                    alt="company logo"
                    className="h-4 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
                <a
                  href="https://gemini.google.com/app" target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s"
                    alt="company logo"
                    className="h-4 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero12;

