const Item = (props) => {
    const value = (props.cash / props.ratio * props.price).toFixed(2)
    return <p>{props.title} {props.cash <= 0 ? "" : value}</p>
  }

  export default Item