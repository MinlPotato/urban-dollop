import axios from "axios";
import { useEffect, useState } from "react";

function Episodios(props) {
  const [episodio, setData] = useState([]);
  useEffect(() => {
    axios.get(props.info).then((response) => {
      setData(response.data);
    });
  }, [props.info]);

  return <div> {episodio.name} </div>;
}

export default Episodios;
