import React from 'react'

import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { MenuBar } from '@components/Navigation'
import { Flex, Box } from '@components/Grid'
import { Text } from '@components/Typography'
import { Container } from '@components/Container'
import Footer from '@components/Footer'

const TermsPage = () => (
  <Layout>
    <SEO />
    <Box width="100%">
      <MenuBar />

      <Flex flexDirection="column" alignItems="center">
        <Container>
          <Flex flexDirection="column" mx={3}>
            <Text as="h1" mb={4} mt={5}>
              End User License Agreement
            </Text>
            <Text as="p" mb={3}>
              This End User License Agreement (“Agreement”) is between you and
              Junto and governs use of this app made available through the Apple
              App Store/ Google Play Store. By installing the Junto App, you
              agree to be bound by this Agreement and understand that there is
              no tolerance for objectionable content. If you do not agree with
              the terms and conditions of this Agreement, you are not entitled
              to use the Junto App.
            </Text>
            <Text as="p" mb={3}>
              In order to ensure Junto provides the best experience possible for
              everyone, we strongly enforce a no tolerance policy for
              objectionable content. If you see inappropriate content, please
              use the "Report as offensive" feature found under each post.
            </Text>
            <Text as="p" mb={3}>
              1. Parties This Agreement is between you and Junto only, and not
              Apple, Inc. (“Apple”)/ Google. Notwithstanding the foregoing, you
              acknowledge that Apple/Google and its subsidiaries are third party
              beneficiaries of this Agreement and Apple/Google has the right to
              enforce this Agreement against you. Junto, not Apple/Google, is
              solely responsible for the Junto App and its content.
            </Text>
            <Text as="p" mb={3}>
              2. Privacy Junto may collect and use information about your usage
              of the Junto App, including certain types of information from and
              about your device. Junto may use this information to measure the
              use and performance of the Junto App.
            </Text>
            <Text as="p" mb={3}>
              3. Limited License Junto grants you a limited, non-exclusive,
              non-transferable, revocable license to use the Junto App for your
              personal, non-commercial purposes. You may only use the Junto App
              on Apple/Android devices that you own or control and as permitted
              by the App Store Terms of Service.
            </Text>
            {/* <!--   <Text as="p" mb={3}>4. Age Restrictions By using the Junto App, you represent and warrant that (a) you are 17 years of age or older and you agree to be bound by this Agreement; (b) if you are under 17 years of age, you have obtained verifiable consent from a parent or legal guardian; and (c) your use of the Junto App does not violate any applicable law or regulation. Your access to the Junto App may be terminated without warning if Junto believes, in its sole discretion, that you are under the age of 17 years and have not obtained verifiable consent from a parent or legal guardian. If you are a parent or legal guardian and you provide your consent to your child's use of the Junto App, you agree to be bound by this Agreement in respect to your child's use of the Junto App.</Text> --> */}
            <Text as="p" mb={3}>
              4. Objectionable Content Policy Content may not be submitted to
              Junto, who will
              {/* <!-- moderate all content and ultimately decide whether or not to post a submission --> */}
              remove objectionable content without any further warning or block
              user accounts
              {/* <!-- replaced -->  */}
              to the extent such content includes, is in conjunction with, or
              alongside any, Objectionable Content. Objectionable Content
              includes, but is not limited to: (i) sexually explicit materials;
              (ii) obscene, defamatory, libelous, slanderous, violent and/or
              unlawful content or profanity; (iii) content that infringes upon
              the rights of any third party, including copyright, trademark,
              privacy, publicity or other personal or proprietary right, or that
              is deceptive or fraudulent; (iv) content that promotes the use or
              sale of illegal or regulated substances, tobacco products,
              ammunition and/or firearms; and (v) gambling, including without
              limitation, any online casino, sports books, bingo or poker.
            </Text>
            {/* <!--       <Text as="p" mb={3}>5. Warranty Junto disclaims all warranties about the Junto App to the fullest extent permitted by law. To the extent any warranty exists under law that cannot be disclaimed, Junto, not Apple/Google, shall be solely responsible for such warranty.</Text> --> */}
            {/* <!--   <Text as="p" mb={3}>6. Maintenance and Support Junto does provide minimal maintenance or support for it but not to the extent that any maintenance or support is required by applicable law, Junto, not Apple/Google, shall be obligated to furnish any such maintenance or support.</Text> --> */}
            <Text as="p" mb={3}>
              5. Product Claims Junto, not Apple/Google, is responsible for
              addressing any claims by you relating to the Junto App or use of
              it, including, but not limited to: (i) any product liability
              claim; (ii) any claim that the Junto App fails to conform to any
              applicable legal or regulatory requirement; and (iii) any claim
              arising under consumer protection or similar legislation. Nothing
              in this Agreement shall be deemed an admission that you may have
              such claims.
            </Text>
            <Text as="p" mb={3}>
              6. Third Party Intellectual Property Claims Junto shall not be
              obligated to indemnify or defend you with respect to any third
              party claim arising out or relating to the Junto App. To the
              extent Junto is required to provide indemnification by applicable
              law, Junto, not Apple/Google, shall be solely responsible for the
              investigation, defense, settlement and discharge of any claim that
              the Junto App or your use of it infringes any third party
              intellectual property right.
            </Text>
          </Flex>
        </Container>
      </Flex>
      <Footer />
    </Box>
  </Layout>
)

export default TermsPage
