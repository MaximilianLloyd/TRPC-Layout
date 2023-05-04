# TRPC-Layout

Resolve TRPC queries to JSX. Stop littering your project with isSuccess, isLoading and isError.

Turn this:

```tsx
const { data, isSuccess, isError, isLoading } = api.example.hello.useQuery();

if (isLoading) {
  return <Loading />;
}

if (isError) {
  return <div>Something happened</div>;
}

if (isSuccess) {
  return <div>{data.name}</div>;
}

return null;
```

Into this:

```tsx
import { TRPCLayout } from "trpc-layout";

const query = api.example.hello.useQuery();

// Data and error are inferred from the query
return TRPCLayout(query, {
  success(data) {
    return <div>{data.shippingLine?.name}</div>;
  },
  error(error) {
    return <div>{error.message}</div>;
  },
  loading: <Loading />,
});
```
