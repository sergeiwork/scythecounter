export class PlayerFaction {
  public name: string = "";
  public color: string = "";
  public emblemUrl: string = "";

  public static Polania: PlayerFaction = {
    name: "Republic of Polania",
    color: "white",
    emblemUrl: "",
  };
  public static Saxony: PlayerFaction = {
    name: "Saxony Empire",
    color: "black",
    emblemUrl: "",
  };
  public static Crimea: PlayerFaction = {
    name: "Crimean Khanate",
    color: "yellow",
    emblemUrl: "",
  };
  public static Nord: PlayerFaction = {
    name: "Nordic Kingdoms",
    color: "blue",
    emblemUrl: "",
  };
  public static Rusvet: PlayerFaction = {
    name: "Rusviet Union",
    color: "red",
    emblemUrl: "",
  };
  public static Albion: PlayerFaction = {
    name: "Clan Albion",
    color: "green",
    emblemUrl: "",
  };
  public static Togawa: PlayerFaction = {
    name: "Togawa Shogunate",
    color: "purple",
    emblemUrl: "",
  };

  private constructor() {}
}

export class Player {
  public popularity: number = 0;
  public money: number = 0;
  public stars: number = 0;
  public hex: number = 0;
  public resources: number = 0;
  public bonus: number = 0;
  public total: number = 0;
  public name: string = "";
  public faction: PlayerFaction = PlayerFaction.Polania;

  public constructor(other: Player | null) {
    if (other) {
      this.popularity = other.popularity;
      this.money = other.money;
      this.stars = other.stars;
      this.hex = other.hex;
      this.resources = other.resources;
      this.bonus = other.bonus;
      this.name = other.name;
      this.faction = other.faction;
    }
  }

  public calculateTotal = (): number => {
    const starsModifier: number = Math.min(
      5,
      Math.floor(this.popularity / 6.5) + 3
    ); //0-6 = 3; 6-12 = 4; 13-18 = 5;
    const hexModifier: number = Math.min(
      4,
      Math.floor(this.popularity / 6.5) + 2
    ); //0-6 = 2; 6-12 = 3; 13-18 = 4;
    const resourcesModifier: number = Math.min(
      3,
      Math.floor(this.popularity / 6.5 + 1)
    ); //0-6 = 1; 6-12 = 2; 13-18 = 3;

    const total = Math.floor(
      this.money +
        this.stars * starsModifier +
        this.hex * hexModifier +
        Math.floor(this.resources / 2) * resourcesModifier +
        this.bonus
    );
    this.total = total;
    return total;
  };
}
