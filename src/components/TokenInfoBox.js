// TokenInfoBox.js
import React from 'react'
import { Box, TokenBadge, useTheme } from '@aragon/ui'

// TokenInfoBox is making use of the Box with some custom content.
function TokenInfoBox({ supply, transferable, token }) {
  return (
    <Box heading="Token info">
      <TokenInfoBoxRow primary="Total supply" secondary={supply} />
      <TokenInfoBoxRow
        primary="Transferable"
        secondary={transferable ? 'YES' : 'NO'}
      />
      <TokenInfoBoxRow
        primary="Token"
        secondary={
          <TokenBadge
            address={token.address}
            name={token.name}
            symbol={token.symbol}
          />
        }
      />
    </Box>
  )
}

// TokenInfoBoxRow is relying on useTheme() to get a specific text color.
function TokenInfoBoxRow({ primary, secondary }) {
  const theme = useTheme()
  return (
    <div
      css={`
        display: flex;
        justify-content: space-between;
      `}
    >
      <div
        css={`
          color: ${theme.surfaceContentSecondary};
        `}
      >
        {primary}
      </div>
      <div>{secondary}</div>
    </div>
  )
}

export default TokenInfoBox