import CharacterSelect from '@/components/CharacterSelect';
import CharacterInfo from '@/components/CharacterInfo';

export default function Home() {
  return (
    <main>
      <div className="flex py-1 pr-4 m-5 gap-4">
        <CharacterSelect />
        <CharacterInfo />
      </div>
    </main>
  );
}
