'use client';
import Characters from '@/constants/Characters';
import Image from 'next/image';
import { CharacterType } from '@/types/CharacterTypes';
import { useState } from 'react';

const CharacterSelect = () => {
  const [activeSelection, setActiveSelection] = useState<string>('');

  return (
    <div className="text-white m-5">
      <h1 className="font-bold text-3xl">
        Active Selection: {activeSelection}
      </h1>
      <div className="text-white bg-yellow-400 w-fit">
        {Object.entries(Characters).map(
          ([key, character]: [string, CharacterType]) => (
            <div
              key={key}
              className="flex gap-2 mb-4 hover:cursor-pointer py-1 pr-4 hover:font-bold"
              onClick={() => setActiveSelection(key)}
            >
              <Image
                src={`/images/elements/${character.element?.toLowerCase()}.png`}
                height={32}
                width={32}
                alt="element"
              />
              <h1 className=" text-2xl">{character.name}</h1>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CharacterSelect;
