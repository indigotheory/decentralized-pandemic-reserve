import React, { useState } from 'react'
import { Header, Button, IconPlus, Tag, SidePanel } from '@aragon/ui';

const h1_a = {
    fontSize: '2.4em',
    fontWeight: 600,
    fontFamily: 'Source Sans Pro'
  };

function HeaderApp(){
    const [sidePanelOpened, setSidePanelOpened] = useState(false)
    return(
        <div>
        <Header
            primary={
                <>
                <h1 style={h1_a}>Community Voting</h1>
                {/* <Tag mode="identifier">PTO</Tag> */}
                </>
            }
            secondary={
                <Button mode="strong" label="New Vote" icon={<IconPlus />} onClick={() => setSidePanelOpened(true)} />
            }
        />
        {/* Hidden on load */}
        <SidePanel
            title="Add tokens"
            opened={sidePanelOpened}
            onClose={() => setSidePanelOpened(false)}
        >
        {/* SidePanel content goes here */}
        </SidePanel>
        </div>
    )
    
}
export default HeaderApp