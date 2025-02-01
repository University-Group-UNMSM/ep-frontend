'use-client';
import './oc-button.scss';
interface OcButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  color?: string;
  bgColor?: string;
  children?: React.ReactNode;
  borderRadius?: string;
}

export default function OcButton({
  disabled,
  onClick,
  bgColor,
  color,
  children,
  borderRadius,
}: Readonly<OcButtonProps>) {
  const buttonDisabled = disabled || false,
    buttonBorderRadius = borderRadius || 'medium',
    buttonOnClick = onClick || (() => {});

  function iconStyles(): Record<string, string> {
    return {
      '--bg-color': bgColor || 'blue',
      '--color-text': color || 'white',
    };
  }

  return (
    <button
      className={`oc-button oc-shape-${buttonBorderRadius} oc-padding-small ${buttonBorderRadius}`}
      style={iconStyles()}
      disabled={buttonDisabled}
      onClick={buttonOnClick}
    >
      {children}
    </button>
  );
}
