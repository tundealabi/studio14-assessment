import { pxToRem } from '@/helpers';
import { Box, Stack, Text } from '@chakra-ui/react';
import { ResourceFilter } from './resource-filter';
import { useResourcesFilters } from '@/hooks';

const principles = [
  'Secure Base',
  'Sense of Appreciation',
  'Learning Organisation',
  'Mission and Vision',
  'Wellbeing',
];

const documentTypes = ['DOC', 'Link', 'PDF', 'Video'];

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

export const ResourcesFilters = () => {
  const { filters, toggleCategory, toggleDocumentType, togglePrinciple } =
    useResourcesFilters();

  return (
    <Box
      display={{ base: 'none', lg: 'block' }}
      flexBasis="30%"
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
          items={principles}
          onSelect={togglePrinciple}
          selections={filters.principles}
          title="Key Foundational Principles"
        />
        <ResourceFilter
          items={documentTypes}
          onSelect={toggleDocumentType}
          selections={filters.documentTypes}
          title="Document type"
        />
        <ResourceFilter
          items={categories}
          onSelect={toggleCategory}
          selections={filters.categories}
          title="Categories"
        />
      </Stack>
    </Box>
  );
};
