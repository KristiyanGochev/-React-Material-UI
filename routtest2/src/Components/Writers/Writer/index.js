import React,{Fragment} from "react"

export default({match, id, name, born, deceased, description, image}) =>
<Fragment>
    <img src={image} alt={name} style={{maxWidth:250, maxHeight:300, minHeight:300, minWidth:250}}/>
    
    <h1>{name}</h1>
    <h3>
        {born} &mdash {deceased}
    </h3>
    <p>{description}</p>
</Fragment>