import MeetupList from "../components/meetups/MeetupList";
import {useState} from "react";

/**
 *   发送请求获取数据
 *  1. 使用fetch发送请求，URL地址： http://10.151.110.52:8080/getMeets
 * @returns {JSX.Element}
 * @constructor
 */
function AllMeetupsPage() {

    //是否加载到数据的状态
    const [isLoading,setIsLoading] = useState(true);
    //正在获取数据的状态
    const [loadedMeetups,setLoadedMeetups] = useState([]);

    //1.使用fetch，配置跨域处理

    fetch(
        'http://localhost:8080/getMeets',
        {
            header:{
                'Access-Control-Allow-Origin':'*'
            }
        }

    ).then(response=>{
        //返回一个promise对象,它解析实际的响应对象
        return  response.json();
    }).then(data=>{
        //在这里处理数据，后续可以添加对错误处理，这里只是简单发送请求，响应数据
        setIsLoading(false);//拿到数据了，就不需要叠加层遮罩或加载器了
        setLoadedMeetups(data)
    });




    //在组件返回之前，判定是否已加载数据，如果正在加载，返回这段JSX组件代码
    if (isLoading){
        return <section>
            <p>Loading ...</p>
        </section>
    }

    return (
        <section>
            <h1>All Meetups Page</h1>
           <MeetupList meetups={loadedMeetups}/>
        </section>
    )
}

export default AllMeetupsPage;