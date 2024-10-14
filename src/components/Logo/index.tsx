import './style.css'
import logo from '../../assets/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img 
                src={logo} 
                alt='logo' 
                className='logo-img'
            />
            <p><strong>My Books</strong></p>
        </div>
    )
}

export default Logo