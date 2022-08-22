import { useSelector,useDispatch } from 'react-redux'
import DropDown from '../Components/Buttons/DropDown';
import OutlinedButton from '../Components/Buttons/OulinedButton';
import PlainButton from '../Components/Buttons/PlainButton';
import { ActionType } from '../Redux/Contants/action-type';


function Home() {
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();
    return (
      <div className='w-screen h-80 flex justify-center items-center flex-col gap-8'>
        <h1>{count}</h1>
        <div className='flex gap-2'>
        <PlainButton label={"Increment"}  onClick={()=>{
          dispatch({type: ActionType.INCREMENT});
        }}/>
        <OutlinedButton label={"Decrement"} onClick={()=>{
          dispatch({type: ActionType.DECREMENT});
        }}/>
        </div>
    </div>
    );
  }
  
  export default Home;
  