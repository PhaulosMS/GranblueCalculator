const Characters = [
  {
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
  {
    name: 'Rackam',
    element: 'Fire',
  },
  {
    name: 'Io',
  },
  {
    name: 'Eugen',
  },
  {
    name: 'Rosetta',
  },
  {
    name: 'Lancelot',
  },
  {
    name: 'Vane',
  },
  {
    name: 'Percival',
  },
  {
    name: 'Siegfried',
  },
  {
    name: 'Charlotta',
  },
  {
    name: 'Yodarha',
  },
  {
    name: 'Narmaya',
  },
  {
    name: 'Zeta',
  },
  {
    name: 'Vasaraga',
  },
  {
    name: 'Ferry',
  },
  {
    name: 'Ghandaghoza',
  },
  {
    name: 'Cagliostro',
  },
  {
    name: 'Id',
  },
];

export default Characters;
