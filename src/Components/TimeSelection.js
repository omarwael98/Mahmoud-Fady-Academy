import '../Style/TimeSelection.css';
import Calendar from 'react-calendar';
import {useState,useEffect} from 'react';
import SelectTimePopUp from './SelectTimePopUp';

function TimeSelection(props){
    const [modalShow, setModalShow] = useState(false);
    const [date,setDate] = useState(new Date());
    const [time,setTime] = useState('');

    useEffect(()=>props.onselection({Date:date.toDateString(),Time:time}));

    const selectTime = (SelectedTime) =>{
        setTime(SelectedTime);
        setModalShow(false);
    }

    const selectDate = (selectedDate) =>{
        setDate(selectedDate);
        setTime('');
        setModalShow(true);
    }
    return(
        <div className='d-flex justify-content-center align-items-center flex-column font w-100'>
            <div className='align-self-start bold my-3 ms-4'>Choose Your Preferred Date</div>
            <div className='d-flex justify-content-center align-items-center flex-wrap w-100'>
                <Calendar onChange={selectDate} value={date}></Calendar>
                <SelectTimePopUp show={modalShow} 
                                onHide={()=> setModalShow(false)} 
                                onaddpressed={selectTime} 
                                preferreddate={date.toDateString()}>
                </SelectTimePopUp>
            </div>
        </div>
    );
}


export default TimeSelection;