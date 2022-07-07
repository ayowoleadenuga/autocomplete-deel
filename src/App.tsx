import React, { useState, useEffect, useCallback } from "react";
import Autocomplete from "./autocomplete/Autocomplete";
import useRMCharService from "./custom_hooks/useRMCharService";
import "./App.css";
import useDebounce from "./custom_hooks/useDebounce";

const App = () => {
  // initial state declarations
  const [suggestions, setSuggestions] = useState([""]);
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce<string>(value, 500); 

  // custom hook for fetching Rick&Morty API
  // request is re-triggerd when value parameter changes
  const service = useRMCharService(debouncedValue);

  const changeHandler = useCallback((val: string) => setValue(val), []);

  // handling API request status change
  useEffect(() => {
    if (service.status === "loading") {
      setSuggestions([""]);
    }
    if (service.status === "loaded" && service.payload.results) {
      setSuggestions(service.payload.results.map(item => item.name));
    }
    if (service.status === "error") {
      setSuggestions([]);
    }
  }, [service.status]);

  return (
    <div className="App">
      <Autocomplete
        value={value}
        label="Autocomplete"
        placeholder=""
        onChange={changeHandler}
        suggestions={suggestions}
        isLoading={service.status === "loading"}
        sort={false}
      />
    </div>
  );
};

export default App;
