import useSWR from "swr";
const useSWRAPI = <T>(url?: string | null) => {
  const fetcher = async (url: string) => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: T | any = await res.json();
    return { data, res };
  };

  const { data, error, mutate, isValidating } = useSWR(url, fetcher);
  return {
    data,
    error,
    isValidating,
    mutate,
  };
};
export default useSWRAPI;
