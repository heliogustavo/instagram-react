import { useState } from "react";

export default function Post(props) {

    const [isSaved, setIsSaved] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [contador, setContador] = useState(props.initialLikesAmount);

    function salvarPost(){
        if ( !isSaved ){
            setIsSaved(true);
        }else{
            setIsSaved(false);
        }
    }

    function curtirPost(){
        if ( !isLiked ){
            setIsLiked(true);
            setContador(contador + 1);
        }else{
            setIsLiked(false);
            setContador(contador - 1);
        }
    }

    function curtirPelaImagem(){
        if ( !isLiked ){
            setIsLiked(true);
            setContador(contador + 1);
        }
    }

    return (
        <div data-test='post' class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImage} alt="meowed"/>
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div onClick={curtirPelaImagem} class="conteudo" data-test="post-image">
                <img src={props.contentImage} alt="gato-telefone" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={curtirPost} class="vermelho" name={ !isLiked ? "heart-outline" : "heart"} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {
                            !isSaved ? 
                                <ion-icon onClick={salvarPost} name="bookmark-outline" data-test="save-post"></ion-icon>
                            :
                                <ion-icon onClick={salvarPost}  name="bookmark" data-test="save-post"></ion-icon>
                        }                        
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likedByImage} alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>{props.likedByText}</strong> e <strong>outras <span data-test="likes-number">{contador}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}