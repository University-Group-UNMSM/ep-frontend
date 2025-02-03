import { useState, useEffect } from 'react';
import './oc-input.scss';

interface OcInputProps {
  placeholder: string;
  type?: string;
  nameIcon?: string;
  right?: boolean;
  disabled?: boolean;
  rules?: Array<(value: string) => string | true>;
  onFocus?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  children?: React.ReactNode; // Aceptamos children como prop
}

export default function OcInput({
  type = 'text',
  disabled,
  placeholder,
  right,
  nameIcon, // Este valor puede ser reemplazado por el uso de children
  rules = [],
  onFocus,
  onChange,
  value,
  children, // Recibimos los hijos (OcIcon o OcButton)
}: Readonly<OcInputProps>) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const inputDisabled = disabled || false;

  useEffect(() => {
    const validate = () => {
      if (value) {
        for (const rule of rules) {
          const result = rule(value);
          if (result !== true) {
            setErrorMessage(result);
            return;
          }
        }
        setErrorMessage(null);
      }
    };

    validate();
  }, [value, rules]);

  return (
    <div className="oc-input">
      <div className={`oc-input-wrapper ${inputDisabled ? 'disabled' : ''}`}>
        {children && (
          <div className={`oc-icon-container ${right ? 'input-right' : 'input-left'}`}>
            {children} {/* Aquí renderizamos el OcIcon o el OcButton */}
          </div>
        )}

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            }
          }}
          onFocus={onFocus}
          className={`oc-shape-medium ${children ? (right ? 'oc-padding-right' : 'oc-padding-left') : ''} oc-padding-small`}
          disabled={inputDisabled}
        />
      </div>
      {errorMessage && <div className="oc-error-message">{errorMessage}</div>}
    </div>
  );
}
