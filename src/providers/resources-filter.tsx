import { ResourcesFilterContext } from '@/contexts';
import { useState, type ReactNode } from 'react';

export function ResourcesFilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<ResourcesFilters>({
    search: '',
    principles: [],
    documentTypes: [],
    categories: [],
  });

  const setSearch = (value: string) =>
    setFilters((prev) => ({ ...prev, search: value }));

  const toggleArrayValue = (key: keyof ResourcesFilters, value: string) =>
    setFilters((prev) => {
      const arr = prev[key] as string[];
      return {
        ...prev,
        [key]: arr.includes(value)
          ? arr.filter((v) => v !== value) // remove
          : [...arr, value], // add
      };
    });

  const togglePrinciple = (value: string) =>
    toggleArrayValue('principles', value);
  const toggleDocumentType = (value: string) =>
    toggleArrayValue('documentTypes', value);
  const toggleCategory = (value: string) =>
    toggleArrayValue('categories', value);

  const resetFilters = () =>
    setFilters({
      search: '',
      principles: [],
      documentTypes: [],
      categories: [],
    });

  return (
    <ResourcesFilterContext.Provider
      value={{
        filters,
        setSearch,
        togglePrinciple,
        toggleDocumentType,
        toggleCategory,
        resetFilters,
      }}
    >
      {children}
    </ResourcesFilterContext.Provider>
  );
}
