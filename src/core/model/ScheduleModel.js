// eslint-disable-next-line
import ScheduleDataVo from "../../vo/ScheduleDataVo";


export default class ScheduleModel {
    
    index = 0;
    /**@type {ScheduleDataVo}*/
    scheduleDataVo = null;

    initialize(vo){
        this.index = 0;
        this.scheduleDataVo = vo;
    }

    getPic(index) {
        if(!this.scheduleDataVo) return "";
        
        return this.scheduleDataVo.pic_book_pages[this.index][`main_pic_url${index}`];
    }

    getPics() {
        if(!this.scheduleDataVo) return null;

        let pic0url = this.scheduleDataVo.pic_book_pages[this.index].main_pic_url0;
        let pic1url = this.scheduleDataVo.pic_book_pages[this.index].main_pic_url1;
        let pic2url = this.scheduleDataVo.pic_book_pages[this.index].main_pic_url2;
        return [pic0url,pic1url,pic2url];
    }

    getSound() {
        if(!this.scheduleDataVo) return "";
        
        return this.scheduleDataVo.pic_book_pages[this.index].en_audio_url;
    }

    getWord() {
        if(!this.scheduleDataVo) return "";

        return this.scheduleDataVo.pic_book_pages[this.index].word;
    }
    
}