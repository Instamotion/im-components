export interface MenuOptions {
  showFinancingLink?: boolean;
  showDeliveryLink?: boolean;
  showQualityLink?: boolean;
}

export enum HeaderTypes {
  sz = 'sz',
  new = 'new'
}

export type SZHeaderProps = {
  className?: string;
  type: HeaderTypes.sz;
};

export type DefaultHeaderProps = {
  className?: string;
  type: HeaderTypes.new;
  utmQuery?: string;
  light?: boolean;
  isScrolled?: boolean;
  favoritesCount?: number;
  phoneNumber?: string;
};

export type HeaderProps = SZHeaderProps | DefaultHeaderProps;
