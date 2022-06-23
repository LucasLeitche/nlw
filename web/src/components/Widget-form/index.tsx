import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/Bug.svg';
import ideaImageUrl from '../../assets/Idea.svg';
import thoughtImageUrl from '../../assets/Thought.svg';
import { FeedBackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedbackContentStep";
export const feedbackTypes = {
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
};

export type FeedBackType = keyof typeof feedbackTypes;

export function WidgetForm (){
    
    const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null) // Primeiro parametro do array é a variavel de estado a segunda e função que seta o estado
    
    function handleRestartFeedback(){
        setFeedbackType(null)
    }
    
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            

            {
                !feedbackType ? (
                    <FeedBackTypeStep onFeedBackTypeChanged={setFeedbackType}/>
                ): (
                    <FeedBackContentStep 
                        onFeedbackRestartRequested={handleRestartFeedback} 
                        feedbackType={feedbackType}
                    />
                )
            }
            
            <footer className="text-center">
                Feito com ♥ por <a href="#" className="underline-offset-2">Lucas Leite</a> <a href="https://rockeatseat.com.br"><br />(Projeto Rocketseat)</a> 
            </footer>
        </div>
    )
}