
export default class PicBookPagesVo {
    id = 0;
    book_schedule_id = 0;
    main_pic_url0 = null;
    main_pic_url1 = null;
    main_pic_url2 = null;
    word = null;
    en_audio_url = null;
    cn_mean = null;
    number_accumulation = null;

    constructor(data) {
        this.id = data.id;
        this.book_schedule_id = data.book_schedule_id;
        this.word = data.word;
        this.cn_mean = data.cn_mean;
        this.en_audio_url = data.en_audio_url;
        this.main_pic_url0 = data.main_pic_url0;
        this.main_pic_url1 = data.main_pic_url1;
        this.main_pic_url2 = data.main_pic_url2;
        this.is_belong_bookshelf = data.is_belong_bookshelf;
        this.number_accumulation = data.number_accumulation;
    }
}