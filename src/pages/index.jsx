import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { MenuBar } from '@components/Navigation'
import { Flex, Box } from '@components/Grid'
import { Text } from '@components/Typography'
import { Container } from '@components/Container'
import Screenshot from '../images/screenshots/screenshot.png'

const IndexPage = () => (
  <Layout>
    <SEO />
    <Box width="100%">
      <MenuBar />

      <Flex flexDirection="column" alignItems="center">
        <Container>
          <Flex flexDirection="column" my={[2, 3]}>
            <Flex flexDirection="row">
              <Box width="50%" alignItems="center">
                <Text sx={{ fontSize: [4, 5] }}>
                  Junto helps you every day to become a better version of
                  yourself. Through small steps and motivating streaks you build
                  long-lasting good habits and break bad ones.{' '}
                </Text>
              </Box>
              <Box width="50%" alignItems="flex-end">
                <img
                  width="80%"
                  src={Screenshot}
                  alt="junto - simple habit tracking"
                />
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Box>
  </Layout>
)

export default IndexPage
