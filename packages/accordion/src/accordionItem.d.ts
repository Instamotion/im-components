import React from 'react';
export declare const AccordionTitle: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const AccordionContent: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const AngleIcon: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const Expand: import("styled-components").StyledComponent<"div", any, {}, never>;
export interface AccordionItemProps {
    className?: string;
    title?: string;
    open?: boolean;
    renderExpando?: any;
    onHeadingClick?: any;
    'data-open'?: boolean;
}
export declare const ListItem: import("styled-components").StyledComponent<"div", any, AccordionItemProps, never>;
export declare const AccordionItem: React.FC<AccordionItemProps>;
