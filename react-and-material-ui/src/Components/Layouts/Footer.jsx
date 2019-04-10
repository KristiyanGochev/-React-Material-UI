import React from 'react'
import {Paper, Tab, Tabs} from '@material-ui/core'

export default props =>
<Paper>
        <Tabs
          value ={0}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
        <Tab label='All'/>
        {props.muscles.map(muscle =>
        <Tab
            key = {muscle + 1}
            label={muscle} />
        )}
        </Tabs>
      </Paper>