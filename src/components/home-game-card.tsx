import { Link } from 'react-router-dom';
import { GameCardProps } from './types';

const AvailableGames: GameCardProps[] = [
  {
    id: 1,
    name: 'Connections',
    link: '/connections',
    description: 'Find the connections between the songs and artists.',
  },
];

export default function HomeGameCard() {
  return (
    <>
      {AvailableGames.map((game) => {
        return (
          <div
            key={game.id}
            className="flex h-2/3 max-w-[25%] flex-col items-center justify-between gap-2 rounded-lg border border-slate-200 py-2"
          >
            <h1>
              <Link to={game.link} className="font-bold">
                {game.name}
              </Link>
            </h1>
            <p>{game.description}</p>
            <div className="w-[80%] rounded-md border hover:bg-slate-600 hover:text-white">
              <Link to={game.link}>Play Game</Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
