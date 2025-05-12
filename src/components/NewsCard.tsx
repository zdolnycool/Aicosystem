interface NewsCardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
  category?: string;
}

const NewsCard = ({ title, description, image, link, category }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-[280px] flex flex-col justify-between transition hover:shadow-lg">
      {image ? (
        <img src={image} alt="miniatura" className="w-full h-24 object-cover rounded-lg mb-4" />
      ) : (
        <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400 mb-4">
          Brak miniatury
        </div>
      )}
      {category && (
        <span className="text-xs text-blue-600 font-medium uppercase mb-2">{category}</span>
      )}
      <h3 className="text-base font-semibold mb-2 text-gray-900 leading-snug">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description.slice(0, 90)}...</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-blue-600 hover:underline mt-auto"
      >
        Zobacz więcej →
      </a>
    </div>
  );
};

export default NewsCard;
