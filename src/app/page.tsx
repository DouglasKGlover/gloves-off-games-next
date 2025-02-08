import Header from "@/components/layout/Header";
import { fetchContent } from "@/lib/contentful";
import Link from "next/link";

export const metadata = {
  title: "Gloves Off Games",
  description:
    "Doug Glover's personal video game collection tracking site, with a rarely updated blog of thoughts and reviews on games I've played recently. Primary purpose being personal tracking so I don't accidently buy games I already own."
};

const RECENTLY_UPDATED = `
  query recentlyUpdatedQuery {
    gameCollection(limit: 3, where: {sys:{publishedVersion_gt:4}}) {
      items {
        sys {
          publishedAt
        }
        title
        system {
          slug
          shortName
        }
        digital
        slug
        region
      }
    }
  }
`;

const LATEST_GAMES = `
  query latestGamesQuery {
    gameCollection(limit: 3, order: [sys_firstPublishedAt_DESC]) {
      items {
        sys {
          firstPublishedAt
        }
        title
        system {
          slug
          shortName
        }
        digital
        slug
        region
      }
    }
  }
`;

export default async function Home() {
  const recentlyUpdatedGamesData = (await fetchContent(RECENTLY_UPDATED)) as {
    gameCollection: {
      items: Array<{
        sys: { publishedAt: string };
        title: string;
        system: { slug: string; shortName: string };
        digital: boolean;
        slug: string;
        region: string;
      }>;
    };
  };

  const latestGamesData = (await fetchContent(LATEST_GAMES)) as {
    gameCollection: {
      items: Array<{
        sys: { firstPublishedAt: string };
        title: string;
        system: { slug: string; shortName: string };
        digital: boolean;
        slug: string;
        region: string;
      }>;
    };
  };

  return (
    <div>
      <main>
        <Header />

        <h1>Gloves Off Games</h1>
        <p>My personal collection tracking site.</p>

        <hr />

        {/* Display the most recently updated games */}
        <section>
          <h2>Recently Updated</h2>
          <ul>
            {recentlyUpdatedGamesData.gameCollection.items.map((game: any) => {
              const formattedDate = new Date(
                game.sys.publishedAt
              ).toLocaleDateString("en-US");

              return (
                <li key={game.slug}>
                  <span>{formattedDate} - </span>
                  <Link href={`/games/${game.system.slug}/${game.slug}`}>
                    {game.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Display the latest games */}
        <section>
          <h2>Latest Games</h2>
          <ul>
            {latestGamesData.gameCollection.items.map((game: any) => {
              const formattedDate = new Date(
                game.sys.firstPublishedAt
              ).toLocaleDateString("en-US");

              return (
                <li key={game.slug}>
                  <span>{formattedDate} - </span>
                  <Link href={`/games/${game.system.slug}/${game.slug}`}>
                    {game.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}
