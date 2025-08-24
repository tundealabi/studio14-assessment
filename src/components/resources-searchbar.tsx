import { Icon, Input } from '@chakra-ui/react';
import { InputGroup } from './ui';
import { IoSearchOutline } from 'react-icons/io5';
import { pxToRem } from '@/helpers';
import { useResourcesFilters } from '@/hooks';

export const ResourcesSearchBar = () => {
  const { filters, setSearch } = useResourcesFilters();
  return (
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
        onChange={(e) => setSearch(e.target.value.trimStart())}
        placeholder="Search by title or keyword"
        size="xl"
        value={filters.search}
      />
    </InputGroup>
  );
};
