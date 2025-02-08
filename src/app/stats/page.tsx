import React from "react";
import Header from "../../components/layout/Header";

export const metadata = {
  title: "Gloves Off Games - Stats",
  description: "Some statistics about my video game collection."
};

const Page: React.FC = () => {
  return (
    <div>
      <Header />

      <main>
        <h1>Stats</h1>
      </main>
    </div>
  );
};

export default Page;
