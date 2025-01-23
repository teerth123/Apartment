import { useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Gallery() {
  const images = [
    {
      url: 'https://ik.imagekit.io/qtmg0kqjk/Piramal_Revanta/gallery-1.jpg',
      label: 'Elegant Drawing Room',
    },
    {
      url: 'https://ik.imagekit.io/qtmg0kqjk/Piramal_Revanta/gallery-2.jpg',
      label: 'Modern Kitchen',
    },
    {
      url: 'https://ik.imagekit.io/qtmg0kqjk/Piramal_Revanta/gallery-3.jpg',
      label: 'Spacious Balcony',
    },
    {
      url: 'https://ik.imagekit.io/qtmg0kqjk/Piramal_Revanta/gallery-4.jpg',
      label: 'Cozy Bedroom',
    },
  ];

  // State to handle the number of images shown
  const [visibleImages, setVisibleImages] = useState(4);

  // Handle "See More" button click to load more images
  const handleLoadMore = () => {
    setVisibleImages(visibleImages + 4); // Load 4 more images at a time
  };

  return (
    <section id="gallery" className="py-16 bg-[#efebeb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Project Gallery
        </h2>

        {/* Grid layout with masonry-like structure */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.slice(0, visibleImages).map((image, index) => (
            <BlurFade key={index} className="relative overflow-hidden rounded-lg">
              <div className="relative w-full h-64"> {/* Fixed height for all images */}
                <img
                  src={image.url}
                  alt={`Gallery image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
                {/* Text overlay */}
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-sm px-2 py-1 rounded">
                  {image.label}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Only show the "See More" button on mobile */}
        {visibleImages < images.length && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="bg-primary text-black px-8 py-3 rounded-md hover:bg-primary-dark transition duration-300"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  const defaultVariants = {
    hidden: {
      [direction === "left" || direction === "right" ? "x" : "y"]:
        direction === "right" || direction === "down" ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      [direction === "left" || direction === "right" ? "x" : "y"]: 0,
      opacity: 1,
      filter: `blur(0px)`,
    },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}