import axios from "axios";
import React, {useState} from "react"
import { formatSeasons } from "../utils/formatSeasons";

export const [show, setShow] = useState(null);
export const [seasons, setSeasons] = useState([]);

const fetchShow = () => {
    axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
        setShow(res.data);
        setSeasons(formatSeasons(res.data._embedded.episodes));
      });
  };

  export default fetchShow;