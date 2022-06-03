type Player = {
  name: string;
  deck: any[];
  score: number;
};

type CardProps = {
  suit: string;
  value: number;
};

export type { Player, CardProps };
