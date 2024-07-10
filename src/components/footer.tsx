import { Link } from 'react-router-dom';

export default function Footer() {
  const linkStyles =
    'mx-2 font-bold link-underline hover:text-[hsl(280,100%,70%)]';

  return (
    <footer className="mt-auto border-t">
      <div className="m-2 mb-5 flex items-center justify-between">
        <div className="">
          <div className="mx-1 text-sm">
            <Link to="" className="link-underline">
              Made by Jez{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
        </div>
        <div>
          <Link
            to="https://github.com/tartebabba/music-clash-web"
            className={linkStyles}
          >
            GitHub.
          </Link>
          <Link
            to="https://www.linkedin.com/in/jezpiedad/"
            className={linkStyles}
          >
            LinkedIn.
          </Link>
        </div>
      </div>
    </footer>
  );
}
