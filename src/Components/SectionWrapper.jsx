// SectionWrapper.jsx
export const SectionWrapper = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        {title.split(" ").map((word, i) =>
          word === "Projects" ? (
            <span key={i} className="text-primary"> {word} </span>
          ) : (
            ` ${word}`
          )
        )}
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        {subtitle}
      </p>
      {children}
    </div>
  </section>
);