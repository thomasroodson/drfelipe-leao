import Link from "next/link";
type Props = {
  label: string;
  url: string;
  bgcolor?: string;
  svg?: string;
};

export const Button = ({ label, url, bgcolor, svg }: Props) => {
  return (
    <Link href={url} target="_blanc">
      <button
        className={`flex items-center mt-5 px-5 py-2 rounded-full text-base font-semibold ${
          bgcolor
            ? bgcolor
            : "bg-gradient-to-t from-slate-900 to-slate-700 text-white"
        }`}
      >
        {label}
        <svg
          className={`ml-2 pt-0.5 w-3 ${svg ? svg : "fill-white"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </button>
    </Link>
  );
};
