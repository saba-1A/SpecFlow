
export interface SpecResult {
  title: string;
  summary: string;
  userStories: string[];
  acceptanceCriteria: string[];
  technicalNotes: string;
}

export enum AppTheme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface NavItem {
  label: string;
  path: string;
}
