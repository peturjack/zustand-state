type SecondaryButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const SecondaryButton = ({ onClick, children }: SecondaryButtonProps) => {
  return (
    <button className="border-2 rounded py-2 px-4" onClick={onClick}>
      {children}
    </button>
  );
};

export default SecondaryButton;
