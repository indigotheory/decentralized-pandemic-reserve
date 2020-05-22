import React, { useState } from 'react'
import { Header, Button, IconPlus, Tag, SidePanel } from '@aragon/ui';

function HeaderAragon(){
    const [sidePanelOpened, setSidePanelOpened] = useState(false)
    return(
        <div>
        <Header
            primary={
                <>
                Community Voting
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
export default HeaderAragon