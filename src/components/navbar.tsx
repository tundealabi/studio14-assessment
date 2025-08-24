import { getImageUrl, pxToRem } from '@/helpers';
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  Separator,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { IoChevronDown, IoMenu } from 'react-icons/io5';
import { Avatar, Button, Switch } from './ui';

export const Navbar = () => {
  return (
    <Box
      as="nav"
      borderBottom="1px solid #ECECEC"
      boxShadow="0px 4px 20px 0px rgba(0, 0, 0, 0.06)"
    >
      <Flex
        h={pxToRem(75)}
        justifyContent="space-between"
        pl={{ base: pxToRem(18.93), lg: pxToRem(70) }}
        pr={{ base: pxToRem(26.86), lg: pxToRem(63) }}
      >
        <Flex gap={pxToRem(46)}>
          <Flex alignItems="center" gap={pxToRem(12)}>
            <Image src={getImageUrl('logo.png')} />
            <Text fontSize={pxToRem(23)} fontWeight={800}>
              LOGO
            </Text>
          </Flex>
          <Tabs.Root
            alignSelf="flex-end"
            defaultValue="resources"
            display={{ lgDown: 'none' }}
          >
            <Tabs.List border={0}>
              {['Dashboard', 'Resources', 'Toolkit'].map((item) => (
                <Tabs.Trigger
                  fontFamily="poppins"
                  fontWeight={600}
                  pb={pxToRem(35)}
                  key={item}
                  value={item.toLowerCase()}
                  _selected={{
                    color: '#314EF9',
                    '&:before': {
                      backgroundColor: '#314EF9',
                      bottom: '-4px',
                      height: '4px',
                    },
                  }}
                >
                  {item}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </Tabs.Root>
        </Flex>
        <Flex alignItems="center" gap={{ base: pxToRem(18), lg: pxToRem(28) }}>
          <Switch
            css={{
              '& span': {
                fontSize: { base: pxToRem(20), lg: pxToRem(14) },
                fontWeight: 600,
              },
            }}
            fontFamily="poppins"
          >
            <Text as="span" display={{ lgDown: 'none' }}>
              Switch to Employee
            </Text>
          </Switch>
          <Separator
            borderColor="#E4E4E4"
            height={pxToRem(25)}
            orientation="vertical"
            size="lg"
          />
          <Flex alignItems="center" gap={pxToRem(12)}>
            <Avatar
              bgColor="#17E4A1"
              css={{
                '& span': {
                  fontSize: pxToRem(12),
                  fontWeight: 800,
                },
              }}
              fontFamily="poppins"
              name="Tunde Alabi"
              size="xs"
            />
            <Button
              color="#525252"
              display={{ lgDown: 'none' }}
              fontFamily="poppins"
              fontSize={{ base: pxToRem(20), lg: pxToRem(16) }}
              fontWeight={600}
              variant="ghost"
            >
              Jonathan{' '}
              <Icon size="xs" color="#525252">
                <IoChevronDown />
              </Icon>
            </Button>
            <IconButton
              aria-label="menu"
              display={{ lg: 'none' }}
              variant="ghost"
            >
              <Icon size="2xl">
                <IoMenu />
              </Icon>
            </IconButton>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
