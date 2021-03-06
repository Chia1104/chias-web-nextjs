import { type ReactNode, type FC, useRef, useEffect, useState } from "react";
import cx from "classnames";
import useIsMounted from "@chia/hooks/useIsMounted";
import useCopyToClipboard from "@chia/hooks/useCopyToClipboard";
import { useSnackbar } from "notistack";
import useHover from "@chia/hooks/useHover";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  text?: string;
  type?: string;
}

export const MDXCode: FC<Props> = ({ children, text, type }) => {
  if (!type) type = "info";

  return (
    <div className="relative mt-10">
      <div
        className={cx(
          "-top-4 absolute border-2 rounded-full px-3 py-1 c-text-secondary z-20",
          type === "info" && "bg-info/70 border-info",
          type === "warning" && "bg-warning/70 border-warning",
          type === "success" && "bg-success/70 border-success",
          type === "error" && "bg-danger/70 border-danger"
        )}>
        {text || "Code info"}
      </div>
      {children}
    </div>
  );
};

export const MDXPre: FC<Props> = (props) => {
  const isMounted = useIsMounted();
  const ref = useRef<HTMLPreElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const isHover = useHover(ref2);
  const [value, copy] = useCopyToClipboard();
  const [copyText, setCopyText] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (isMounted()) {
      const source = ref.current?.innerText;
      setCopyText(source || "");
    }
  }, [isMounted]);

  const handleCopyToast = () => {
    enqueueSnackbar(`Copied !`, { variant: "success" });
  };

  const handleCopy = () => {
    copy(copyText).then((r) => {
      if (r) {
        handleCopyToast();
      }
    });
  };

  const variants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  return (
    <div className="relative" ref={ref2}>
      <motion.button
        className="absolute top-0 right-0 mr-3 mt-3 inline-flex p-1 rounded-lg text-sm hover:c-bg-secondary"
        onClick={handleCopy}
        initial={"closed"}
        animate={isHover ? "open" : "closed"}
        exit={"closed"}
        variants={variants}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.7}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </span>
        <span className="hidden sm:block sm:ml-1">COPY</span>
      </motion.button>

      <pre
        {...props}
        className="dark:bg-code bg-[#dddddd] w-full my-7 p-7 pb-4 rounded-xl dark:text-white text:black overflow-x-auto transition ease-in-out"
        ref={ref}>
        {props.children}
      </pre>
    </div>
  );
};

export const MDXCodeOrigin: FC<Props> = (props) => {
  return (
    <code
      {...props}
      className="dark:bg-code bg-[#dddddd] rounded dark:text-white text:black overflow-x-auto transition ease-in-out p-0.5">
      {props.children}
    </code>
  );
};
