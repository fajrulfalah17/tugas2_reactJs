import React, { Component } from "react";

class MenuTentangKami extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tentang: "Warung Nusantara adlah restoran yang bernuansa makanan nusantara, Kami ada untuk menikmati makanan khas dari nusantara"
        }
    }
    render() {
        return(
            <div>
                <center>
                    <p>Tentang Kami </p> {this.state.tentang}
                </center>
            </div>
        )
    }
}

export default MenuTentangKami;