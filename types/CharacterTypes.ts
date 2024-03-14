export type CharacterType = {
  name?: string;
  title?: string;
  description?: string;
  element?: string;
  skills?: SkillsType[];
};

type SkillsType = {
  name: string;
  effect: string;
  type: string;
  element: string;
  duration?: number | null;
  buffs?: BuffsType[];
};

type BuffsType = {
  name: string;
  description: string;
};
