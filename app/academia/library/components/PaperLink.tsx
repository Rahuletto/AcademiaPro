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
      className="w-fit cursor-pointer transition duration-75 flex gap-2 items-center justify-center hover:bg-dark-accent/20 px-3 py-1 rounded-lg dark:hover:bg-dark-accent/20-light hover:bg-light-accent/20-light"
    >
      <div className="text-light-accent text-xl dark:text-dark-accent">
        <AiOutlinePaperClip />
      </div>
      <span className="font-medium text-light-color dark:text-dark-color text-base">
        {period}
      </span>
    </Link>
  );
}
