function App() {
  return (
    <div className="card">
      <img
        className="card-image"
        src="/images/image-equilibrium.jpg"
        alt="Image Equilibrium"
      />
      <h1 className="card-title">Equilibrium #3429</h1>
      <p className="card-description">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="card-values">
        <div className="card-value card-eth">
          <img src="/images/icon-ethereum.svg" alt="" />
          0.041 ETH
        </div>
        <div className="card-value card-days">
          <img src="/images/icon-clock.svg" alt="" />
          3 days left
        </div>
      </div>

      <hr className="card-hr" />

      <div className="card-avatar">
        <img src="/images/image-avatar.png" alt="" />
        <span> Creation of <span className="card-avatar-name">Jules Wyvern</span> </span>
      </div>
    </div>
  )
}

export default App
