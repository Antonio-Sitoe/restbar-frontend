import React from 'react';

const useFecth = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    setLoading(true);
    setError(null);
    let response;
    let json;
    try {
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (e) {
      json = null;
      setError(e.message);
    } finally {
      setLoading(false);
      setData(json);
    }
    return {
      json,
      response,
    };
  }, []);

  return { data, loading, error, request };
};

export default useFecth;
