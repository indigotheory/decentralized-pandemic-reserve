// OwnershipDistributionBox.js
import React from 'react'
import { Box, Distribution } from '@aragon/ui'

// OwnershipDistributionBox combines Box
// and Distribution into a single component.
function OwnershipDistributionBox({ supply, tokenHolders }) {
  const distributionItems = tokenHolders.map(([account, balance]) => ({
    item: account,
    percentage: (balance / supply) * 100,
  }))

  return (
    <Box heading="Ownership Distribution">
      <Distribution heading="Token holder stakes" items={distributionItems} />
    </Box>
  )
}

export default OwnershipDistributionBox