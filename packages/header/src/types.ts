export interface MenuOptions {
  showFinancingLink?: boolean;
  showDeliveryLink?: boolean;
  showQualityLink?: boolean;
}

export enum HeaderTypes {
  default = 'default',
  sz = 'sz',
  old = 'old',
  new = 'new'
}

export type DefaultHeaderProps = {
  phoneNumber?: string;
  favoritesCount?: number;
  menuOptions?: MenuOptions;
  logoUrl?: string;
  type?: HeaderTypes.old;
};

export type SZHeaderProps = {
  className?: string;
  type: HeaderTypes.sz;
};

export type NewHeaderProps = {
  className?: string;
  type: HeaderTypes.new;
  utmQuery?: string;
  light?: boolean;
  isScrolled?: boolean;
  favoritesCount?: number;
  phoneNumber?: string;
};

export type HeaderProps = DefaultHeaderProps | SZHeaderProps | NewHeaderProps;
