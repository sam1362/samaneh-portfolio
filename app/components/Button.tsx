"use client";

type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  newTab?: boolean;
};

export default function Button({
  text,
  href,
  onClick,
  variant = "outline",
  newTab = false,
}: ButtonProps) {
  const baseStyle =
    "inline-block rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 active:scale-95";

  const primaryStyle =
    "bg-[#00636b] text-white hover:bg-[#004f54] border border-transparent";

  const outlineStyle =
    "border border-[#00636b] text-[#00636b] hover:bg-[#00636b] hover:text-white";

  const combined = `${baseStyle} ${
    variant === "primary" ? primaryStyle : outlineStyle
  }`;

  if (href) {
    return (
      <a
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : ""}
        className={combined}
      >
        {text}
      </a>
    );
  }

  return (
    <button className={combined} onClick={onClick}>
      {text}
    </button>
  );
}
