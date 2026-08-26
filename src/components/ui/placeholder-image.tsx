import { CameraIcon, CoffeeCupIcon, PastryIcon, StorefrontIcon, WheatIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { ComponentType, SVGProps } from "react";

export type PlaceholderIconName = "coffee" | "bake" | "pastry" | "interior" | "camera";

const ICONS: Record<PlaceholderIconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  coffee: CoffeeCupIcon,
  bake: WheatIcon,
  pastry: PastryIcon,
  interior: StorefrontIcon,
  camera: CameraIcon,
};

const TONES = {
  light: "from-cream-300 to-brown-200",
  warm: "from-brown-300 to-olive-500/50",
  deep: "from-brown-400 to-brown-700/70",
} as const;

interface PlaceholderImageProps {
  /**
   * What the real photo should show once supplied, e.g. "Coffee being
   * poured at the counter". Doubles as the visible caption and the
   * accessible label — this is exactly the alt text the eventual <img>
   * should carry.
   */
  label: string;
  icon?: PlaceholderIconName;
  tone?: keyof typeof TONES;
  /** Control aspect ratio / size / radius from the call site, e.g. "aspect-[4/5] rounded-sm". */
  className?: string;
  /** Hide the caption bar for very small/decorative uses. */
  showCaption?: boolean;
}

/**
 * Stand-in for real photography. Renders as a branded gradient panel with a
 * subtle paper-grain texture and a labelled caption, so the concept reads as
 * intentional rather than a broken image — never as a real photo of Seasons.
 *
 * Replace usages of this component with next/image once approved photos are
 * supplied by the café (see README for guidance).
 */
export function PlaceholderImage({
  label,
  icon = "camera",
  tone = "light",
  className,
  showCaption = true,
}: PlaceholderImageProps) {
  const Icon = ICONS[icon];

  return (
    <div
      role="img"
      aria-label={`Photo placeholder — ${label}`}
      className={cn(
        "bg-grain relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        TONES[tone],
        className,
      )}
    >
      <Icon className="relative z-10 h-10 w-10 text-brown-900/20 sm:h-14 sm:w-14" strokeWidth={1} aria-hidden="true" />
      {showCaption ? (
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-2 border-t border-charcoal-900/10 bg-cream-50/80 px-4 py-2.5 backdrop-blur-sm">
          <CameraIcon className="h-3.5 w-3.5 shrink-0 text-charcoal-500" aria-hidden="true" />
          <span className="truncate text-[0.68rem] font-medium uppercase tracking-wide text-charcoal-600">
            {label}
          </span>
        </div>
      ) : null}
    </div>
  );
}
