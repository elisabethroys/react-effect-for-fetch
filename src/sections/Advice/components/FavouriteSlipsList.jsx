function FavourtiteSlipsList({ favouriteAdvices }) {

  return (
    <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>{favouriteAdvices.map((advice, index) => (
            <li key={index}>{advice.advice}</li>
        ))}</ul>
    </section>
  )
}

export default FavourtiteSlipsList;