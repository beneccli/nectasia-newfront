import Header from '../Headers/Header'

const contentStyle = {
  paddingTop: 66
}

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <div style={contentStyle}>
      {children}
    </div>
  </div>
)

export const getLayout = page => <MainLayout>{page}</MainLayout>

export default MainLayout