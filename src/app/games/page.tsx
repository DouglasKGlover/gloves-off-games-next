import { fetchContent } from "@/lib/contentful";
import { ALL_GAMES } from "@/lib/queries/games";
import GameList from "@/components/sections/GameList";
import { Game } from "@/types/Game";

export const metadata = {
  title: "Gloves Off Games - Games",
  description: "A page where I list all of my games.",
};

export default async function Page() {
  // Fetch the data for all games
  const allGamesData = (await fetchContent(ALL_GAMES)) as {
    gameCollection: {
      items: Game[];
    };
  };

  return (
    <main>
      <h1>Games</h1>
      <hr />

      <GameList gamesData={allGamesData.gameCollection.items} />
    </main>
  );
}
