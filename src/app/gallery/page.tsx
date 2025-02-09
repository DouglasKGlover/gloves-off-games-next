import { fetchContent } from "@/lib/contentful";
import { ALL_IMAGES } from "@/lib/queries/photos";
import ImageList from "@/components/sections/ImageList";
import { Photo } from "@/types/Photo";

export const metadata = {
  title: "Gloves Off Games - Gallery",
  description: "All of the images I've uploaded to the site.",
};

export default async function Page() {
  // Fetch the data for all images
  const allImagesData = (await fetchContent(ALL_IMAGES)) as {
    assetCollection: {
      items: Photo[];
    };
  };

  return (
    <main>
      <h1>Gallery</h1>
      <hr />

      <ImageList imagesData={allImagesData.assetCollection.items} />
    </main>
  );
}
