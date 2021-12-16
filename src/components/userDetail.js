import React from "react";
import classes from './userDetail.module.css'
import Friends from "../components/friends";
import {useEffect,useState, Fragment} from "react";
import {useParams} from "react-router-dom";

const UserDetail =()=> {

    const params = useParams()
    const [state , setState]=useState([])
    const [company,setCompany]=useState([])
    const [loading, setLoading] =useState(false)
    const [address,setAddress]=useState([])

    useEffect(()=> {
        setLoading(true)
        fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${params.userId}`)
            .then(res=>res.json())
            .then(data=> {
                setState(data)
                setAddress(data.address)
                setCompany(data.company)
            })
        setLoading(false)
    },[params.userId])


    return <Fragment>
        {loading && <div className={classes.loading}>Loading...</div>}
        {!loading && <>
            <section className={classes.container}>
            <img src={`${state.imageUrl}?v=${state.id}`} alt="animals"/>
            <nav className={classes.list}>
            <ul>
                <li>info</li>
                <br/>
                <li>{state.prefix} {state.name} {state.lastName}</li>
                <li> {state.title}</li>
                <br/>
                <li>Email: {state.email}</li>
                <li>Ip address: {state.ip}</li>
                <li>Job Area: {state.jobArea}</li>
                <li>Jobs Type: {state.jobType}</li>
            </ul>
                <ul>
                    <li>address</li>
                    <br/>
                    <h4>{company.name} {company.suffix}</h4>
                   <li> city: {address.city}</li>
                   <li>Cauntry:{address.country}</li>
                   <li>state: {address.state}</li>
                   <li>street adress : {address.streetAdress}</li>
                   <li>zipCode: {address.zipCode}</li>
                </ul>
            </nav>
        </section>
            <section >
            <h1 className={classes.friends}>Friends:</h1>
                <Friends/>
            </section>
        </> }
    </Fragment>

}
export default UserDetail;