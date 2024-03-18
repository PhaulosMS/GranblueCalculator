'use client';
import Weapons from '@/constants/Weapons';
import { useState } from 'react';

type Weapon = {
  name: string;
};
const Weapon = () => {
  const [activeSelection, setActiveSelection] = useState<string>('NONE');

  return (
    <div>
      <select
        className="bg-black"
        onChange={(e) => setActiveSelection(e.target.value)}
      >
        <option>-</option>
        {Object.entries(Weapons).map(([key, weapon]: [string, Weapon]) => (
          <option>{weapon.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Weapon;
