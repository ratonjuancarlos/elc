import debounce from "lodash/debounce";
import get from "lodash/get";
import { BASE_URL, DEBOUNCE_TIME } from "../constants";

const fetchData = (value, setResults) =>
  fetch(`${BASE_URL}?search=${value}`)
    .then((response) => response.json())
    .then((data) => setResults(data));

export const fetchDebounced = debounce(fetchData, DEBOUNCE_TIME);

export const doSearch = (setResults) => (e) => {
  e.preventDefault();
  let value = get(e, "target.value", undefined);
  value = value.replace(/[^a-zA-Z0-9\s]/g, "");

  if (value === "" || value.length < 3) {
    setResults([]);
  } else {
    fetchDebounced(value, setResults);
  }
};
