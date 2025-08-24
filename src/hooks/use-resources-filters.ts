import { ResourcesFilterContext } from '@/contexts';
import { useContext } from 'react';

export function useResourcesFilters() {
  const ctx = useContext(ResourcesFilterContext);
  if (!ctx)
    throw new Error(
      'useResourcesFilters must be used within a ResourcesFilterProvider'
    );
  return ctx;
}
