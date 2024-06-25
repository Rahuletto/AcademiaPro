export default function Warn() {
  return (
    <div
      style={{ backgroundColor: 'rgb(23, 21, 15)' }}
      className="flex flex-col gap-2 absolute right-4 bottom-4 rounded-3xl px-5 py-3 border-yellow border-2"
    >
      <h3 className="text-yellow text-xl">Warning</h3>
      <p className="opacity-60 text-sm max-w-[350px]">
        SRM Academia didn{"'"}t provide necessary data. Its probably because of
        a new academic year. If its flagged wrong, please logout and try again.
      </p>
    </div>
  );
}
