'use client';
import Sigils from '@/constants/Sigils';
import { ChangeEvent, useEffect, useState } from 'react';
import { Test } from './Sigils/DamageCap';

const SigilThing = () => (
  <div>
    <select className="bg-black text-center">
      <option>-</option>
      {Sigils.map((sigil) => (
        <option value={sigil.name}>{sigil.name}</option>
      ))}
    </select>
    <select className="bg-black text-center">
      <option>-</option>
      {Sigils.map((sigil) => (
        <option value={sigil.name}>{sigil.name}</option>
      ))}
    </select>
  </div>
);

const SigilSlot = () => {
  return (
    <div className="bg-yellow-400 flex gap-3 flex-col">
      <SigilThing />
      <SigilThing />
      <SigilThing />
      <SigilThing />
      <SigilThing />
      <SigilThing />
      <SigilThing />
      <SigilThing />
      <SigilThing />
      <SigilThing />
      <SigilThing />
      <SigilThing />
      <Test SigilLevel={65} />
    </div>
  );
};

export default SigilSlot;
