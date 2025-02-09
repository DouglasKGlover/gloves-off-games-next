import React from "react";
import Header from "../../components/layout/Header";

export const metadata = {
  title: "Gloves Off Games - Games",
  description: "A page where I list all of my games.",
};

const Page: React.FC = () => {
  return (
    <div>
      <Header />

      <main>
        <h1>Games</h1>
      </main>
    </div>
  );
};

export default Page;
