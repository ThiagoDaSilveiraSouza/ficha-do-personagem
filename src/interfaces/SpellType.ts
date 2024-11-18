export type SpellType = {
  id: string
  name: string
  school: string
  castTime: string,
  range: string,
  components: string,
  duration: string,
  concentration: boolean,
  material: string,
  description: string,
  classesList: { id: string, name: string }[]
}