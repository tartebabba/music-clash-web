import { Link } from 'react-router-dom';
import { GameCardProps } from './types';
import { ConnectionsIcon } from '@/assets/ConnectionsIcon';

const AvailableGames: GameCardProps[] = [
  {
    id: 1,
    name: 'Connections',
    link: '/connections',
    description: 'Find the connections between the songs and artists.',
    icon: 'ConnectionsIcon',
  },
  // Add other games here
];

const iconMap = {
  ConnectionsIcon: ConnectionsIcon,
  // Add other icons here
};

export default function HomeGameCard() {
  return (
    <>
      {AvailableGames.map((game) => {
        const IconComponent = iconMap[game.icon];
        return (
          <div
            key={game.id}
            className="mx-auto flex h-72 w-80 flex-col justify-between gap-2 rounded-lg border border-slate-200"
          >
            <div className="flex h-1/2 flex-col border-b bg-slate-50 py-2">
              {IconComponent && <IconComponent />}
              <h1 className="">
                <Link to={game.link} className="font-bold">
                  {game.name}
                </Link>
              </h1>
            </div>
            <p>{game.description}</p>
            <div className="mx-auto my-4 w-[80%] rounded-md border bg-slate-100 py-1 hover:bg-slate-600 hover:text-white">
              <Link to={game.link}>Play Game</Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
