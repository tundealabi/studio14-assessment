export const getImageUrl = (name: string) => {
  return new URL(`/src/assets/${name}`, import.meta.url).href;
};

export const getResourcesData: () => Resource[] = () => [
  {
    id: '1A',
    category: 'Category 1',
    imageName: 'red-blob.svg',
    imagePosition: 'right',
    principles: ['Secure Base', 'Wellbeing'],
    title: 'The ultimate guide to Workplace Chat',
    type: 'PDF',
  },
  {
    id: '1B',
    category: 'Category 2',
    imageName: 'green-blob.svg',
    imagePosition: 'left',
    principles: ['Sense of Appreciation'],
    title: 'The ultimate guide to Remote Work',
    type: 'Link',
  },
  {
    id: '1C',
    category: 'Category 3',
    imageName: 'red-blob.svg',
    imagePosition: 'right',
    principles: ['Learning Organisation'],
    title: 'The ultimate guide to Video Conferencing',
    type: 'Video',
  },
  {
    id: '1D',
    category: 'Category 1',
    imageName: 'orange-blob.svg',
    imagePosition: 'left',
    principles: ['Mission and Vision'],
    title: 'The ultimate guide to Team Collaboration',
    type: 'PDF',
  },
  {
    id: '1E',
    category: 'Category 2',
    imageName: 'yellow-blob.svg',
    imagePosition: 'left',
    principles: ['Mission and Vision', 'Wellbeing'],
    title: 'The ultimate guide to Hybrid Work',
    type: 'Link',
  },
  {
    id: '1F',
    category: 'Category 4',
    imageName: 'blue-blob.svg',
    imagePosition: 'right',
    principles: ['Secure Base', 'Mission and Vision'],
    title: 'Taking stock of mental health in your workplace',
    type: 'PDF',
  },
];

export const pxToRem = (px: number, baseFontSize: number = 16) => {
  const remValue = px / baseFontSize;
  return `${Math.round(remValue * 1000) / 1000}rem`;
};
