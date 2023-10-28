export const dynamic = 'force-dynamic'

import Titles from './postTitles.json'

const blogApiKey = process.env.BLOG_API_KEY!;
const blogApiUrl = process.env.BLOG_API_URL!;
const GPTApiKey = process.env.GPT_API_KEY;

const getPostTitle = async () => {

    interface Post {
        id: number;
        title: string;
        date: Date;
        content: string;
    }

    try { 
        const response = await fetch(blogApiUrl, {method: 'GET', headers: {'x-api-key': blogApiKey}});
        const posts: Post[] = await response.json();
        const postTitle = Titles.postsTitles[posts.length];
        return postTitle
    } catch (error) {
        console.log(`Erro ao gerar título de Post: ${error}`)
    }
}

const generatePost = async (theme: string) => {

    try {
      const gptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GPTApiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo-0301",
          messages: [{role: 'user', content: `Você é um especialista em finanças que escreve para um blog semanal chamado Bolso Cheio AI. 
          Respire fundo, e escreva um artigo sobre ${theme}.`}],
          max_tokens: 1000,
          temperature: 0.5
        }),
      });

      const data = await gptResponse.json();
      const gptText = data.choices[0].message.content;
      return gptText;
    } catch (error) {
      console.error('Erro ao gerar post:', error);
    }
}

const savePost = async (post:{title:any, content:any}) => {
    try {
        const response = await fetch(
            blogApiUrl, 
            {
                method: 'POST', 
                headers: {
                    'x-api-key': blogApiKey, 
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({
                    title: `${post.title}`,
                    content: `${post.content}`
                }),
            }
        );
        const responseData = await response.json();
        console.log('Resposta da API:', responseData);
    } catch (error) {
        console.log(error)
    }
}

export const CreatePost = async () => {
    console.log('Iniciando cron jobs...')
    const postTitle = await getPostTitle();
    const postContent = await generatePost(`${postTitle}`);
    const createdPost = {
        title: postTitle,
        content: postContent
    }
    savePost(createdPost);
};