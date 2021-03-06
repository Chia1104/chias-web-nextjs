import { type FC, useId, useMemo, memo } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import {
  activeActionIconSheet,
  selectActionIconSheet,
} from "@chia/store/modules/ActionSheet/actionSheet.slice";
import { motion } from "framer-motion";
import { useAppSelector } from "@chia/hooks/useAppSelector";
import Script from "next/script";
import cx from "classnames";
import { useSnackbar, VariantType } from "notistack";
import { useTheme } from "next-themes";

const outside = {
  open: { opacity: 1, height: "550px", width: "330px" },
  closed: { opacity: 0, height: 0, width: 0, transition: { delay: 0.2 } },
};
const inside = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 100 },
};

const FORMSPREE_KEY = process.env.NEXT_PUBLIC_FORMSPREE_KEY as string;
const RE_CAPTCHA_KEY = process.env.NEXT_PUBLIC_RE_CAPTCHA_KEY as string;

const Contact: FC = () => {
  const dispatch = useAppDispatch();
  const actionIconSheet = useAppSelector(selectActionIconSheet);
  const [state, handleSubmit] = useForm(FORMSPREE_KEY);
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitToast = (msg: string, variant: VariantType) => () => {
    enqueueSnackbar(msg, { variant });
  };

  const { theme, setTheme } = useTheme();

  useMemo(() => {
    if (state.succeeded)
      handleSubmitToast("We have received your message", "success")();
  }, [state.succeeded]);

  const id = useId();
  return (
    <motion.div
      initial={"closed"}
      animate={actionIconSheet ? "open" : "closed"}
      variants={outside}
      className="px-3">
      <motion.div
        animate={actionIconSheet ? "open" : "closed"}
        variants={inside}
        className="flex flex-col justify-start items-center w-full h-full">
        <button
          aria-label={"Close contact"}
          onClick={() => dispatch(activeActionIconSheet())}
          className="hover:text-secondary  transition ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <form
          id={id + "-contact-form"}
          className="w-full flex flex-col mx-auto"
          onSubmit={handleSubmit}>
          <header className="text-3xl mb-5">Contact Me</header>
          <p className="text-xl pb-2">Email</p>
          <div className="w-full mb-4">
            <input
              id={id + "-contact-email"}
              type="email"
              name="email"
              className="w-full h-10 p-2 border-2 border-primary rounded-lg"
              placeholder={"Your email"}
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-warning mt-2"
            />
          </div>
          <p className="text-xl pb-2">Message</p>
          <div className="w-full mb-4">
            <textarea
              id={id + "-contact-message"}
              name="message"
              className="w-full h-36 max-h-36 p-2 border-2 border-primary rounded-lg overflow-y-auto"
              placeholder={"Your message"}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-warning mt-2"
            />
          </div>
          <button
            id={id + "-contact-submit"}
            type="submit"
            disabled={state.submitting}
            className="self-center c-bg-gradient-green-to-purple w-[85px] h-10 rounded-full flex justify-center items-center text-white hover:scale-[1.05] transition ease-in-out">
            Send
          </button>
          <Script src="https://www.google.com/recaptcha/api.js" async defer />
          <div
            data-theme={theme === "dark" ? "dark" : "light"}
            className={cx("g-recaptcha self-center my-3", {
              hidden: !actionIconSheet,
            })}
            data-sitekey={RE_CAPTCHA_KEY}
          />
          <ValidationError
            errors={state.errors}
            className="text-warning mt-2"
          />
        </form>
      </motion.div>
    </motion.div>
  );
};

export default memo(Contact);
