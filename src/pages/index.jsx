import React from 'react'

import { Link, OutboundLink } from '@components/Link'
import { Button } from '@components/Button'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { MenuBar } from '@components/Navigation'
import { Flex, Box } from '@components/Grid'
import { Text } from '@components/Typography'
import { Container } from '@components/Container'
import Screenshot from '../images/screenshots/screenshot.png'
import Collage from '../images/screenshots/collage.png'

const IndexPage = () => (
  <Layout>
    <SEO />
    <Box width="100%">
      <MenuBar />

      <Flex flexDirection="column" alignItems="center">
        <Container>
          <Flex flexDirection="column" my={[2, 3]}>
            <Flex
              flexDirection={['column-reverse', 'row']}
              mx={[0, 4, 4, 0]}
              mb={3}
            >
              <Box width={['100%', '50%']} alignItems="center">
                <Text
                  as="h1"
                  sx={{
                    fontSize: [3, 3, 4, 5],
                    mx: [2, 0],
                    fontWeight: [400],
                    lineHeight: [2, 2, 2, 1.5],
                    textAlign: ['center', 'left'],
                  }}
                >
                  Junto helps you every day to become a better version of
                  yourself. Through small steps and motivating streaks you build
                  long-lasting good habits and break bad ones.
                </Text>
                <Box m="auto" width={['60%', '100%']} mt={3}>
                  <Button
                    sx={{
                      textAlign: 'center',
                      display: ['flex'],
                      justifyContent: 'center',
                      fontSize: [3, 3, 4, 4],
                    }}
                    as={Link}
                    to="https://app.junto-habits.com"
                  >
                    Track Now
                  </Button>
                </Box>
              </Box>
              <Flex
                sx={{
                  width: ['100%', '50%'],
                  justifyContent: ['center', 'flex-end'],
                }}
              >
                <Box maxWidth={['60%', '80%']}>
                  <img
                    width="100%"
                    src={Screenshot}
                    alt="junto - simple habit tracking"
                  />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Container>
        <Flex
          sx={{
            width: '100%',
            bg: 'gray.900',
            color: 'gray.100',
            alignItems: 'center',
            justifyContent: 'center',
            py: [3, 4],
            my: 3,
          }}
        >
          <Container>
            <Flex flexDirection={['column', 'row']} justifyContent="center">
              <Box p={2} width={['100%', '33%']} py={[3, 0]}>
                <Text as="h2" sx={{ m: 2, textAlign: ['center', 'left'] }}>
                  Streaks
                </Text>
                <Text
                  as="p"
                  sx={{
                    fontSize: [3],
                    lineHeight: 1.5,
                    m: 2,
                    textAlign: ['center', 'left'],
                  }}
                >
                  Junto uses streaks of consistently checked habits to build up
                  your motivation. Streak freezes protect your streak and make
                  them more forgivable.
                </Text>
              </Box>
              <Box p={2} width={['100%', '33%']} py={[3, 0]}>
                <Text as="h2" sx={{ m: 2, textAlign: ['center', 'left'] }}>
                  Reporting
                </Text>
                <Text
                  as="p"
                  sx={{
                    fontSize: [3],
                    lineHeight: 1.5,
                    m: 2,
                    textAlign: ['center', 'left'],
                  }}
                >
                  Tracking and visualizing your progress is important to keep
                  you motivated. Junto combines simplistic charts with helpful
                  insights.
                </Text>
              </Box>
              <Box p={2} width={['100%', '33%']} py={[3, 0]}>
                <Text as="h2" sx={{ m: 2, textAlign: ['center', 'left'] }}>
                  Motivations
                </Text>
                <Text
                  as="p"
                  sx={{
                    fontSize: [3],
                    lineHeight: 1.5,
                    m: 2,
                    textAlign: ['center', 'left'],
                  }}
                >
                  Motivations cluster your habits to help you keep track of the
                  bigger picture. You can group different mixes of habits to all
                  your various motivations.
                </Text>
              </Box>
            </Flex>
            <Flex
              sx={{
                maxWidth: ['100%', '80%'],
                mx: [2, 'auto'],
                justifyContent: ['center'],
              }}
            >
              <Box maxWidth={['100%', '80%']}>
                <img
                  width="100%"
                  src={Collage}
                  alt="junto - simple habit tracking"
                />
              </Box>
            </Flex>
          </Container>
        </Flex>

        <Flex
          sx={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            py: [3, 4],
            my: 3,
          }}
        >
          <Container>
            <Text
              as="p"
              id="about"
              sx={{
                fontSize: [2, 3],
                lineHeight: 1.5,
                m: 2,
                textAlign: ['center', 'left'],
              }}
            >
              New year's resolutions don’t work. You want to stop smoking, get
              in shape, or read more books. But you fail to follow through. And
              3 weeks later, you open the bag of chips, you do not run because
              it rains, and those new books are dusting on the shelf. But wait,
              why is it so difficult? The three most common problems according
              to behavioral science are:
            </Text>
            <Box px={4} py={[3, 0]}>
              <Text
                as="p"
                sx={{
                  fontSize: [2, 3],
                  lineHeight: 1.5,
                  m: 3,
                  textAlign: ['center', 'left'],
                }}
              >
                <b>You chase after goals instead of changing your behavior.</b>{' '}
                Don’t try to run a marathon, try to become a runner.
              </Text>
              <Text
                as="p"
                sx={{
                  fontSize: [2, 3],
                  lineHeight: 1.5,
                  m: 3,
                  textAlign: ['center', 'left'],
                }}
              >
                <b>You want to see progress fast and start too big.</b> Start
                with baby steps and give yourself time to grow. Do just one
                pushup, read just one page, write just one word, and you are
                already doing more than yesterday.
              </Text>
              <Text
                as="p"
                sx={{
                  fontSize: [2, 3],
                  lineHeight: 1.5,
                  m: 3,
                  textAlign: ['center', 'left'],
                }}
              >
                <b>
                  You only try to change yourself instead of changing your
                  environment.
                </b>{' '}
                Don’t expect to always have a book with you. Download a book to
                your phone and make it very easy to read wherever you are.
              </Text>

              <Box textAlign="center">
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
            </Box>
          </Container>
        </Flex>

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
            <Flex flexDirection={['column', 'row']} justifyContent="center">
              <Text
                sx={{
                  fontSize: 1,
                  color: 'gray.500',
                  textAlign: 'center',
                  textDecoration: 'none',
                }}
                as={OutboundLink}
                mr={3}
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
                to="/terms"
              >
                Terms
              </Text>
            </Flex>
          </Container>
        </Flex>
      </Flex>
    </Box>
  </Layout>
)

export default IndexPage
