import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
