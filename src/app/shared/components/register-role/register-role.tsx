'use client';

import { useState } from 'react';
import './register-role.scss';
interface RegisterRoleProps {
  onRoleChange: (role: 'entrepreneur' | 'investor' | null) => void;
}

export default function RegisterRole({ onRoleChange }: RegisterRoleProps) {
  const [selectedRole, setSelectedRole] = useState<'entrepreneur' | 'investor' | null>(null);

  const toggleRole = (role: 'entrepreneur' | 'investor') => {
    const newRole = selectedRole === role ? null : role;
    setSelectedRole(newRole);
    onRoleChange(newRole);
  };

  const activeRole = (role: 'entrepreneur' | 'investor') => role === selectedRole && 'active';

  return (
    <div className="register-role oc-typo-label-large oc-gap-small oc-padding-y-medium">
      <div
        className={`role-button oc-surface-container-high oc-shape-medium ${activeRole('entrepreneur')}`}
        onClick={() => toggleRole('entrepreneur')}
      >
        Emprendedor{/* profesor */}
      </div>
      <div
        className={`role-button oc-surface-container-high oc-shape-medium ${activeRole('investor')}`}
        onClick={() => toggleRole('investor')}
      >
        Inversionista {/* Alumno */}
      </div>
    </div>
  );
}
