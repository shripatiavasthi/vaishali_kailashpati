import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { INDUSTRIAL_PRODUCT_CATALOGUE } from '@/src/constants/data';

const ProductCataloguePage = () => {
  const [fullscreenImage, setFullscreenImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!fullscreenImage) {
      document.body.style.overflow = '';
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFullscreenImage(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [fullscreenImage]);

  useEffect(() => {
    const items = INDUSTRIAL_PRODUCT_CATALOGUE.sections.flatMap((section) => section.items);

    const interval = window.setInterval(() => {
      setActiveSlides((current) => {
        const next = { ...current };

        items.forEach((item) => {
          const currentIndex = current[item.id] ?? 0;
          next[item.id] = (currentIndex + 1) % item.images.length;
        });

        return next;
      });
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  const updateSlide = (itemId: string, imageCount: number, direction: number) => {
    setActiveSlides((current) => {
      const currentIndex = current[itemId] ?? 0;
      return {
        ...current,
        [itemId]: (currentIndex + direction + imageCount) % imageCount,
      };
    });
  };

  return (
    <div className="min-h-screen bg-industrial-gray pt-24">
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.3),_transparent_40%),linear-gradient(135deg,_#020617,_#0f172a_45%,_#1e293b)]" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Link
            to="/#products"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-blue-200 transition-transform hover:translate-x-1"
          >
            <ArrowLeft size={18} />
            BACK TO PRODUCTS
          </Link>

          <div className="mt-8 max-w-4xl">
            <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-blue-200">
              Category Catalogue
            </span>
            <h1 className="text-4xl font-display font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {INDUSTRIAL_PRODUCT_CATALOGUE.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              {INDUSTRIAL_PRODUCT_CATALOGUE.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {INDUSTRIAL_PRODUCT_CATALOGUE.sections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: sectionIndex * 0.08 }}
              className="space-y-8"
            >
              <div className="max-w-3xl">
                <span className="text-industrial-accent text-xs font-bold tracking-[0.25em] uppercase">
                  {section.eyebrow}
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-industrial-blue">
                  {section.title}
                </h2>
                <p className="mt-4 text-gray-600 leading-7">
                  {section.description}
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {section.items.map((item, itemIndex) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: itemIndex * 0.08 }}
                    className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                  >
                    {(() => {
                      const activeIndex = activeSlides[item.id] ?? 0;
                      const activeImage = item.images[activeIndex];

                      return (
                    <div className="grid gap-0 md:grid-cols-[1.25fr_0.95fr]">
                      <div className="relative min-h-[280px] md:min-h-[360px]">
                        <button
                          type="button"
                          onClick={() => setFullscreenImage({ src: activeImage, alt: `${item.title} ${activeIndex + 1}` })}
                          className="absolute inset-0 block focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
                          aria-label={`Open fullscreen image for ${item.title}`}
                        >
                          <img
                            src={activeImage}
                            alt={item.title}
                            className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
                          />
                        </button>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/15 to-transparent" />
                        {item.images.length > 1 ? (
                          <>
                            <button
                              type="button"
                              onClick={() => updateSlide(item.id, item.images.length, -1)}
                              className="absolute left-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/45 text-white backdrop-blur transition hover:bg-slate-950/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                              aria-label={`Previous image for ${item.title}`}
                            >
                              <ChevronLeft size={18} />
                            </button>
                            <button
                              type="button"
                              onClick={() => updateSlide(item.id, item.images.length, 1)}
                              className="absolute right-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/45 text-white backdrop-blur transition hover:bg-slate-950/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                              aria-label={`Next image for ${item.title}`}
                            >
                              <ChevronRight size={18} />
                            </button>
                          </>
                        ) : null}
                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <h3 className="text-2xl font-display font-bold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 bg-slate-100 p-2">
                        {item.images.map((image, imageIndex) => (
                          <button
                            key={image}
                            type="button"
                            onClick={() =>
                              setActiveSlides((current) => ({
                                ...current,
                                [item.id]: imageIndex,
                              }))
                            }
                            aria-label={`Open fullscreen image ${imageIndex + 1} for ${item.title}`}
                            className={`overflow-hidden rounded-2xl bg-white text-left ring-2 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-industrial-accent/40 ${
                              item.images.length === 3 && imageIndex === 0 ? 'col-span-2' : ''
                            } ${
                              imageIndex === activeIndex ? 'ring-industrial-accent' : 'ring-transparent'
                            }`}
                          >
                            <img
                              src={image}
                              alt={`${item.title} ${imageIndex + 1}`}
                              className="h-full min-h-[140px] w-full object-cover transition duration-300 hover:scale-[1.03]"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                      );
                    })()}
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-industrial-accent text-xs font-bold tracking-[0.25em] uppercase">
                  Need A Quotation
                </span>
                <h3 className="mt-3 text-3xl font-display font-bold text-industrial-blue">
                  Share your required motor, gearbox, or pump category.
                </h3>
                <p className="mt-4 text-gray-600 leading-7">
                  Our team can help with brand matching, specification checks, and ready-stock availability.
                </p>
              </div>

              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-industrial-accent px-6 py-4 text-sm font-bold tracking-wide text-white transition hover:bg-industrial-accent/90"
              >
                REQUEST PRODUCT DETAILS
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {fullscreenImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={fullscreenImage.alt}
          onClick={() => setFullscreenImage(null)}
        >
          <button
            type="button"
            onClick={() => setFullscreenImage(null)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            aria-label="Close fullscreen image"
          >
            <X size={20} />
          </button>

          <img
            src={fullscreenImage.src}
            alt={fullscreenImage.alt}
            className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ProductCataloguePage;
