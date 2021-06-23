export interface NewsMsg {
    reason: string;
    result: NewsResult;
}

export interface NewsResult {
    stat: string;
    data: News;
}

export interface News {
    uniquekey: string;
    title: string;
    date: string;
    category: string;
    author_name: string;
    url: string;
    thumbnail_pic_s: string;
    thumbnail_pic_s02: string;
    thumbnail_pic_s03: string;
}