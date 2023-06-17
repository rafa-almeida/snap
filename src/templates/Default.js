import { Search } from '@material-ui/icons'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

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
