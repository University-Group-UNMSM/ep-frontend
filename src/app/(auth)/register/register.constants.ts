export interface Field {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  group: string;
  nameIcon?: string;
  right?: boolean;
}

export const getFields = function (t: (key: string) => string): Field[] {
  return [
    {
      id: 'name',
      label: t('fields.name'),
      placeholder: 'ysaac',
      type: 'text',
      group: 'personal',
    },
    {
      id: 'lastname',
      label: t('fields.lastname'),
      placeholder: 'correa',
      type: 'text',
      group: 'personal',
    },
    {
      id: 'email',
      label: t('fields.email'),
      placeholder: 'ysaacnoe@unmsm.edu.pe',
      type: 'email',
      group: 'email',
    },
    {
      id: 'password',
      label: t('fields.password'),
      placeholder: '*************',
      type: 'password',
      nameIcon: 'visibility',
      right: true,
      group: 'password',
    },
    {
      id: 'confirmPassword',
      label: t('fields.confirmPassword'),
      placeholder: '*************',
      type: 'password',
      nameIcon: 'visibility',
      right: true,
      group: 'password',
    },
  ];
};

export const groupedFields = function (fields: Field[]) {
  return fields.reduce<{ [key: string]: Field[] }>((groups, field) => {
    if (!groups[field.group]) {
      groups[field.group] = [];
    }
    groups[field.group].push(field);
    return groups;
  }, {});
};
