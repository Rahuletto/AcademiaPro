export default function CourseCode({ code }: { code: string }) {
  return (
    <span className="px-2 py-0.5 text-sm font-semibold w-fit dark:bg-dark-accent/20 bg-light-accent/20 dark:text-dark-accent text-light-accent rounded-md">
      {code}
    </span>
  );
}
