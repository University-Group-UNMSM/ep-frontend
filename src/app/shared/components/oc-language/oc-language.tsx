'use-client';
import { useLocale } from 'next-intl';

import OcSelectorLanguage from './oc-selector-language';

export default function OcLanguage() {
  const locale = useLocale();
  return (
    <OcSelectorLanguage
      defaultValue={locale}
      items={[
        {
          value: 'en',
          label: 'en',
        },
        {
          value: 'es',
          label: 'es',
        },
      ]}
      label="Language"
    />
  );
}
