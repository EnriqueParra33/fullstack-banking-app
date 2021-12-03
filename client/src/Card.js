function Card(props) {
  function classes() {
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{ width: '460px' }}>
      <div className="card-header" style={{textAlign:'center', fontSize:'2em'}}>{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title" style={{textAlign:'center', fontSize:'2em'}}>{props.title}</h5>}
        {props.text && <p className="card-text" style={{textAlign:'center'}}>{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}

export default Card;
