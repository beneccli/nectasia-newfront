import Header from '../Header'

const contentStyle = {
  paddingTop: 53
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