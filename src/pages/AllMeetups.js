import MeetupList from "../components/meetups/MeetupList";


const people = [{
    id: 0,
    name: '凯瑟琳·约翰逊',
    profession: '数学家',
    address: '美国',
}, {
    id: 1,
    name: '马里奥·莫利纳',
    profession: '化学家',
    address: '墨西哥',
}, {
    id: 2,
    name: '穆罕默德·阿卜杜勒·萨拉姆',
    profession: '物理学家',
    address: '巴基斯坦',
}, {
    id: 3,
    name: '珀西·莱温·朱利亚',
    profession: '化学家',
    address: '美国',
}, {
    id: 4,
    name: '苏布拉马尼扬·钱德拉塞卡',
    profession: '天体物理学家',
    address: '印度',
}];

function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups Page</h1>
           <MeetupList meetups={people}/>
        </section>
    )
}
// <ul>
//                 {people.map((meetup) => {
//                     return (
//                         <li key={meetup.id}>
//                             {meetup.name} - {meetup.profession} - {meetup.address}
//                         </li>
//                     )
//                 })}
//             </ul>
export default AllMeetupsPage;