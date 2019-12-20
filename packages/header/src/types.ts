export interface MenuOptions {
  showFinancingLink?: boolean;
  showDeliveryLink?: boolean;
  showQualityLink?: boolean;
}

export interface HeaderProps {
  phoneNumber: string;
  favoritesCount: number;
  menuOptions?: MenuOptions;
}
