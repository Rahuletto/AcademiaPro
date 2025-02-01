import Link from "next/link";
import { AiOutlinePaperClip } from "react-icons/ai";

export default function PaperLink({
  link,
  period,
}: {
  link: string;
  period: string;
}) {
  return (

    <Link
      href={`https://docs.google.com/gview?url=https://class-pro.vercel.app/academia/library/render?id=${(link)}`}
      tabIndex={0}
      title={period}
      target="_blank"
      className="w-full cursor-pointer transition duration-75 flex justify-between items-center hover:bg-dark-accent/20 px-3 py-1 pr-1 rounded-lg dark:hover:bg-dark-accent/20-light hover:bg-light-accent/20-light"
    >
      <div className="flex gap-2 items-center justify-center">
        <div className="text-light-accent text-xl dark:text-dark-accent">
          <AiOutlinePaperClip />
        </div>
        <span className="font-medium text-light-color dark:text-dark-color text-base">
          {period}
        </span>
      </div>
        <span className="px-2 py-1 rounded-md bg-light-accent dark:bg-dark-accent opacity-70 text-light-background-light dark:text-dark-background-darker font-semibold text-sm">Open</span>
    </Link>

  );
}
