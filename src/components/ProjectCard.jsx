
export default function ProjectCard({ project }) {
  const { title, description, image, imagePosition } = project;

  return (
    <div 
      className={`grid md:grid-cols-2 gap-12 items-center ${
        imagePosition === 'left' ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Text Content */}
      <div className={imagePosition === 'left' ? 'md:order-2' : ''}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {title}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className={imagePosition === 'left' ? 'md:order-1' : ''}>
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}
S