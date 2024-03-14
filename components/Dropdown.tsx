import Characters from '@/constants/Characters';
import Image from 'next/image';

const Dropdown = () => (
  <div className="pl-10 flex flex-col gap-3">
    {Characters.map((character, index) => (
      <div key={index} className="hover:cursor-pointer bg-yellow-400 w-fit">
        <h1>{character.title}</h1>
        <h1>{character.name}</h1>
        <Image
          src={`/images/elements/${character.element?.toLowerCase()}.png`}
          width={32}
          height={32}
          alt="elemetn"
        />
        <h2>{character.description}</h2>
        <div className="flex flex-col gap-2">
          {character.skills?.map((skill, skillIndex) => (
            <div key={skillIndex}>
              <h3>{skill.name}</h3>
              <h3>{skill.effect}</h3>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
export default Dropdown;
