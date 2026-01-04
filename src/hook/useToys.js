import axios from "axios";
import React, { useEffect, useState } from "react";


const useToys = () => {
   const [toy, setToy] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
   
     useEffect(() => {
       setLoading(true);
       axios("../toys.json")
         .then((data) => setToy(data.data))
         .catch((err) => setError(err))
         .finally(() => setLoading(false));
     }, []);
   
     return {toy, loading, error}
};

export default useToys;