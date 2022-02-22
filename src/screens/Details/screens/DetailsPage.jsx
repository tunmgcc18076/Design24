import React,{useEffect, useState} from "react";
import education from "../../../resources/education.json"
export default function DetailsPage(props){
    const[course, setCourse] = useState();
    const[details, setDetails] = useState([]);

    useEffect(() =>{
        if(props.match.params.slug){
            education?.course?.map((e,index) =>{
                if(e.slug === props.match.params.slug){
                    setCourse(e)
                    setDetails(e.details)
                }
            })
        }
    },[props.match.params.slug])

    console.log(course)

    // const listsDetails = course?.details.map((e, index) =>{
    //     return<li>
    //         {e}
    //     </li>
    // })
    return(
        <div className="details">
            <h2 className="detail-title">{course?.name}</h2>
            <img src={course?.image} className="detail-image" />
            <div className="detail-desc">
                <div className="detail-desc-heading">Mô tả khóa học</div>
                <div className="detail-Nk" >
                    <p>
                        Ngày khai giảng: 
                        </p>{course?.startDate}
                </div>
                <div className="detail-tr"><span>Trình độ: </span>{course?.level}</div>
                <div className="detail-tr"><span>Lịch học: </span>{course?.schedule}</div>
                <div className="detail-tr"><span>Thời gian:</span> {course?.time}</div>
                <div className="detail-tr"><span>Học phí</span> <label>{course?.price}đ</label> </div>
                <button className="detail-btn">
                    Đặt chỗ ngay
                </button>
         </div>
            <div className="detail-info">
                <h2 className="detail-desc-heading">Giáo trình</h2>
                {
                    details.map((item,index) => {
                        return(
                            <div key={index} className="detail-info-item">
                                 Buổi {index+1} - {item}
                             </div>
                        )
                       
                    }
                        
                    )
                }
               
            </div>
        </div>
    )
}

