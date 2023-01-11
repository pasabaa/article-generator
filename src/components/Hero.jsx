import React, { useState } from 'react'
import uuid from 'react-uuid';

export const Hero = () => {

    const [show, setShow] = useState(false);
    const list = [
        {
            info: 'La aplicación depende de la API de OpenAI, por lo que estará limitada por los límites de uso y la disponibilidad de la API.'
        },
        {
            info: 'La calidad y precisión del artículo redactado por OpenAI pueden variar y no siempre será perfecta.'
        },
        {
            info: 'La aplicación solo redactará artículos en idioma inglés y español.'
        },
        {
            info: 'La aplicación requiere que sea específica la descripción para tener un mejor resultado, por ello, se recomienda tener buena ortografía y redacción.'
        },
        {
            info: 'La aplicación no proporcionará sugerencias de corrección gramatical ni ortográfica.'
        },
        {
            info: 'La aplicación no proporcionará opciones de formateo ni herramientas de edición avanzadas.'
        },
        {
            info: 'La aplicación no proporcionará opciones de publicación ni compartir el artículo redactado con otros.'
        },
        {
            info: 'La aplicación no permitirá la personalización de la redacción del artículo, como cambiar el estilo de escritura o la longitud del artículo.'
        },
        {
            info: 'La aplicación no proporcionará opciones de búsqueda ni integración con bases de datos externas para obtener más información sobre el tema del artículo.'
        },
        {
            info: 'La aplicación no proporcionará opciones de almacenamiento ni permitirá guardar el artículo redactado para su uso posterior.'
        },
        {
            info: 'La aplicación no proporcionará opciones de exportación ni permitirá guardar el artículo redactado en diferentes formatos.'
        }

    ]

  return (
    <div className='px-4 pt-6 mt-16'>
        <h1 className='text-4xl font-bold font-serif'>Generador de ideas, párrafos e información para artículos.</h1>
        <p className='text-sm mt-2 leading-relaxed'>Crea diferentes ideas para tus artículos, además de brindarte información, puedes pedirle a la inteligencia artificial que genere características relacionadas con la redacción, gramática, etc. ¡Pruébala ya!</p>
        <button 
            title={show ? 'Ocultar' : 'Más información'} 
            className='text-sm border border-black px-2 py-1 mt-4' 
            onClick={()=>setShow(!show)}>{show ? 'Ocultar' : 'Más información'}
        </button>
        {show && 
        <div className='mt-4 p-4 border border-yellow-300 bg-yellow-400/30'>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" className="bi bi-exclamation-triangle-fill fill-yellow-500" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div className='mt-4 text-sm text-yellow-800 flex flex-col'>
                <p className='font-semibold'>La aplicación tiene algunas limitaciones</p>
                <ul className='list-disc ml-4 mt-2'>
                   {list.map(item => {
                        return(
                            <li key={uuid()} className='mt-2'>
                                {item.info}
                            </li>
                        )
                   })}
                </ul>
                <button 
                    title={show ? 'Ocultar' : 'Más información'}  
                    className='text-sm self-end border border-yellow-500 px-2 py-1 mt-4' 
                    onClick={()=>setShow(!show)}>{show ? 'Ocultar' : 'Más información'}</button>

            </div>
        </div>}    

    </div>
  )
}
