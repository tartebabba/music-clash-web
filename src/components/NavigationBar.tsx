// Create NavBar component
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <nav className="my-2 flex items-center justify-center py-2">
      <h1 className="font-sans text-4xl font-extrabold">
        <Link to="/home">Music Clash</Link>
      </h1>
    </nav>
  );
}
