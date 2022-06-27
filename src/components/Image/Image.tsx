interface ImageProps {
  webp: string;
  fallback: string;
  alt: string;
}

const Image = ({ webp, fallback, alt = "image", ...props }: ImageProps) => {
  return (
    <picture className="mt-10 px-3 md:px-0">
      <source srcSet={webp} type="image/webp" />
      <source srcSet={fallback} type="image/jpeg" />
      <img src={fallback} alt={alt} {...props} />
    </picture>
  );
};

export default Image;
