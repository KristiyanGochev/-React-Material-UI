import React from 'react'
import {Paper, Tab, Tabs} from '@material-ui/core'

export default ({muscles, category, onSelect, group }) => {
    const index = category ?
    muscles.findIndex(group => group === category) + 1
    : 0
const indexSelect = (e,index)=>{
    onSelect(index === 0 ? '': muscles[index-1])
}
return <Paper>
<Tabs
  value ={index}
  onChange= {indexSelect}
  indicatorColor="primary"
  textColor="primary"
  centered
>
<Tab label='All'/>
{muscles.map(muscle =>
<Tab
    key = {group}
    label={muscle} />
)}
</Tabs>
</Paper>

}
