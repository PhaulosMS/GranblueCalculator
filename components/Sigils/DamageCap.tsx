import React, { useEffect, useState } from 'react';

export const Test = ({ SigilLevel }: { SigilLevel: number }) => {
  // 1-30 + 3
  // 31-50 + 4
  // 50-60 + 5
  // 60-65 + 6
  const [SigilBaseTierBonus, setSigilBaseTierBonus] = useState<number>(0);

  // setSigilBaseTierBonus = Tier Cut Offs where it increases from 3 > 4 > 5 > 6 90% 170% 220%
  const CalculateSigilPercentage = () => {
    if (SigilLevel > 0 && SigilLevel <= 30) {
      setSigilBaseTierBonus(SigilLevel * 3);
    } else if (SigilLevel > 30 && SigilLevel <= 50) {
      setSigilBaseTierBonus(90 + (SigilLevel - 30) * 4);
    } else if (SigilLevel > 50 && SigilLevel <= 60) {
      setSigilBaseTierBonus(170 + (SigilLevel - 50) * 5);
    } else if (SigilLevel > 60 && SigilLevel <= 65) {
      setSigilBaseTierBonus(220 + (SigilLevel - 60) * 6);
    }
  };

  useEffect(() => {
    CalculateSigilPercentage();
  }, [SigilBaseTierBonus]);
  return (
    <div>
      <h1>Damage Cap: {SigilBaseTierBonus}%</h1>
      <h1>Skill Damage Cap: {SigilBaseTierBonus}%</h1>
      <h1>SBA Damage Cap: {SigilBaseTierBonus}%</h1>
    </div>
  );
};
