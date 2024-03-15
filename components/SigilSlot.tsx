'use client';
import Sigils from '@/constants/Sigils';
import { ChangeEvent, useEffect, useState } from 'react';

const SigilThing = () => (
  <select className="bg-black">
    {Sigils.map((sigil) => (
      <option value={sigil.name}>{sigil.name}</option>
    ))}
  </select>
);

const SigilSlot = () => {
  const [sigilSlots, setSigilSlots] = useState<number>(12);

  useEffect(() => {}, [sigilSlots]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    let SigilValue: number = 0;
    if (parseInt(e.target.value) > 12) {
      SigilValue = 12;
    } else SigilValue = parseInt(e.target.value);
    setSigilSlots(SigilValue);
  };
  return (
    <div className="bg-yellow-400 flex gap-3 flex-col">
      <input
        className="text-white bg-black"
        type="number"
        value={sigilSlots}
        onChange={(e) => handleOnChange(e)}
      />
      {Array.from({ length: sigilSlots }).map((_, idx) => (
        <SigilThing key={idx} />
      ))}
    </div>
  );
};

export default SigilSlot;
