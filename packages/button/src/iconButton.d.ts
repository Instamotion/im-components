import React from 'react';
import { AvailableIcons } from '@insta-ui/icon';
export declare type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: AvailableIcons;
};
export declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
