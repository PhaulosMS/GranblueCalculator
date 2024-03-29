const Characters = {
  Katalina: {
    name: 'Katalina',
    title: 'Skybound Protector',
    description: `Katalina once swore an oath of knighthood to the Erste Empire, but those days are long behind her. 
      Her knightly duty continues, though now in the service of protecting Lyria.`,
    element: 'Water',
    skills: [
      {
        name: 'Azure Sword',
        effect:
          'Summon Ares to attack foes in front of Katalina and temporarily maxes out the Ares gauge',
        type: 'Buff',
        element: 'Water',
        duration: null,
      },
      {
        name: `Winter's Rain`,
        effect:
          'A multi-hit attack that deals a high amount of stun. Deals more hits when attacking with Ares',
        type: 'Damage',
        element: 'Water',
      },
      {
        name: 'Light Wall',
        effect:
          'Grants invincibilty to Kataina. Grants invincibilty to entire party if Ares is summoned',
        type: 'buff',
        element: 'Plain',
        duration: null,
      },
      {
        name: 'Enchanted Lands',
        effect:
          'A fast, piercing lunge attack. Deals more hits when attacking with Ares',
        type: 'Damage',
        element: 'Water',
      },
      {
        name: 'Heal',
        effect: `Casts a circle that restores allies' HP. Heals more HP over a wider area while Ares is summoned`,
        type: 'Healing',
        element: 'Plain',
        duration: null,
      },
      {
        name: 'Frozen Blade',
        effect:
          'A ranged ice spell that can be cast twice in a row before entering cooldown. Deals more hits when attacking with Ares',
        type: 'Damage',
        element: 'Water',
        duration: null,
      },
      {
        name: 'Emerald Shield',
        effect:
          'Grants DEF UP and Stout Heart to Katalina. Grants both buffs to entire party instead while Ares is summoned',
        type: 'buff',
        element: 'Plain',
        buffs: [
          {
            name: 'DEF UP (15%)',
            description: 'DEF is boosted',
          },
          {
            name: 'Stout Heart',
            description: "Taking damage doesn't interupt character actions.",
          },
        ],
        duration: null,
      },
    ],
  },
  Rackam: {
    name: 'Rackam',
    title: 'Skybound Protector',
    element: 'Fire',
  },
  Io: {
    name: 'Io',
    title: 'Skybound Protector',
    element: 'Light',
  },
  Eugen: {
    name: 'Eugen',
    title: 'Skybound Protector',
    element: 'Earth',
  },
  Rosetta: {
    name: 'Rosetta',
    title: 'Skybound Protector',
    element: 'Dark',
  },
  Lancelot: {
    name: 'Lancelot',
    title: 'Skybound Protector',
    element: 'Water',
  },
  Vane: {
    name: 'Vane',
    title: 'Skybound Protector',
    element: 'Water',
  },
  Percival: {
    name: 'Percival',
    title: 'Skybound Protector',
    element: 'Fire',
  },
  Siegfried: {
    name: 'Siegfried',
    title: 'Skybound Protector',
    element: 'Earth',
  },
  Charlotta: {
    name: 'Charlotta',
    title: 'Skybound Protector',
    element: 'Light',
  },
  Yodarha: {
    name: 'Yodarha',
    title: 'Skybound Protector',
    element: 'Wind',
  },
  Narmaya: {
    name: 'Narmaya',
    title: 'Skybound Protector',
    element: 'Dark',
  },
  Zeta: {
    name: 'Zeta',
    title: 'Skybound Protector',
    element: 'Fire',
  },
  Vasaraga: {
    name: 'Vasaraga',
    title: 'Skybound Protector',
    element: 'Dark',
  },
  Ferry: {
    name: 'Ferry',
    title: 'Skybound Protector',
    element: 'Light',
  },
  Ghandaghoza: {
    name: 'Ghandaghoza',
    title: 'Skybound Protector',
    element: 'Fire',
  },
  Cagliostro: {
    name: 'Cagliostro',
    title: 'Skybound Protector',
    element: 'Earth',
  },
  Id: {
    name: 'Id',
    title: 'Skybound Protector',
    element: 'Dark',
  },
  MC: {
    name: 'Gran/Djeeta',
    title: 'Skybound Protector',
    element: 'Wind',
  },
};

export default Characters;
