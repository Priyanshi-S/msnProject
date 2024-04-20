import { useEffect, useState } from 'react';

/*
 * Higher order component can be reused for fetching data
 */
const HocComponent = (title: string, Component: any, request: string) => {
  return function HOC() {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        fetch(request)
          .then((res) => res.json())
          .then((res) => setData(res.splice(90)))
          .catch((err) => console.log(err));
      };
      fetchData();
    }, []);

    return (
      <div>
        {title}
        <Component data={data} />
      </div>
    );
  };
};
export default HocComponent;
