import React from 'react';
import PictureBack from './PictureBack';
import PictureShowGroup from './main/PictureShowGroup';
import '../css/PictureBookCore.css';
import ScheduleDataVo from '../vo/ScheduleDataVo';
import ScheduleModel from './model/ScheduleModel';

export default class PictureBookCore extends React.Component {
    /**@type {ScheduleModel} */
    _scheduleModel = null;

    constructor(props) {
        super(props);

        this._scheduleModel = new ScheduleModel();
        this.state = {data:this._scheduleModel};
    }

    componentWillMount() {
        this.getJson();
    }

    render() {
        return (
            <div className='picture-book-core'>
                <PictureBack />
                <PictureShowGroup data={this.state.data} />
            </div>
        );
    }

    getJson() {
        let self = this;

        let p0 = fetch('./data/data.json', {
            method: "GET",
            //body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
            });
        p0.then((response)=>{
            //response.status     //=> number 100–599
            //response.statusText //=> String
            //response.headers    //=> Headers
            //response.url        //=> String
            let p1 = response.json();
            p1.then((json)=>{
                if(json.code === 0) {
                    let vo = new ScheduleDataVo(json.data.schedule_data);
                    self._scheduleModel.initialize(vo);
                    self.setState({data:self._scheduleModel});
                }
            },(error)=>{
                console.error(error.message); //=> String
            });
          }, (error)=> {
              console.error(error.message); //=> String
          });
    }
    
}