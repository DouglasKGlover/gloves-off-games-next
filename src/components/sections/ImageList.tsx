import Link from "next/link";
import Image from "next/image";

type ImageListProps = {
  imagesData: { sys: { id: string }; url: string; thumbnail: string }[];
};

// Component to display a list of images
const ImageList: React.FC<ImageListProps> = ({ imagesData }) => {
  return (
    <section>
      <ul>
        {imagesData.map((image) => {
          return (
            // List item for each image
            <li key={image.sys.id}>
              {/* Next Image */}
              <Link href={image.url} target="_blank">
                <Image
                  src={image.thumbnail}
                  alt={image.sys.id}
                  width={300}
                  height={200}
                  loading="lazy"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ImageList;
