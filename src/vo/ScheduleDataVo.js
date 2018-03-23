import PicBookPagesVo from "./PicBookPagesVo";


export default class ScheduleDataVo{
    book_id = 0;
    can_experience = '';
    cover_url = null;
    /**@type {[PicBookPagesVo]} */
    pic_book_pages = null;

    constructor(data) {
        if(!data) return;
        this.book_id = data.book_id;
        this.can_experience = data.can_experience;
        this.cover_url = data.cover_url;

        this.pic_book_pages = [];
        let pic_book_pages_arr = data.english_words;
        for(let i = 0;i<pic_book_pages_arr.length;++i) {
            let obj = pic_book_pages_arr[i];
            let vo = new PicBookPagesVo(obj);
            this.pic_book_pages.push(vo);
        }
    }
}