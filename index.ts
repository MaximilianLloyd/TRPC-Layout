import { UseTRPCQueryResult } from "@trpc/react-query/shared";

type TRPCLayoutOptions<TData, TError> = {
  success?: (data: TData) => React.ReactNode;
  error?: (error: TError) => React.ReactNode;
  loading?: JSX.Element;
}


export function TRPCLayout<TData, TError>(
  query: UseTRPCQueryResult<TData, TError>,
  options: TRPCLayoutOptions<TData, TError>
): React.ReactNode {
  if (query.isError && options.error) {
    return options.error(query.error);
  }


  if (query.isSuccess && options.success) {
      return options.success(query.data);
  }

  if (query.isLoading && options.loading) {
    return options.loading;
  }

  return null;
}

