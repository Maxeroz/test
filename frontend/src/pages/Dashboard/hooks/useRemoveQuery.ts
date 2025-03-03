import { useNavigate, useLocation } from "react-router-dom";

export const useRemoveQuery = (key: string) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const removeQuery = () => {
    console.log("inside useRemoveQuery");
    const newSearchParams = new URLSearchParams(search);
    newSearchParams.delete(key);
    navigate(`?${newSearchParams.toString()}`, { replace: true });
  };

  return removeQuery;
};
