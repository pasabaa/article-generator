import React, { useState } from 'react';
import loader from '../assets/loader.svg'
import { Configuration, OpenAIApi } from 'openai';

export const ArticleGenerator = () => {

  // Inicializamos los estados para el título y el cuerpo del artículo
  const [title, setTitle] = useState('');

  // Inicializamos el estado para el artículo redactado por OpenAI
  const [article, setArticle] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_API_KEY_OPENAI,
  })

  const openai = new OpenAIApi(configuration);

  // Función que se ejecuta cuando se hace clic en el botón de enviar
  const handleSubmit = async (e) => {

    e.preventDefault();

    if(title.trim().length !== 0) {

      setError(false);
      setLoading(true);
      setArticle('');

      // Enviamos una solicitud a la API de OpenAI para que redacte el artículo
      const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `${title}\n`,
          max_tokens: 2048,
          temperature: 0.5,
      });
  
      setLoading(false);
  
      // Actualizamos el estado del artículo con el artículo redactado por OpenAI
      console.log(response.data)
      setArticle(response.data.choices[0].text);

    } else {
      setError(true);
    }

    
  };

  return (
    <section>
      {/* Formulario con un campo de texto para el título y un área de texto para el cuerpo del artículo */}
      <form className='p-4 flex flex-col' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 mt-4'>
          <label className='text-lg font-semibold' htmlFor='title'>Título</label>
          <input
            id='title'
            name='title'
            title='Crea un articulo sobre...'
            className='px-3 py-2 border'
            type="text"
            placeholder="Crea un articulo sobre..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {error && <span className='text-sm mt-1 text-red-400'>El campo no debe estar vacio</span>}
        
        <button className='px-3 py-2 bg-black mt-4 text-white' type="submit" title='Generar'>Generar</button>
      </form>
      {/* Mostramos el artículo redactado por OpenAI */}
      {loading && <span className='w-full flex justify-center items-center'><img width={100} height={100} src={loader} alt='Loading' /></span>}
      {article && <textarea disabled className='px-4 my-4 text-box bg-transparent leading-relaxed w-full h-screen overflow-y resize-none'>{article}</textarea>}
    </section>
  );
}
