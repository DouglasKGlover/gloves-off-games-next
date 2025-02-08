import React from "react";
import Header from "../../components/layout/Header";

export const metadata = {
  title: "Gloves Off Games - Glog",
  description: "A blog about video games. A glog, if you will."
};

const Page: React.FC = () => {
  return (
    <div>
      <Header />

      <main>
        <h1>Glog</h1>
      </main>
    </div>
  );
};

export default Page;
