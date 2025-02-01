import './oc-selector-language.scss';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';
import React, { ChangeEvent } from 'react';
import { useTransition } from 'react';

interface ItemProps {
  value: string;
  label: string;
}

interface LanguageProps {
  defaultValue: string;
  items: Array<ItemProps>;
  label: string;
}

export default function OcSelectorLanguage({ defaultValue, items, label }: LanguageProps) {
  const [, startTransition] = useTransition();

  function onChangeLanguage(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="relative">
      <div aria-label={label} className="selector oc-padding-small oc-shape-small">
        <select defaultValue={defaultValue} onChange={onChangeLanguage} className="selector-language oc-typo-text">
          {items.map((item) => (
            <option className="text-black" key={item.value} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
