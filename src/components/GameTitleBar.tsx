import dayjs from 'dayjs';

export default function GameTitleBar() {
  return (
    <div className="flex items-center my-6 border-t border-b p-6">
      <h1 className="font-serif font-semi-bold tracking-tight text-3xl mx-4">
        Music Connections
      </h1>
      <h2 className="text-center text-xl">{dayjs().format('MMMM DD, YYYY')}</h2>
    </div>
  );
}
