import { getResourcesData, pxToRem } from '@/helpers';
import { Box, Grid, Text } from '@chakra-ui/react';
import { ResourceCard } from './resource-card';
import { useResourcesFilters } from '@/hooks';

const resources = getResourcesData();

export const ResourcesList = () => {
  const { filters } = useResourcesFilters();

  const filteredResources = resources.filter((item) => {
    // search by title
    const matchesSearch = item.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    // principles filter
    const matchesPrinciple =
      filters.principles.length === 0 ||
      filters.principles.some((selected) => item.principles.includes(selected));

    // document type filter
    const matchesDocType =
      filters.documentTypes.length === 0 ||
      filters.documentTypes.includes(item.type);

    // categories filter
    const matchesCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(item.category);

    return (
      matchesSearch && matchesPrinciple && matchesDocType && matchesCategory
    );
  });

  return (
    <Box flexBasis={'100%'} pt={{ base: pxToRem(48), lg: pxToRem(90) }}>
      {filteredResources.length ? (
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={{ base: pxToRem(13), lg: pxToRem(20) }}
        >
          {filteredResources.map((resource) => (
            <ResourceCard
              category={resource.category}
              imageName={resource.imageName}
              imagePosition={resource.imagePosition}
              key={resource.id}
              principles={resource.principles}
              title={resource.title}
              type={resource.type}
            />
          ))}
        </Grid>
      ) : (
        <Text>No resources found</Text>
      )}
    </Box>
  );
};
