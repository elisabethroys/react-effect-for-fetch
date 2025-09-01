function AdviceSlip( {slip, onNewAdvice, onSaveAdvice} ) {

  return (
    <section className="adivce-slip">
        <h3>Random Advice</h3>
        <p>{slip.advice}</p>
        <button onClick={(onNewAdvice)}>Get More Advice</button>
        <button onClick={() => onSaveAdvice(slip)}>Save to Favourties</button>
    </section>
  )
}

export default AdviceSlip;