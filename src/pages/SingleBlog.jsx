import React from 'react'
import { FaClock, FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom'
import SideBar from '../components/SideBar';

const SingleBlog = () => {
    const data = useLoaderData();
   const {title, image, category, author, published_date, reading_time, content} = data[0];
  return (
    <div>
      <div className="py-40 bg-red-950 text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl font-primary leading-snug font-bold mb-5">
          Single Blog
        </h2>
      </div>

      {/* Blog Details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12 px-4 md:px-0">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img
              src={image}
              alt="blog-img"
              className="w-full mx-auto rounded"
            />
          </div>
          <h2 className="text-2xl font-bold text-blue-600 cursor-pointer mt-8">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {author} | {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time} read
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              aspernatur nisi magni. Magni, iste. Laboriosam provident esse id
              eius reprehenderit, similique nostrum iste doloribus molestias
              mollitia ut tempore beatae alias.
            </p>{" "}
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              aspernatur nisi magni. Magni, iste. Laboriosam provident esse id
              eius reprehenderit, similique nostrum iste doloribus molestias
              mollitia ut tempore beatae alias.
            </p>{" "}
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              aspernatur nisi magni. Magni, iste. Laboriosam provident esse id
              eius reprehenderit, similique nostrum iste doloribus molestias
              mollitia ut tempore beatae alias.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              aspernatur nisi magni. Magni, iste. Laboriosam provident esse id
              eius reprehenderit, similique nostrum iste doloribus molestias
              mollitia ut tempore beatae alias.
            </p>{" "}
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              aspernatur nisi magni. Magni, iste. Laboriosam provident esse id
              eius reprehenderit, similique nostrum iste doloribus molestias
              mollitia ut tempore beatae alias.
            </p>
          </div>
        </div>

        <div className='lg:w-1/2'>
            <SideBar />
        </div>
      </div>
    </div>
  );
}

export default SingleBlog