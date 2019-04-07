import React,{Fragment} from "react"
import {Link} from "react-dom"

export default({ match:{url}, name, born, deceased, description, image, texts}) =>
<Fragment>
    <img src={image} alt={name} style={{maxWidth:250, maxHeight:300, minHeight:300, minWidth:250}}/>
    
    <h1>{name}</h1>
    <h3>
        {born} - {deceased}
    </h3>
    <p>{description}</p>
    <ul>
        {texts.map(({id, title}) =>
            <li>
                <Link to={`${url}/texts/${id}`}> {title}</Link>
            </li>)}
    </ul>
</Fragment>