import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import en from "./en.json";

export interface IStrings extends LocalizedStringsMethods {
  resetButton: string;
  summaryButton: string;
  polaniaFaction: string;
  saxonyFaction: string;
  crimeaFaction: string;
  rusvetFaction: string;
  nordFaction: string;
  albionFaction: string;
  togawaFaction: string;
  nameLabel: string;
  popularityLabel: string;
  moneyLabel: string;
  starsLabel: string;
  hexLabel: string;
  resourcesLabel: string;
  bonusLabel: string;
  totalLabel: string;
  nextPlayerButton: string;
  finishButton: string;
  faction: string;
  selectButton: string;
  goBackButton: string;
}

export const buildLocalizedStrings = (): IStrings => {
  return new LocalizedStrings({ en: en });
};
