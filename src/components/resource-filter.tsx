import { Box, Stack, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { Checkbox } from './ui';
import { pxToRem } from '@/helpers';

type ResourceFilterProps = {
  items: string[];
  onSelect: (item: string) => void;
  selections: string[];
  title: string;
};

export const ResourceFilter: FC<ResourceFilterProps> = ({
  items,
  onSelect,
  selections,
  title,
}) => {
  return (
    <Box>
      <Text fontWeight={700} mb={pxToRem(20)}>
        {title}
      </Text>
      <Stack gap={pxToRem(6)}>
        {items.map((item) => (
          <Checkbox
            checked={selections.includes(item)}
            icon={
              <Box
                bgColor="#3F3F3F"
                borderRadius="1.65px"
                display="none"
                h="2"
                w="2"
              />
            }
            key={item}
            onChange={() => onSelect(item)}
          >
            {item}
          </Checkbox>
        ))}
      </Stack>
    </Box>
  );
};
