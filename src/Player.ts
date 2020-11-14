export class PlayerFaction {
  public name: string = "";
  public color: string = "";
  public emblemUrl: string = "";
  public shortName: string = "";

  public static getByName(name: string): PlayerFaction {
    switch (name?.toLowerCase()) {
      case "polania":
        return PlayerFaction.Polania;
      case "saxony":
        return PlayerFaction.Saxony;
      case "crimea":
        return PlayerFaction.Crimea;
      case "nord":
        return PlayerFaction.Nord;
      case "rusvet":
        return PlayerFaction.Rusvet;
      case "albion":
        return PlayerFaction.Albion;
      case "togawa":
        return PlayerFaction.Togawa;
      default:
        return PlayerFaction.Polania;
    }
  }

  public static Polania: PlayerFaction = {
    name: "Republic of Polania",
    color: "white",
    emblemUrl: "/icons/factions/polania.png",
    shortName: "polania",
  };
  public static Saxony: PlayerFaction = {
    name: "Saxony Empire",
    color: "black",
    emblemUrl: "/icons/factions/saxony.png",
    shortName: "saxony",
  };
  public static Crimea: PlayerFaction = {
    name: "Crimean Khanate",
    color: "yellow",
    emblemUrl: "/icons/factions/crimea.png",
    shortName: "crimea",
  };
  public static Nord: PlayerFaction = {
    name: "Nordic Kingdoms",
    color: "blue",
    emblemUrl: "/icons/factions/nord.png",
    shortName: "nord",
  };
  public static Rusvet: PlayerFaction = {
    name: "Rusviet Union",
    color: "red",
    emblemUrl: "/icons/factions/rusvet.png",
    shortName: "rusvet",
  };
  public static Albion: PlayerFaction = {
    name: "Clan Albion",
    color: "green",
    emblemUrl: "/icons/factions/albion.png",
    shortName: "albion",
  };
  public static Togawa: PlayerFaction = {
    name: "Togawa Shogunate",
    color: "purple",
    emblemUrl: "/icons/factions/togawa.png",
    shortName: "togawa",
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

  public constructor(other: any) {
    if (other) {
      this.popularity = other.popularity ?? 0;
      this.money = other.money ?? 0;
      this.stars = other.stars ?? 0;
      this.hex = other.hex ?? 0;
      this.resources = other.resources ?? 0;
      this.bonus = other.bonus ?? 0;
      this.name = other.name ?? "";
      this.faction = other.faction ?? PlayerFaction.Polania;
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
