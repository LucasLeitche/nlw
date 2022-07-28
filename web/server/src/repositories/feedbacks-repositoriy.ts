export interface FeedbackCreateData{
    type: string;
    comment: string;
    screenshot?: string; 
}

export interface FeedbacksRepository{
    // Aqui dentro vou falar quais metodos existem dentro do repositorio de feedback 
    // Quais ações a aplicação pode fazer com os feedbacks dentro  do banco de dados

    create: (data:FeedbackCreateData) => Promise<void>; // Pois se trata de uma async function
}