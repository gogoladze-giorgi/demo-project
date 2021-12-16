import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import classes from './allUser.module.css';
import InfiniteScrolling from "./infiniteScrolling";

const PAGE_NUMBER = 1;
const AllUser =()=> {

    const [state,setState] =  useState([]);
   const [page,setPage] = useState(PAGE_NUMBER)

    useEffect(()=> {

        fetch(` http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/21`)
            .then(res => res.json())
            .then(json=> setState((state)=>[...state, ...json.list]))
    },[setPage,page])

    InfiniteScrolling({PAGE_NUMBER,setPage,page})

    return(<div  className={classes.container}>
        {  state.length > 0 && state.map((users,i)=> {
            return  <Link to={`/user/${users.id}`} key={i} className={classes.image}>
                    <img src={`${users.imageUrl}?v=${users.id}`} alt="animals"/>
                    <div className="image_info">
                        <div>{users.prefix} {users.name} {users.lastName}</div>
                        <div>{users.title}</div>
                    </div>
                </Link>
            }
        )}
    </div>)
}
export default AllUser;