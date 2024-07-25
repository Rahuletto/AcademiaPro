import { Time } from "@/utils/Times";

export default function TableHeader() {
  return (
    <div className="flex w-full justify-around gap-1 p-1">
      {[...Array.from(Array(10).keys())].map((i) => (
        <span
          key={i}
          title={Time.start[i] + "-" + Time.end[i]}
          className="w-[10%] text-center font-semibold text-light-color opacity-70 dark:text-dark-color"
        >
          {i + 1}
        </span>
      ))}
    </div>
  );
}
