type ButtonProps = {
  children?: React.ReactNode;
  classname: string | undefined;
};
const PrimaryButton = ({ children, classname }: ButtonProps) => {
  return <button className={classname}>{children}</button>;
};

export default PrimaryButton;
