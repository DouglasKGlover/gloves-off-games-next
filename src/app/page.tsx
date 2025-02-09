import Header from "@/components/layout/Header";
import { fetchContent } from "@/lib/contentful";
import { RECENTLY_UPDATED, LATEST_GAMES } from "@/lib/queries/gameQueries";
import GameList from "@/components/sections/GameList";
import { Game } from "@/types/Game";

export const metadata = {
  title: "Gloves Off Games",
  description:
    "Doug Glover's personal video game collection tracking site, with a rarely updated blog of thoughts and reviews on games I've played recently. Primary purpose being personal tracking so I don't accidently buy games I already own."
};

export default async function Home() {
  // Fetch the data for the recently updated games and latest games
  const recentlyUpdatedGamesData = (await fetchContent(RECENTLY_UPDATED)) as {
    gameCollection: {
      items: Game[];
    };
  };

  const latestGamesData = (await fetchContent(LATEST_GAMES)) as {
    gameCollection: {
      items: Game[];
    };
  };

  // Return the page
  return (
    <div>
      <main>
        <Header />

        <h1>Gloves Off Games</h1>
        <p>My personal collection tracking site.</p>

        <hr />

        <GameList
          title="Recently Updated"
          gamesData={recentlyUpdatedGamesData.gameCollection.items}
          dateType="publishedAt"
        />

        <GameList
          title="Latest Games"
          gamesData={latestGamesData.gameCollection.items}
          dateType="firstPublishedAt"
        />
      </main>
    </div>
  );
}
