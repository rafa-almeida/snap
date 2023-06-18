import { Search, Title } from '@material-ui/icons'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import TitImg from '../components/TitImg'


const Default = ({ children }) => {
    
    return (
        <>
        <Header />     
          
        {children}
        <footer>FOOTER</footer>
        </>
    )
}

export default Default
