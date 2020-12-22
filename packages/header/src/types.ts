export interface MenuOptions {
  showFinancingLink?: boolean;
  showDeliveryLink?: boolean;
  showQualityLink?: boolean;
}

export enum HeaderTypes {
  default = 'default',
  sz = 'sz'
}

export type DefaultHeaderProps = {
  phoneNumber?: string;
  favoritesCount?: number;
  menuOptions?: MenuOptions;
  logoUrl?: string;
  type?: HeaderTypes.default;
};

export type SZHeaderProps = {
  className?: string;
  type: HeaderTypes.sz;
};

export type HeaderProps = DefaultHeaderProps | SZHeaderProps;
