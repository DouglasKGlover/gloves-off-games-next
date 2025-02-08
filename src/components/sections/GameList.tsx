import Link from "next/link";

type Game = {
  sys: { [key: string]: string };
  title: string;
  system: { slug: string; shortName: string };
  slug: string;
};

type GameListProps = {
  title?: string;
  gamesData: Game[];
  dateType?: "publishedAt" | "firstPublishedAt";
};

const GameList: React.FC<GameListProps> = ({ title, gamesData, dateType }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {gamesData.map((game) => {
          const formattedDate = dateType
            ? new Date(game.sys[dateType]).toLocaleDateString("en-US")
            : null; // Only format the date if dateType is provided

          return (
            <li key={game.slug}>
              {/* Conditionally render the date */}
              {formattedDate && <span>{formattedDate} - </span>}{" "}
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
