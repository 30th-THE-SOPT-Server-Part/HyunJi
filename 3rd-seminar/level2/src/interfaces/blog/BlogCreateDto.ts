import { CategoryInfo } from '../category/CategoryInfo';

export interface BlogCreateDto {
  title: string;
  content?: string;
  author: string;
  category?: CategoryInfo;
}
