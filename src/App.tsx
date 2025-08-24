import { Navbar, ResourceCard, ResourceFilter } from './components';
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { pxToRem } from './helpers';
import { Button, InputGroup } from './components/ui';
import { IoFilterSharp, IoSearchOutline } from 'react-icons/io5';

function App() {
  return (
    <>
      <Navbar />
      <Box as="main">
        <Box
          bgColor="#FAFAFA"
          pb={pxToRem(67)}
          pt={{ base: pxToRem(70), lg: pxToRem(95.41) }}
        >
          <Container maxW={{ base: '92%', lg: '60%' }}>
            <VStack>
              <Heading
                as="h1"
                color="#2C3237"
                fontSize={{ base: pxToRem(40), lg: pxToRem(52) }}
                fontWeight={700}
              >
                Resources
              </Heading>
              <Text
                color="#2C3237"
                maxW={{ base: '90%', lg: '75%' }}
                mb={{ base: pxToRem(46), lg: pxToRem(51) }}
                mt={{ base: pxToRem(8), lg: pxToRem(23) }}
                textAlign="center"
              >
                Consectetur adipiscing elit duis tristique sollicitudin nibh sit
                amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
                vitae congue
              </Text>
              <InputGroup
                startElement={
                  <Icon size="md">
                    <IoSearchOutline />
                  </Icon>
                }
                w="full"
              >
                <Input
                  bgColor="#FFFFFF"
                  borderColor="#A1A1A1"
                  borderRadius={pxToRem(10)}
                  placeholder="Search by title or keyword"
                  size="xl"
                />
              </InputGroup>
            </VStack>
          </Container>
        </Box>
        {/* FILTERS AND LISTINGS */}

        <Button
          bgColor="#F1F1F1"
          borderBottom="1px solid #F2F2F2"
          color="#3F3F3F"
          display={{ lg: 'none' }}
          fontSize={pxToRem(16)}
          py={pxToRem(30)}
          variant="solid"
          w="full"
        >
          <IoFilterSharp color="#000" /> Show Filters
        </Button>
        <Box
          borderTop="1px solid #F2F2F2"
          boxShadow="0px 4px 17px 0px rgba(0, 0, 0, 0.02)"
        >
          <Flex
            columnGap={pxToRem(58)}
            m="0 auto"
            maxW={{ base: '90%', lg: '88%' }}
            justifyContent="center"
            pb={{ base: pxToRem(40), lg: pxToRem(53) }}
          >
            <Box
              display={{ base: 'none', lg: 'block' }}
              flexBasis="35%"
              pt={{ base: pxToRem(40), lg: pxToRem(53) }}
            >
              <Box pl={pxToRem(19)}>
                <Text fontWeight={700} mb={pxToRem(21)}>
                  Filters
                </Text>
              </Box>

              <Stack
                borderTop="0.83px solid #E0E0E0"
                gap={pxToRem(33)}
                pl={pxToRem(19)}
                pr={pxToRem(11)}
                pt={pxToRem(24)}
              >
                <ResourceFilter
                  items={[
                    { isChecked: true, title: 'Principle 1' },
                    { isChecked: false, title: 'Principle 2' },
                    { isChecked: true, title: 'Principle 3' },
                  ]}
                  title="Key Foundational Principles"
                />
                <ResourceFilter
                  items={[
                    { isChecked: true, title: 'Research' },
                    { isChecked: false, title: 'Case Study' },
                    { isChecked: true, title: 'White Paper' },
                  ]}
                  title="Document type"
                />
                <ResourceFilter
                  items={[
                    { isChecked: true, title: 'Category 1' },
                    { isChecked: false, title: 'Category 2' },
                    { isChecked: true, title: 'Category 3' },
                  ]}
                  title="Categories"
                />
              </Stack>
            </Box>
            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              }}
              gap={{ base: pxToRem(13), lg: pxToRem(20) }}
              pt={{ base: pxToRem(48), lg: pxToRem(90) }}
            >
              <ResourceCard
                category="Category 1"
                imageName="red-blob.svg"
                imagePosition="right"
                tags={['Tag 1', 'Tag 2']}
                title="The ultimate guide to Workplace Chat"
                type="file"
              />
              <ResourceCard
                category="Category 2"
                imageName="green-blob.svg"
                imagePosition="left"
                tags={['Tag 3', 'Tag 4']}
                title="The ultimate guide to Remote Work"
                type="link"
              />
              <ResourceCard
                category="Category 3"
                imageName="red-blob.svg"
                imagePosition="right"
                tags={['Tag 5']}
                title="The ultimate guide to Video Conferencing"
                type="video"
              />
              <ResourceCard
                category="Category 4"
                imageName="orange-blob.svg"
                imagePosition="left"
                tags={['Tag 7', 'Tag 8']}
                title="The ultimate guide to Team Collaboration"
                type="video"
              />
              <ResourceCard
                category="Category 5"
                imageName="yellow-blob.svg"
                imagePosition="left"
                tags={['Tag 9']}
                title="The ultimate guide to Hybrid Work"
                type="video"
              />
              <ResourceCard
                category="Category 6"
                imageName="blue-blob.svg"
                imagePosition="right"
                tags={['Tag 11', 'Tag 12']}
                title="Taking stock of mental health in your workplace"
                type="video"
              />
            </Grid>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default App;
