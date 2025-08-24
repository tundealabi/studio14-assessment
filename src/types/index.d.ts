type ResourceImagePosition = 'left' | 'right';
type ResourceType = 'DOC' | 'Link' | 'PDF' | 'Video';

type Resource = {
  id: string;
  category: string;
  imageName: string;
  imagePosition: ResourceImagePosition;
  principles: string[];
  title: string;
  type: ResourceType;
};

type ResourcesFilters = {
  search: string;
  principles: string[];
  documentTypes: string[];
  categories: string[];
};

type ResourcesFilterContextType = {
  filters: ResourcesFilters;
  setSearch: (value: string) => void;
  togglePrinciple: (value: string) => void;
  toggleDocumentType: (value: string) => void;
  toggleCategory: (value: string) => void;
  resetFilters: () => void;
};
