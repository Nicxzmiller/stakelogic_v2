const data = {
  games: [
    {
      _id: '1',
      name: 'BlackJack',
      slug: 'American Blackjack',
      category: 'Card games',
      image: '/images/bj.jpg',
      betTypes: [
        {
          _id: '1',
          name: 'Flush',
          det: 'Flush',
          category: 'American Blackjack',
          description:
            'The player’s two initial cards and dealer’s first cards are all of the same suits and have different values (it is also valid if two of the three cards are of the same value)',
          image: '',
        },
        {
          _id: '2',
          name: 'Mixed Color Pair',
          det: 'MXP',
          category: 'American Blackjack',
          description:
            'When the player gets two initial cards as a pair (same value) of different colour and different suit.',
          image: '',
        },
        {
          _id: '3',
          name: 'Same Color Pair',
          det: 'SCP',
          category: 'American Blackjack',
          description:
            'When the player gets two initial cards as a pair of the same colour but different suit.',
          image: '',
        },
        {
          _id: '4',
          name: 'Straight Flush',
          det: 'SF',
          category: 'American Blackjack',
          description:
            'When the player’s initial cards and the dealer’s first card are all from the same suit, creating a sequence (Can also be AD,2D and 3D, or QH, KH and AH)',
          image: '',
        },
        {
          _id: '5',
          name: 'Suited Trips',
          det: 'ST',
          category: 'American Blackjack',
          description:
            'When the player’s initial cards and the dealer’s first card are the same (All cards must be the same)',
          image: '',
        },
        {
          _id: '6',
          name: 'Straight',
          det: 'Straight',
          category: 'American Blackjack',
          description:
            'When the player’s initial cards and dealer’s first card create a sequence (it is also valid if two of the cards are of the same suit)',
          image: '',
        },
        {
          _id: '7',
          name: 'Golden Pair ',
          det: 'GP',
          category: 'American Blackjack',
          description:
            'When the initial 2 cards have the same value and same suit.',
          image: '',
        },
        {
          _id: '8',
          name: 'Buzz T ',
          det: 'Buzz',
          category: 'American Blackjack',
          description:
            'BUZZ-T or known as “Bust” or “Bust It” is one of Blackjack’s side bets that allow betting that the Dealer will bust his hand. Greater the chances of busting, the less the bet pays',
          image: '',
        },
      ],
    },
    {
      _id: '2',
      name: 'Roulette',
      slug: 'European Roulettes',
      category: 'Roulette games',
      image: '/images/roulette.jpg',
      betTypes: [
        {
          _id: '1',
          name: 'Straight',
          det: 'Roulette Straight',
          category: 'Roulette Games',
          description:
            'A straight-up bet is a bet on a single number. If the number chosen is the winning number, the player will be paid 35:1.',
          image: '',
        },
        {
          _id: '2',
          name: 'Six Line',
          det: 'Sixline',
          category: 'Roulette Games',
          description:
            'A Six-line bet is a bet on six numbers, and it is placed on the line separating the outside and inside area. If one of the numbers chosen is the winning number, the player will be paid 5:1.',
          image: '',
        },
        {
          _id: '3',
          name: 'Split',
          det: 'Split',
          category: 'Roulette Games',
          description: '',
          image:
            'A split bet is a bet on two adjacent numbers. If one of the numbers chosen is the winning number, the player will be paid 17:1.',
        },
        {
          _id: '4',
          name: 'Street',
          det: 'Street',
          category: 'Roulette Games',
          description:
            'A street bet is a bet on three numbers in a row. If one of the numbers chosen is the winning number, the player will be paid 11:1.',
          image: '',
        },
        {
          _id: '5',
          name: '1-18/19-36',
          det: '1-18/19-36',
          category: 'Roulette Games',
          description: 'Bets placed on this has a payout of 1:1',
          image: '',
        },
        {
          _id: '6',
          name: 'Even/Odd',
          det: 'Even and Odd',
          category: 'Roulette Games',
          description: 'Bets placed on this has a payout of 1:1',
          image: '',
        },
        {
          _id: '7',
          name: 'Red/Black',
          det: 'Red/Black',
          category: 'Roulette Games',
          description: 'Bets placed on this has a payout of 1:1',
          image: '',
        },
        {
          _id: '8',
          name: 'Corner',
          det: 'Corner',
          category: 'Roulette Games',
          description:
            'A corner bet is a bet on four numbers, and it is placed on the corner of four numbers. If one of the numbers chosen is the winning number, the player will be paid 8:1.',
          image: '',
        },
        {
          _id: '9',
          name: 'Dozen',
          det: 'Dozen',
          category: 'Roulette Games',
          description:
            'The layout of the roulette is divided into three sections Section 1 (1st Dozen) - covers numbers 1 to 12.Section 2 (2nd Dozen) - covers numbers 13 to 24. Section 3 (3rd Dozen) - covers numbers 25 to 36. A winning bet placed on any of these sections (dozens) pays 2:1',
          image: '',
        },
        {
          _id: '10',
          name: 'Column',
          det: 'COlumn',
          category: 'Roulette Games',
          description:
            'The layout of the roulette is divided into three columns (rows). A player may bet on any of the three columns of vertical numbers.A winning bet placed on any of these sections (columns) pays 2:1',
          image: '',
        },
      ],
    },
    {
      _id: '3',
      name: 'Game Shows',
      slug: 'Game Shows',
      category: 'Game Shows',
      image: '/images/gameshow.jpeg',
    },
    {
      _id: '4',
      name: 'Slots',
      slug: 'Slot Games',
      category: 'Slots',
      image: '/images/slot.jpg',
    },
  ],
  refunds: [
    {
      _id: '1',
      name: 'Refunds',
      slug: 'Refunds',
      token: 'OFFLINE_TOKEN',
      currency: [
        {
          _id: '1',
          name: 'Eur',
        },
        {
          _id: '2',
          name: 'USD',
        },
      ],
      gameId: [
        {
          _id: '1',
          name: 'LC3107',
        },
        {
          _id: '2',
          name: 'LC3108',
        },
        {
          _id: '3',
          name: 'LC3005',
        },
        {
          _id: '4',
          name: 'LC3112',
        },
        {
          _id: '4',
          name: 'LC3112',
        },
      ],
    },
  ],
};

export default data;
