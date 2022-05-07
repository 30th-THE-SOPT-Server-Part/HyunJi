import { CategoryInfo } from '../category/CategoryInfo';

export interface BlogUpdateDto {
  title?: string;
  content?: string;
  author: string;
  category?: CategoryInfo;
}
