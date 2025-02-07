const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
  icon,
  noPaddingLeft,
}) => {
  const classes = `button text-xs tracking-[0.125rem] relative flex p-[1.25rem] pr-[1rem] items-center justify-between h-9 transition-colors hover:bg-n-1 ${className}`;

  const renderButton = () => (
    <button className={classes}>
      <span>{children}</span>
      <span>{icon}</span>
    </button>
  );

  return renderButton();
};

export default Button;
