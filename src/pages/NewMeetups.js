import NewMeetupForm from "../components/meetups/NewMeetupForm";
// import {useHistory} from "react-router-dom"; //V6版本已被废弃，使用useNavigate
import {useNavigate } from "react-router-dom";


/**
 * 接收子组件NewMeetupForm传递过来的数据
 * @returns {JSX.Element}
 * @constructor
 */
function NewMeetupsPage(){

    //V6版本，使用useNavigate代替useHistory，内置的钩子函数
    const navigate = useNavigate ();


    function addMeetupHandler(meetupData){

        console.log(meetupData)
        //  发送HTTP请求，或使用axios库发送请求，后续
        fetch(
            'http://localhost:8080/addMeet',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response=>{
            //如果状态码是200，表示请求成功，才跳转
            if (response.status === 200){
                 // console.log(response)
                //跳转到首页
                navigate('/')
            }

        });

    }


    return (
        // <div>NewMeetups Page</div>
        <section>
            <h1>New Meetups Page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupsPage;