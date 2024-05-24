import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type UseQueryParamStateArgs = {
  filters: { name: string }[];
  queryParamArgName: string;
};

export const useQueryParamState = ({
  filters,
  queryParamArgName,
}: UseQueryParamStateArgs) => {
  const defaultFilter = filters[0];
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const usp = new URLSearchParams(searchParams?.toString());
  const selectedFilter = searchParams?.has(queryParamArgName)
    ? { name: searchParams.get(queryParamArgName)! }
    : defaultFilter;
  useEffect(() => {
    if (
      filters.filter((filter) => filter.name === selectedFilter.name).length ===
      0
    ) {
      usp.delete(queryParamArgName);
      router.replace(
        `${pathname}${usp.toString() === "" ? "" : "?"}${usp.toString()}`
      );
    }
  }, [selectedFilter]);

  const setSelectedFilter = ({ name }: { name: string }) => {
    if (name === defaultFilter.name) {
      usp.delete(queryParamArgName);
    } else {
      usp.set(queryParamArgName, name);
    }
    router.replace(
      `${pathname}${usp.toString() === "" ? "" : "?"}${usp.toString()}`
    );
  };

  return [selectedFilter, setSelectedFilter] as [
    { name: string },
    ({ name }: { name: string }) => void
  ];
};
