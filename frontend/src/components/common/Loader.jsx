function Loader({ label = 'Cargando...' }) {
  return (
    <div className="ui-loader" role="status" aria-live="polite" aria-busy="true">
      <span className="ui-loader__spinner" aria-hidden="true" />
      <span className="ui-loader__label">{label}</span>
    </div>
  )
}

export default Loader