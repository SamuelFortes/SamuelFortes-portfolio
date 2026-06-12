"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/contexts/language-context";

const SideLabel = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-headline text-sm font-bold uppercase tracking-[0.25em] text-foreground">
    {children}
  </h3>
);

export default function AboutSection() {
  const { t } = useLanguage();
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="about" className="flex min-h-screen items-center py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1fr_auto_1fr] lg:gap-16">
        <div className="order-2 space-y-14 text-center lg:order-1 lg:text-left">
          <div className="space-y-4">
            <SideLabel>{t.about.label}</SideLabel>
            <p className="leading-relaxed text-foreground/75">{t.about.bio}</p>
          </div>
          <div className="space-y-4">
            <SideLabel>{t.about.livesInLabel}</SideLabel>
            <p className="leading-relaxed text-foreground/75">
              {t.about.location.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </p>
          </div>
        </div>

        <div className="order-1 mx-auto lg:order-2">
          {/* Gabriel-GC style: padded translucent frame that brightens + scales on hover */}
          <div className="p-[10px] rounded-[3rem] bg-white/10 transition-all duration-300 hover:bg-white/25 hover:scale-110 cursor-default">
            <div className="h-56 w-56 overflow-hidden rounded-[2.25rem] sm:h-72 sm:w-72">
              {profileImage && (
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  width={640}
                  height={640}
                  data-ai-hint={profileImage.imageHint}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>
        </div>

        <div className="order-3 space-y-14 text-center lg:text-right">
          <div className="space-y-4">
            <SideLabel>{t.about.experienceLabel}</SideLabel>
            <p className="leading-relaxed text-foreground/75">{t.about.experienceValue}</p>
          </div>
          <div className="space-y-4">
            <SideLabel>{t.about.downloadLabel}</SideLabel>
            <div>
              <Button asChild variant="outline" className="font-code">
                <a href="/samuel-fortes-cv.pdf" download>
                  {t.about.cvFile}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
