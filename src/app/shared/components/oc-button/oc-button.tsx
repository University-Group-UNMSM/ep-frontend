'use-client';
// import styles from './oc-button.module.scss';
import './oc-button.scss';
interface OcButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  color?: string;
  bgColor?: string;
  children?: React.ReactNode;
  borderRadius?: string;
  icon?: string;
}

export default function OcButton({
  disabled,
  onClick,
  bgColor,
  type,
  color,
  children,
  borderRadius,
  icon
}: Readonly<OcButtonProps>) {
  const buttonDisabled = disabled || false,
    buttonBorderRadius = borderRadius || 'medium',
    buttonOnClick = onClick || (() => { });

  function iconStyles(): Record<string, string> {
    return {
      '--bg-color': bgColor || 'blue',
      '--color-text': color || 'white',
    };
  }

  return (
    <button
      className={`flex oc-button oc-shape-${buttonBorderRadius} oc-padding-small ${buttonBorderRadius} items-center justify-center gap-2 padding-4`}
      style={iconStyles()}
      disabled={buttonDisabled}
      onClick={buttonOnClick}
      type={type || 'button'}
    >
      {children}
    </button>
  );
}
