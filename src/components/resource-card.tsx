import { getImageUrl, pxToRem } from '@/helpers';
import { Box, Flex, Icon, Image, Stack, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { PiFilePdfLight, PiLinkBold, PiMonitorPlay } from 'react-icons/pi';
import { Tag } from './ui';

type ResourceCardProps = {
  category: string;
  imageName: string;
  imagePosition: ResourceImagePosition;
  principles: string[];
  title: string;
  type: ResourceType;
};

export const ResourceCard: FC<ResourceCardProps> = ({
  category,
  imageName,
  imagePosition,
  principles,
  title,
  type,
}) => {
  return (
    <Box
      as="article"
      border="1px solid #F2F2F2"
      borderRadius={pxToRem(10)}
      boxShadow="0px 4px 17px 0px rgba(0, 0, 0, 0.02)"
      cursor="pointer"
      overflow="hidden"
      pos="relative"
      _hover={{
        '& > img': {
          animation: 'cardAnim',
        },
      }}
    >
      <Image
        pos="absolute"
        right={imagePosition === 'right' ? 0 : 'auto'}
        src={getImageUrl(imageName)}
        top={0}
        zIndex={-1}
      />
      <Box
        pb={{ base: pxToRem(31), lg: pxToRem(22) }}
        pl={{ base: pxToRem(46), lg: pxToRem(33) }}
        pr={{ base: pxToRem(29), lg: pxToRem(22) }}
        pt={{ base: pxToRem(68), lg: pxToRem(48) }}
      >
        <Icon mb={{ base: pxToRem(55), lg: pxToRem(35) }} size="lg">
          {type === 'PDF' && <PiFilePdfLight />}
          {type === 'Link' && <PiLinkBold />}
          {type === 'Video' && <PiMonitorPlay />}
        </Icon>
        <Stack gap={{ base: pxToRem(18), lg: pxToRem(13) }}>
          <Text
            as="h2"
            color="#2C3237"
            fontFamily="poppins"
            fontSize={{ base: pxToRem(22), lg: pxToRem(18) }}
            fontWeight={700}
          >
            {title}
          </Text>
          <Text
            color="#828282"
            fontSize={{ base: pxToRem(19), lg: pxToRem(14) }}
          >
            {category}
          </Text>

          <Flex gap={2}>
            {principles.map((principle) => (
              <Tag fontWeight={500} key={principle} rounded="full" size="sm">
                {principle}
              </Tag>
            ))}
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};
