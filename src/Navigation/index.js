import React from "react";


class Navigation extends React.Component{


    render(){
return(<nav class="menu">
<div class="wrapper">
    <ul>
        <a href="index.html"><li>Home</li></a>
        <a href="about.html"><li>About Us</li></a>
        <a href="#"><li>Houses</li></a>
        <a href="contact.html"><li>Contact Us</li></a>
        <a href="login.html"><li>Log In</li></a>
    </ul>
</div>
</nav>
)
}
}

export default Navigation