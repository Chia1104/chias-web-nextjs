import { type FC, memo } from "react";
import type { RepoGql } from "@chia/utils/types/repo";
import { VscRepoForked } from "react-icons/vsc";

interface Props {
  repo: RepoGql;
}

const RepoItem: FC<Props> = ({ repo }) => {
  return (
    <span className="c-button-secondary transform group-hover:-translate-x-1 group-hover:-translate-y-1 w-full h-full flex flex-col">
      <header className="text-2xl line-clamp-1 mb-2 group-hover:c-text-green-to-purple ">
        {repo.node.name}
      </header>
      <p className="c-description text-base line-clamp-2">
        {repo.node.description}
      </p>
      <div className="c-description mt-auto text-base flex">
        <span
          style={{
            backgroundImage: `linear-gradient(transparent 85%, ${repo.node.primaryLanguage.color} 55%)`,
          }}
          className="mr-5 flex items-center">
          {repo.node.primaryLanguage.name}
        </span>
        <span className="mr-5 flex items-center">
          {repo.node.stargazerCount > 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1 text-secondary"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          )}
          {repo.node.stargazerCount}
        </span>
        <span className="flex items-center">
          <VscRepoForked className="w-5 h-5 mr-1" />
          {repo.node.forkCount}
        </span>
      </div>
    </span>
  );
};

export default memo(
  RepoItem,
  (prev, next) => prev.repo.node.id === next.repo.node.id
);
