interface SocialLinkItem {
  label: string;
  url: string;
  isActive:number;
}

export interface SocialLinksData {
  [key: string]: SocialLinkItem;
}
