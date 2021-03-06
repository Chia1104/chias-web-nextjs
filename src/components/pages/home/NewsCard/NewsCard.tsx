import { type FC } from "react";
import Link from "@chia/components/globals/Link";
import { type UrlObject } from "url";

interface Props {
  title: string;
  content: string;
  subtitle?: string;
  link: string | UrlObject;
}

export const NewsCard: FC<Props> = ({ title, content, subtitle, link }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <header className="subtitle c-text-secondary truncate">{title}</header>
      <div className="lg:mx-5 c-bg-gradient-yellow-to-pink w-[310px] rounded-xl relative flex justify-center items-center h-[170px] mt-5">
        <div className="w-[303px] h-[163px] c-bg-secondary p-2 rounded-xl flex flex-col">
          <p className="text-lg text-center line-clamp-3">{content}</p>
          <p className="text-base text-left line-clamp-1 c-text-secondary mt-auto mb-5 pl-1 c-description">
            {subtitle}
          </p>
        </div>
        <Link href={link}>
          <a className="c-bg-gradient-green-to-purple w-[85px] absolute top-[9rem] h-10 rounded-full flex justify-center items-center text-white hover:scale-[1.05] transition ease-in-out">
            MORE
          </a>
        </Link>
      </div>
    </div>
  );
};
