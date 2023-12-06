import './Button.css';

function Button({ variant, look, size, type, onClick, disabled, href, target, name}) {
  const classes = `button ${variant} ${look} ${size}`;
  return (
    <div>
      <a href={href} target={target}>
        <button type={type} className={classes} onClick={onClick} disabled={disabled}>{name}</button>
      </a>
    </div>
  );
}

const VARIANTS = {
  FILLED: 'filled',
  OUTLINED: 'outlined'
};

const LOOKS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark'
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

Button.VARIANTS = VARIANTS;
Button.LOOKS = LOOKS;
Button.SIZES = SIZES;

export default Button;