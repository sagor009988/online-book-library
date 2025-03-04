import rehypeRaw from 'https://esm.sh/rehype-raw@7?bundle';
import React from "react";
import Markdown from 'react-markdown';
import { useLoaderData } from "react-router-dom";
import alterImage from "../assets/404.jpg";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title, description, published_at ,tags,url,body_html} = blog

  return (
    <div
      className=" mx-auto overflow-auto border-2 p-2 border-opacity-30    group hover:no-underline focus:no-underline"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
        src={cover_image || alterImage}
      />
       <div className='flex flex-wrap py-6 gap-2 border-t border-dashed '>
          {tags &&
            tags.map(tag => (
              <a
                key={tag}
                rel='noopener noreferrer'
                href='#'
                className='px-3 py-1 rounded-sm hover:underline '
              >
                #{tag}
              </a>
            ))}
        </div>
     
      <div className='space-y-2'>
        <a
          target='_blank'
          href={url}
          className='text-2xl font-semibold group-hover:underline group-focus:underline'
        >
          {title}
        </a>
            <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
        
      </div>
    </div>
  );
};

export default Content;
