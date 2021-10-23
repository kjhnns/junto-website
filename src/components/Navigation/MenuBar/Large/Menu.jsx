import React from 'react'
import { Link } from '@components/Link'
import { Flex, Box } from '@components/Grid'

const Wrapper = {
  display: 'flex',
  flex: '0 0 auto',
  padding: [0, 0, 0, '0 22px'],
  alignItems: 'center',
  justifyContent: 'flex-end',
  minHeight: '100%',
}

const Menu = () => (
  <Flex sx={Wrapper}>
    <Box
      sx={{
        display: ['none', 'flex'],
        color: 'white',
        mr: [0, 2, 3, 4],
      }}
    >
      <Link to="https://app.junto-habits.com">
        <Flex
          alignItems="center"
          justifyContent="center"
          sx={{ color: 'white' }}
        >
          App
        </Flex>
      </Link>
    </Box>

    <Box
      sx={{
        display: ['none', 'flex'],
        color: 'white',
        mr: [0, 2, 3, 4],
      }}
    >
      <Link to="/">
        <Flex
          alignItems="center"
          justifyContent="center"
          sx={{ color: 'white' }}
        >
          About
        </Flex>
      </Link>
    </Box>
  </Flex>
)

export { Menu }
