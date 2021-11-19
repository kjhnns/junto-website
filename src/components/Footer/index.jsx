import React from 'react'
// import PropTypes from 'prop-types'

import { Link, OutboundLink } from '@components/Link'
import { Flex, Box } from '@components/Grid'
import { Text } from '@components/Typography'
import { Container } from '@components/Container'

const Footer = () => (
  <Flex
    sx={{
      width: '100%',
      bg: 'gray.900',
      color: 'gray.100',
      alignItems: 'center',
      justifyContent: 'center',
      py: [3, 4],
      mt: 3,
    }}
  >
    <Container>
      <Flex
        flexDirection={['column', 'row', null, null]}
        justifyContent="center"
      >
        <Text
          sx={{
            fontSize: 1,
            color: 'gray.500',
            textAlign: 'center',
            textDecoration: 'none',
          }}
          as={Link}
          mr={[0, 3, null, null]}
          mb={[3, 0, null, null]}
          to="/"
        >
          About
        </Text>
        <Text
          sx={{
            fontSize: 1,
            color: 'gray.500',
            textAlign: 'center',
            textDecoration: 'none',
          }}
          as={OutboundLink}
          mr={[0, 3, null, null]}
          mb={[3, 0, null, null]}
          href="mailto:johannesklumpe@gmail.com"
        >
          Contact
        </Text>
        <Text
          sx={{
            fontSize: 1,
            color: 'gray.500',
            textAlign: 'center',
            textDecoration: 'none',
          }}
          as={Link}
          mr={[0, 3, null, null]}
          mb={[3, 0, null, null]}
          to="/terms"
        >
          Terms
        </Text>
      </Flex>
    </Container>
  </Flex>
)

// Footer.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
// }

export default Footer
