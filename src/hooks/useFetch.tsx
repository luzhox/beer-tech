const useFetchGet = (url: string) => {

  const fetchApi = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en la petición', error);
    }
  };

  return { fetchApi };
};

export default useFetchGet;