'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import './register-role.scss';
interface RegisterRoleProps {
  onRoleChange: (role: 'teacher' | 'student' | null) => void;
}

export default function RegisterRole({ onRoleChange }: RegisterRoleProps) {
  const t = useTranslations('Register');
  const [selectedRole, setSelectedRole] = useState<'teacher' | 'student' | null>(null);

  const toggleRole = (role: 'teacher' | 'student') => {
    const newRole = selectedRole === role ? null : role;
    setSelectedRole(newRole);
    onRoleChange(newRole);
  };

  const activeRole = (role: 'teacher' | 'student') => role === selectedRole && 'active';

  return (
    <div className="register-role oc-typo-label-large oc-gap-small oc-padding-y-medium">
      <div
        className={`role-button oc-surface-container-high oc-shape-medium ${activeRole('teacher')}`}
        onClick={() => toggleRole('teacher')}
      >
        {t('roles.teacher')}
      </div>
      <div
        className={`role-button oc-surface-container-high oc-shape-medium ${activeRole('student')}`}
        onClick={() => toggleRole('student')}
      >
        {t('roles.student')}
      </div>
    </div>
  );
}
