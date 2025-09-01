import { useState, useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip"
import FavourtiteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {

  const advice_url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState([]);
  const [favouriteAdvices, setFavouriteAdvices] = useState([]);

  const fetchAdvice = async () => {
      const string = await fetch(advice_url);
      const data = await string.json();
      setAdvice(data.slip);
  };

  const saveAdviceToFavourites = (slip) => {
      if (!favouriteAdvices.find((fav) => fav.id === slip.id)) {
        setFavouriteAdvices([...favouriteAdvices, slip]);
      }
      console.log(favouriteAdvices);
    };


  useEffect(() => {
    fetchAdvice();
  }, []);


  return (
    <section>
      <h2>Advice Section</h2>
      {advice && <AdviceSlip slip={advice} onNewAdvice={fetchAdvice} onSaveAdvice={saveAdviceToFavourites}/>}
      <FavourtiteSlipsList favouriteAdvices={favouriteAdvices}/>
    </section>
  )
}

export default AdviceSection
