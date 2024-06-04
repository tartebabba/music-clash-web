export default function TriesRemaining(props: { triesRemaining: number }) {
  const { triesRemaining } = props;

  const totalTries = 4;

  return (
    <div className="flex justify-center my-2">
      <p className="flex items-center text-md mx-2">
        Mistakes Remaining:
        {Array.from({ length: totalTries }).map((_, index) => (
          <span
            key={index}
            className={`flex items-center justify-center w-4 h-4 rounded-full text-black text-lg  mx-1 ${
              index >= triesRemaining ? 'bg-slate-300' : 'bg-slate-700'
            }`}
          ></span>
        ))}
      </p>
    </div>
  );
}
