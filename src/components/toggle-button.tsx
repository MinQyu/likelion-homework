type ToggleButtonProps = React.ComponentProps<'button'> & {
  label: string;
  isOff?: boolean;
  onRender?: React.ReactElement;
  offRender?: React.ReactElement;
};

function ToggleButton({
  label,
  isOff = true,
  onRender,
  offRender,
  ...buttonProps
}: ToggleButtonProps) {
  const classes = `${className}`;
  return (
    <button {...buttonProps}>
      {isOff ? offRender : onRender}
      <span className="sr-only">{label}</span>
    </button>
  );
}

export default ToggleButton;
