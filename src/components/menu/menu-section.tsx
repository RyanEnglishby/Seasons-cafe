import { Tag } from "@/components/ui/tag";
import type { MenuCategory } from "@/types";

export function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section id={category.id} className="scroll-mt-28 border-t border-charcoal-900/10 py-14 first:border-0 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h2 className="font-serif text-2xl text-charcoal-900 sm:text-3xl">{category.title}</h2>
        {category.note ? <p className="text-sm italic text-charcoal-500">{category.note}</p> : null}
      </div>

      <ul className="mt-8 columns-1 gap-x-14 sm:columns-2">
        {category.items.map((item) => (
          <li key={item.name} className="break-inside-avoid border-b border-charcoal-900/8 py-4 first:pt-0">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-lg leading-snug text-charcoal-900">{item.name}</span>
              {item.price ? (
                <>
                  <span aria-hidden="true" className="h-px flex-1 border-b border-dotted border-charcoal-900/25" />
                  <span className="whitespace-nowrap font-serif text-lg text-charcoal-900">{item.price}</span>
                </>
              ) : null}
            </div>
            {item.description || item.tags?.length ? (
              <div className="mt-1.5 flex flex-wrap items-center gap-2">
                {item.description ? <p className="text-sm text-charcoal-600">{item.description}</p> : null}
                {item.tags?.map((tag) => (
                  <Tag key={tag} tone="olive">
                    {tag}
                  </Tag>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
