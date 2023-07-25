import Logo from '../../assets/logo.png'


function Header(){

    return (

        <div>
            <img src={Logo} alt="logo-super-movies" style ={{width: '150px'}}   />
        </div>
    )
}

export default Header