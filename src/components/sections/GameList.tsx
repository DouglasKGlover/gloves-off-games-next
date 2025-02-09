import Link from "next/link";
import { GameLink } from "@/types/Game";

type GameListProps = {
  title?: string;
  gamesData: GameLink[];
  dateType?: "publishedAt" | "firstPublishedAt";
};

// Component to display a list of games
const GameList: React.FC<GameListProps> = ({ title, gamesData, dateType }) => {
  return (
    <section>
      {/* Show the title of the list if provided */}
      {title && <h2>{title}</h2>}
      <ul>
        {gamesData.map((game) => {
          const formattedDate = dateType
            ? new Date(game.sys[dateType] || "").toLocaleDateString("en-US")
            : null; // Only format the date if dateType is provided

          return (
            // List item for each game
            <li key={game.sys.id}>
              {/* Date */}
              {formattedDate && <span>{formattedDate} - </span>}{" "}
              {/* Link to game's page */}
              <Link href={`/games/${game.system.slug}/${game.slug}`}>
                {game.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default GameList;
