import React from "react";
import Link from "next/link";

// Array of links for the navigation
const links = [
  { href: "/", label: "Home" },
  { href: "/systems", label: "Systems" },
  { href: "/games", label: "Games" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" }
];

// The header component displays the main navigation for the site
const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          {/* A link for each found in links array */}
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
