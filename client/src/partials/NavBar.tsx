import './styles/NavBar.module.css'

type Props = {}

export const NavBar = (props: Props) => {
  return (
    <div className="navbar">
      <ul>
        <li><img src={require('../assets/home.svg').default} alt="home-logo" /></li>
        <li><img src={require('../assets/user.svg').default} alt="user-logo" /></li>
        <li><img src={require('../assets/fav.svg').default} alt="fav-logo" /></li>
        <li><img src={require('../assets/search.svg').default} alt="loupe-logo" /></li>
        <li><img src={require('../assets/add.svg').default} alt="add-logo" /></li>
      </ul>
    </div>
  )
}