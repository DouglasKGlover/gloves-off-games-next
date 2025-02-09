import React from "react";
import Header from "../../components/layout/Header";

export const metadata = {
  title: "Gloves Off Games - Gallery",
  description: "All of the images I've uploaded to the site.",
};

const Page: React.FC = () => {
  return (
    <div>
      <Header />

      <main>
        <h1>Gallery</h1>
      </main>
    </div>
  );
};

export default Page;
