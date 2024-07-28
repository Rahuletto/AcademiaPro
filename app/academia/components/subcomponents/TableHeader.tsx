import { Time } from "@/utils/Times";

export default function TableHeader() {
  return (
    <div aria-hidden className="hidden w-full select-none justify-around gap-1 p-1 lg:flex" style={{ WebkitUserSelect: "none" }}>
      {[...Array.from(Array(10).keys())].map((i) => (
        <span
          aria-hidden
          key={i}
          title={Time.start[i] + "-" + Time.end[i]}
          className="w-[10%] select-none text-center font-semibold text-light-color opacity-70 dark:text-dark-color"
        >
          {i + 1}
        </span>
      ))}
    </div>
  );
}
