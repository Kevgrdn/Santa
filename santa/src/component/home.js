import React from "react";


export default function Home(){
    return(
        <div className=" d-flex  flex-column bg-perso">
            
            <img src="../assets/title.png" className="my-3 width-perso1 mx-auto"></img>
            <div className="text-light col-3 mx-auto fs-2 my-3">
                Clique sur "lancer le tirage" pour savoir qui offre à qui !
            </div>


            <a href="/draw" className="d-flex justify-content-center">
                <div className="txt-modify bg-perso-2 position-perso mx-auto">
                    LANCER LE TIRAGE
                </div>
            </a>

        </div>
    )
}