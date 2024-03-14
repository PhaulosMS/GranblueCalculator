import Characters from '@/constants/Characters';

export default function Home() {
  return (
    <main>
      <div>
        <h1>
          {Characters.map((character) => (
            <h1>{character.name}</h1>
          ))}
        </h1>
      </div>
    </main>
  );
}
