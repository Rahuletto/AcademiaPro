export default function Warn() {
  return (
    <div
      style={{ backgroundColor: "rgb(23, 21, 15)" }}
      className="absolute bottom-4 right-4 flex flex-col gap-2 rounded-3xl border-2 border-yellow px-5 py-3"
    >
      <h3 className="text-xl text-yellow">Warning</h3>
      <p className="max-w-[350px] text-sm opacity-60">
        SRM Academia didn{"'"}t provide necessary data. Its probably because of
        a new academic year. If its flagged wrong, please logout and try again.
      </p>
    </div>
  );
}
