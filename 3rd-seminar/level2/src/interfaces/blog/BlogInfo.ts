import { CategoryInfo } from '../category/CategoryInfo';

export interface BlogInfo {
  title: string;
  content: string;
  author: string;
  category: CategoryInfo;
  date: Date;
}
