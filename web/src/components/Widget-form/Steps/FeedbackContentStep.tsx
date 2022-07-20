import { ArrowLeft, Camera } from "phosphor-react"
import { FormEvent, useState } from "react";
import { FeedBackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedBackContentStepProps{
    feedbackType: FeedBackType,
    onFeedbackRestartRequested: () => void,
    onFeedbackSent: () => void
}



export function FeedBackContentStep({ 
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent
}:FeedBackContentStepProps) {

    
    const [screenshot, setScreenshot] = useState<string | null>(null);

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    const [comment, setComment] = useState(''); ;// Evento criado


    function handleSubmitFeedBack(event:FormEvent){
       event.preventDefault();
        console.log({
            screenshot,
            comment
        })
        onFeedbackSent();
    }
    return (
        <>
            <header>
                <button 
                    type="button" 
                    onClick={onFeedbackRestartRequested} 
                    className="absolute left-5 top-5 text-zinc-400 hover:text-zinc-100"
                >
                    <ArrowLeft weight="bold" className="w-4 h-4 absolute" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"  />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton/>
            </header>
            <form onSubmit={ handleSubmitFeedBack } className="my-4 w-full" >
                <textarea
                    onChange={event => setComment(event.target.value)}
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zin-400 text-zinc-100 border border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo..."
                />
          
                <footer className="flex gap-2 my-2 w-full">
                        <ScreenshotButton
                            screenshot={screenshot}
                            onScreenshotTook={setScreenshot}
                        />
                        <button
                            disabled={
                                comment.length == 0
                            } 
                            type="submit"
                            className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                        >
                            Enviar Feedback
                        </button>
                </footer>
           </form>
        </>
    )
}