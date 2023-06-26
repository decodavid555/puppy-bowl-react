import React from "react";

const AllPuppies = (props) => {
    console,log(props)
    return(
        <div>
            <h1>Our Pups!</h1>
            <h2>Names:{props.puppy.name}</h2>
            <p>Breed:{props.puppy.breed}</p>
            <p>Status: {props.puppy.status}</p>
            <p>ID: {props.puppy.id}</p>
            <img src={props.puppy.imageUrl}/>
        </div>
    )
}
export default AllPuppies;