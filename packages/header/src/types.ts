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

export type NewHeader = {
  className?: string;
  type: HeaderTypes.new;
};

export type HeaderProps = DefaultHeaderProps | SZHeaderProps | NewHeader;
