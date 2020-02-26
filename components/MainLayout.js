import Header from './Header'

const contentStyle = {
  paddingTop: 50
}

export default function Layout(props) {
  return (
    <div>
      <Header />
      <div style={contentStyle}>
        {props.children}
      </div>
    </div>
  )
}
