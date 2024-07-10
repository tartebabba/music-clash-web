import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mx-auto flex h-1/3 flex-row items-center justify-center border">
      <div className="flex h-2/3 max-w-[25%] flex-col items-center gap-2 border py-2">
        <h1>
          <Link to="/connections">Connections</Link>
        </h1>
        <p>Game card description</p>
        <div className="w-[80%] rounded-md border">
          <Link to="/connections">Play Game</Link>
        </div>
      </div>
    </div>
  );
}
