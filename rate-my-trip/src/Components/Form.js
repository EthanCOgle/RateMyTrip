var style = {
  backgroundColor: "blue",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "100px",
  width: "100%",

}

var phantom = {
display: 'block',
padding: '20px',
height: '100px',
width: '100%',
}

const Form = ({childern}) => {
  return (
    <div>
          <div style={phantom} />
          <div style={style}>
              { children }
          </div>
      </div>
  )
}

export default Form