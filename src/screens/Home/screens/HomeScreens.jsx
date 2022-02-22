import React from 'react'
import education from "../../../resources/education.json"
import Navigation from '../../../components/Navigation';
import '../../../App.css';
import { useHistory } from 'react-router-dom';
export default function HomeScreens(){
    const history = useHistory();

    const hanldeClick = (slug) =>{
        history.push(`/details/${slug}`)
    }

    const lists = education?.course?.map((e, index) => {
        return (
            <div className='col-md-6 col-sm-12 col-lg-4 mt-3'>
                <div className='Card'>
                    <img className='course-image' src={e.image} alt="" width="100%" />
                    <div className='Bun'>
                    <p>
                        <h3 >
                        {e.name}
                        </h3>
                    </p>
                    
                    <p>
                      Ngày khai giảng:{e.startDate}
                    </p>
                    <p>
                        Trình độ:{e.level}
                    </p>
                    <p>
                        Lịch học:{e.schedule}
                    </p>
                    <p>
                        Giờ học:{e.time}
                    </p>
                    {/* <p>
                        {e.slug}
                    </p> */}
                    <p >
                        <a onClick={() =>{hanldeClick(e.slug)}}>
                      <button className='But'> Thông tin chi tiết
                      </button>
                      </a>
                      </p>
                      </div>
                  
                    <p>

                    </p>
                   
                </div>
            </div>
        )
    })

    return (
    <div>
        
        
        <div className="row">
            {lists}
        </div>
    </div>
    
    
    )
}