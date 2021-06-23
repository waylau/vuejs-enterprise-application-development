
import { Category } from './category'; // 导入新闻分类的包装类型

export class CategoryService {

    // 新闻分类列表
    categories: Category[] = [
        { alias: 'top', name: '头条' },
        { alias: 'guonei', name: '国内' },
        { alias: 'guoji', name: '国际' },
        { alias: 'yule', name: '娱乐' },
        { alias: 'tiyu', name: '体育' },
        { alias: 'junshi', name: '军事' },
        { alias: 'keji', name: '科技' },
        { alias: 'caijing', name: '财经' },
        { alias: 'shishang', name: '时尚' },
        { alias: 'youxi', name: '游戏' },
        { alias: 'qiche', name: '汽车' },
        { alias: 'jiankang', name: '健康' }
    ];

    // 获取新闻分类列表
    getCategoryData() {
        return this.categories;
    }

}