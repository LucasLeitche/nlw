import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/Bug.svg';
import ideaImageUrl from '../assets/Idea.svg';
import thoughtImageUrl from '../assets/Thought.svg';
const feedbackType = {
    BUG:{
        title:'Problema',
        image:{
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA:{
        title:'Ideia',
        image:{
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        }
    },
    OTHERS:{
        title: 'Outro',
        image:{
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },
}

export function WidgetForm (){
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton/>
            </header>
            <div className="flex py-8 gap-2 w-full ">
                {/* { Object.entries(feedbackType).map(() =>{
                    
                }) } */}
            </div>
            <footer>
                Feito com ♥ por <a href="#" className="underline-offset-2">Lucas Leite</a> <a href="https://rockeatseat.com.br">(Projeto Rocketseat)</a> 
            </footer>
        </div>
    )
}