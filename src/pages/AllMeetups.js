import MeetupList from "../components/meetups/MeetupList";
import {useState, useEffect} from "react";

/**
 *   发送请求获取数据
 *  1. 使用fetch发送请求，URL地址： http://10.151.110.52:8080/getMeets
 *  2. 解决无限循环请求问题，使用react内置钩子函数useEffect
 *      什么是useEffect？
 *          useEffect是一个React的钩子函数，它允许你在函数组件中执行副作用操作。
 *          副作用操作是指那些不直接与组件渲染相关的操作，如异步请求、手动修改DOM、订阅等。
 *          useEffect在每次渲染后都会执行，包括第一次渲染。
 *          运行的副作用===不直接影响的代码，如发送请求，订阅等
 *       使用useEffect可以可以限制当前请求始终运行一次，不会无限循环请求。
 *      所以
 *          它是如何工作的？ 定义此代码应该运行的条件
*       useEffect接收两个参数，第一个参数是一个函数，第二个参数是一个数组。
 * @returns {JSX.Element}
 * @constructor
 */
function AllMeetupsPage() {

    //是否加载到数据的状态
    const [isLoading, setIsLoading] = useState(true);
    //正在获取数据的状态
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    //1.使用fetch发送请求
    useEffect(() => {
        //每当副作用影响再次运行时，再次设置为true
        setIsLoading(true)
        fetch(
            'http://localhost:8080/getMeets',
            {
                header: {
                    'Access-Control-Allow-Origin': '*'
                }
            }
        ).then(response => {
            //返回一个promise对象,它解析实际的响应对象
            return response.json();
        }).then(data => {
            const meetups=[];
            for (const key in data){
                const meetup = {
                    id:key,
                    ...data[key]
                }
                meetups.push(meetup);
            }

            //在这里处理数据，后续可以添加对错误处理，这里只是简单发送请求，响应数据
            setIsLoading(false);//拿到数据了，就不需要叠加层遮罩或加载器了
            setLoadedMeetups(meetups)
            console.log(meetups)
        });
    }, []);



    //在组件返回之前，判定是否已加载数据，如果正在加载，返回这段JSX组件代码
    if (isLoading) {
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