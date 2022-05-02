import style from './Error.module.css'

const ErrorComponent = ({error}) => {
  return (
    <div className={style.erro}>{error}</div>
  )
}

export default ErrorComponent