function Header()
{
    return( <div>
<div class="overlay"></div>
    <header>
        <a href="#" class="logo" style={{color:"rgb(198, 193, 193)"}}><span>L</span>ogo</a>
        <ul class="navlist">
            <li><a href="#home" class="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Content</a></li>

        </ul>
        <div class="right-header">            
            <div class="social-media">
            <div class="bg-icon">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <span></span>
                </div>
                   <div class="bg-icon">
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <span></span>
                </div>

                <div class="bg-icon">
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <span></span>
                </div>

             
            </div>
        </div>
    </header>
        </div>
    )
}


export default Header;