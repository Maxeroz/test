import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useSearchQuery = () => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const newSearchParams = new URLSearchParams(search);
    if (query) {
      newSearchParams.set("search", query);
    } else {
      newSearchParams.delete("search");
    }

    navigate(`?${newSearchParams.toString()}`, { replace: true });
  }, [query, search, navigate]);

  return { query, setQuery };
};
