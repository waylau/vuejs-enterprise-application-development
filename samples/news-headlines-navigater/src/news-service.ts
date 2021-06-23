import axios from 'axios';
import { NewsMsg } from './news'; // 导入新闻列表的包装类型


export class NewsService {

    // 新闻列表API地址
    newsApiUrl = 'http://v.juhe.cn/toutiao/index?type='
    alias = 'top';  // 默认值top，获取全部的新闻数据
    key = '&key=d95eb2c02b12e841bafb5a49d20924be';


    // 指定参数类型NewsMsg
    getNewsData():any {
        // 创建请求
        axios.get(this.newsApiUrl + this.alias + this.key)
            .then(function (response) {
                console.log(response.data.result.data);

                return  response.data.result.data; // 强制转为NewsMsg类型
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}