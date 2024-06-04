// Create NavBar component
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/connections">Connections</Link>
        </li>
      </ul>
    </nav>
  );
}
