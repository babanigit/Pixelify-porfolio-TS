interface SocialLinkItem {
  label: string;
  url: string;
}

export interface SocialLinksData {
  [key: string]: SocialLinkItem;
}
