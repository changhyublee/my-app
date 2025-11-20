import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../api/client';

export const useSample = (endpoint) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: () => apiGet(endpoint),
  });
};
