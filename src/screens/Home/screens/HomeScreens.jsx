import React, { useEffect, useState } from 'react'
import education from "../../../resources/education.json"
import Navigation from '../../../components/Navigation';
import '../../../App.css';
import {Link, useHistory } from 'react-router-dom';
export default function HomeScreens(){
    <Navigation/>
    const history = useHistory();

    const hanldeClick = (slug) =>{
        history.push(`/details/${slug}`)
    }
    const[like, setLike] = useState([])
    const getStore = () =>{
        const likeStored = localStorage.getItem('like-storage')
        likeStored === null ? setLike([]) : setLike(JSON.parse(likeStored))
    }
    const setStore = (data) =>{
        localStorage.setItem("like-Storage",JSON.stringify(data))
        setLike(data)
    }
    useEffect(() =>{
        if(localStorage.getItem('like-storage')){
            getStore()
        }
    },[localStorage.getItem('like-storage')])
    console.log(like)
    const hanldeLike = (slug) =>{
        const temp = [...like]
        const position = temp.indexOf(slug)
        // if(temp.lastIndexOf === -1){
        //     setLike((like) => [...like, slug])
        // }
        if(position === -1){
            temp.push(slug)
        }else{
            temp.splice(position,1)
        }
        setStore(temp)
    }

    const lists = education?.course?.map((e, index) => {
        return (
            <div key={index} className='col-md-6 col-sm-12 col-lg-4 mt-3'>
                <div className='Card'>
                    <Link to={`details/${e.slug}`}>
                    <img className='course-image' src={e.image} alt="" width="100%" /></Link>
                    {
                         like.length === 0 ?
                        <div className='like-wapper'
                        onClick={() => hanldeLike(e.slug)}>
                            <i class="fa-solid fa-heart"></i>
                            {/* <i className='bx-bxs-heart'></i> */}
                            <span >Thêm vào mục yêu thích</span>
                            </div> :
                            like.includes(e.slug) ?
                            <div className='like-wapper active'
                            onClick={() => hanldeLike(e.slug)}>
                            <i class="fa-solid fa-heart" style={{color:"blue"}}></i>
                            <span >Hủy yêu thích</span>
                            </div> :
                            <div className='like-wapper'
                            onClick={() =>hanldeLike(e.slug)}>
                                <i class="fa-solid fa-heart"></i>
                                <span>Thêm vào mục yêu thích</span>
                                </div>
                    }
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
                      <p>
                      
                      </p>
                      </div>
                </div>
            </div>
            
        )
    })

    return (
    <div className='container course-container'> 
        
        
        <div className="row">
            {lists}
        </div>
    </div>
    
    
    )
}