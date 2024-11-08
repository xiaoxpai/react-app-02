import Card from "../layout/ui/Card";
import styles from "./NewMeetupForm.module.css";
import {useRef} from "react";



/**
 * 这也是一个子组件，父组件是NewMeetupPage，从父组件传递数据给子组件NewMeetupForm
 * 这个组件的作用是创建一个新的meetup（聚会需要的字段属性）
 * @constructor
 */
function NewMeetupForm(props){
    const nameInputRef = useRef();
    const professionInputRef = useRef();
    const addressInputRef = useRef();
    function submitHandler(event){
        event.preventDefault();//阻止浏览器/表单默认提交


        const enteredName = nameInputRef.current.value;
        const enteredProfession = professionInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;

        const meetupData = {
            name: enteredName,
            profession: enteredProfession,
            address: enteredAddress

        }
        console.log(meetupData)
        //这里需要将数据传递给父组件NewMeetupPage，也就是子组件传递数据给父组件
        props.onAddMeetup(meetupData);

    }

    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor="name">Meetup Name</label>
                    <input type="text" required id="name" ref={nameInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor="profession">Meetup Profession</label>
                    <input type="text" required id="profession" ref={professionInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <textarea  id="address" cols="30" rows="5" required ref={addressInputRef}></textarea>
                </div>
                <div className={styles.action}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm