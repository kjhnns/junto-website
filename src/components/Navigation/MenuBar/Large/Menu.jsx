import React from 'react'
import { Link } from '@components/Link'
import { Button } from '@components/Button'
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
        display: ['flex', 'flex'],
        color: 'gray.900',
        mr: [3, 3, 3, 4],
      }}
    >
      <Button as={Link} to="https://app.junto-habits.com">
        <Flex
          alignItems="center"
          justifyContent="center"
          // sx={{ color: 'gray.900' }}
        >
          Track Now
        </Flex>
      </Button>
    </Box>

    <Box
      sx={{
        display: ['none', 'flex'],
        color: 'gray.900',
        mr: [0, 3, 3, 4],
      }}
    >
      <Link to="/#about">
        <Flex
          alignItems="center"
          justifyContent="center"
          sx={{ color: 'gray.900' }}
        >
          About
        </Flex>
      </Link>
    </Box>
  </Flex>
)

export { Menu }
