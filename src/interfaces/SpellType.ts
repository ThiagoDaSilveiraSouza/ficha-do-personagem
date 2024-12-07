export type nivelsProps =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

export type SpellType = {
  id: string;
  name: string;
  school: string;
  nivel: nivelsProps;
  castTime: string;
  range: string;
  components: string;
  duration: string;
  concentration: boolean;
  material: string;
  description: string[];
  classesList: { id: string; name: string }[];
};
