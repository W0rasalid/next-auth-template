export type BlogCardProps = {
  /**
   * title เป็น ข้อความที่แสดงเป็นหัวข้อของบล็อก
   */
  title?: string;
  description?: string;
  imageUrl?: string;
  date?: string;
  onClick?: () => void;
  data?: {
    name: string;
    age: number;
  };
};

const BlogCard = ({
  title,
  description,
  imageUrl,
  date,
  onClick,
  data,
}: BlogCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
      <img alt="" src={imageUrl} className="h-56 w-full object-cover" />

      <div className="bg-white p-4 sm:p-6" onClick={onClick}>
        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {description}
        </p>
        <button>{data?.name}</button>
      </div>
    </article>
  );
};

export default BlogCard;
