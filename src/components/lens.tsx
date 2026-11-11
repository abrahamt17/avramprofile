import type { ElementType } from "react";
import { lenses } from "@/content/profile";
import type { LensText as LensTextType } from "@/content/types";

/**
 * Renders one version of a text per lens; CSS shows the one that matches
 * <html data-lens>. Works without JavaScript and never flashes.
 */
export function LensText({
  text,
  as: Tag = "span",
  className,
}: {
  text: LensTextType;
  as?: ElementType;
  className?: string;
}) {
  return (
    <>
      {lenses.map((lens) => (
        <Tag key={lens.id} data-lens-show={lens.id} className={className}>
          {text[lens.id]}
        </Tag>
      ))}
    </>
  );
}
