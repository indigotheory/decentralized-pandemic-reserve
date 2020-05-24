import React, { useState } from 'react'
import './FilterBar.css'
import { DropDown } from '@aragon/ui'

export default function FilterBar() {
    const [selected, setSelected] = useState(0)
    return(
        <div className="filterBar">
            {/* Status */}
            <DropDown
            items={['Status', 'Black Wildflower', 'Ancient Paper']}
            selected={selected}
            onChange={setSelected}
            />

            {/* Outcome */}
            <DropDown
            items={['Outcome', 'Black Wildflower', 'Ancient Paper']}
            selected={selected}
            onChange={setSelected}
            />

            {/* Type */}
            <DropDown
            items={['Finished Product', 'Black Wildflower', 'Ancient Paper']}
            selected={selected}
            onChange={setSelected}
            />

            {/* Date */}
            <DropDown
            items={['Start | End Date', 'Black Wildflower', 'Ancient Paper']}
            selected={selected}
            onChange={setSelected}
            />
        </div>

    )
}
