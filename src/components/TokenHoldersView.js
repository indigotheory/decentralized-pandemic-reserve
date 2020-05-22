// TokenHoldersView.js
import React from 'react'
import {
  DataView,
  IdentityBadge,
  ContextMenu,
  ContextMenuItem,
} from '@aragon/ui'

// The token holders represented as a DataView.
function TokenHoldersView({ tokenHolders }) {
  /*

  This is how tokenHolders could look like:

  tokenHolders = [
    ['0xcafe…', 3],
    ['0xbeef…', 2],
    …
  ]

  */
  return (
    <DataView
      display="table"
      fields={['Holder', 'Balance']}
      items={tokenHolders}
      renderEntry={entryParts}
      renderEntryActions={entryActions}
    />
  )
}

// Return the parts (table cells) corresponding to an entry.
function entryParts([account, balance]) {
  return [<IdentityBadge entity={account} />, balance]
}

// Return the contextual menu for an entry (no interaction behavior defined).
function entryActions([account, balance]) {
  return (
    <ContextMenu>
      <ContextMenuItem>Add tokens</ContextMenuItem>
      <ContextMenuItem>Remove tokens</ContextMenuItem>
    </ContextMenu>
  )
}

export default TokenHoldersView