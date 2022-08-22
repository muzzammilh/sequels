import { useSelector,useDispatch } from 'react-redux'
import DropDown from '../Components/Buttons/DropDown';
import OutlinedButton from '../Components/Buttons/OulinedButton';
import PlainButton from '../Components/Buttons/PlainButton';
import SearchButton from '../Components/Buttons/SearchButton';
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
        <DropDown  label={"Decrement"} onClick={()=>{
          dispatch({type: ActionType.DECREMENT});
        }}>
          <a href="#" className=" dropdown-item text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 " role="menuitem" tabIndex="-1" id="menu-item-0">hello</a>
        </DropDown>
        
        </div>
        <SearchButton/>
    </div>
    );
  }
  
  export default Home;
  