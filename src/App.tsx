import {
  Navbar,
  ResourcesFilters,
  ResourcesList,
  ResourcesSearchBar,
} from './components';
import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { pxToRem } from './helpers';
import { Button } from './components/ui';
import { IoFilterSharp } from 'react-icons/io5';
import { ResourcesFilterProvider } from './providers';

function App() {
  return (
    <>
      <Navbar />
      <Box as="main">
        <ResourcesFilterProvider>
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
                  Consectetur adipiscing elit duis tristique sollicitudin nibh
                  sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
                  cursus vitae congue
                </Text>

                <ResourcesSearchBar />
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
              <ResourcesFilters />
              <ResourcesList />
            </Flex>
          </Box>
        </ResourcesFilterProvider>
      </Box>
    </>
  );
}

export default App;
