import MeetupList from "../components/meetups/MeetupList";


/**
 * TODO 发送请求获取数据
 *  1. 使用fetch发送请求，URL地址：http://10.151.110.52:8080/getMeets
 * @returns {JSX.Element}
 * @constructor
 */
function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups Page</h1>
           <MeetupList meetups={people}/>
        </section>
    )
}

export default AllMeetupsPage;