import Header from './Header'

const layoutStyle = {
  margin: 0,
  padding: 0
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      <button className="btn btn-primary">Click me</button>
      {props.children}
    </div>
  )
}
