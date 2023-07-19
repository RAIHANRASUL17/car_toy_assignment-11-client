import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';
import useTitleSet from '../../hooks/useTitleSet';

const Blog = () => {
  // routing coming from hook js
  useTitleSet("blog");
  
  return (
    <>
    <NavBar></NavBar>
    <div className='container mx-auto pt-14'>
      <h4 className='text-xl font-semibold my-1'>Question-1: What is an access token and refresh token?</h4>
      <p>Answer: A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>
      <h4 className='text-xl font-semibold my-1'>Question-2: How do they work and where should we store them on the client-side?</h4>
      <p className='mb-1'>Client side rendering is a technique that allows a web browser to display the content of a website without waiting for the entire page to be downloaded from the server. A few benefits of this technique are that it can make pages load faster, makes search engines index your content more quickly, and helps with SEO. <br />
      The actual client-side databases are stored on the user's computer and are directly accessed by JavaScript code in the browser.
      </p>
      <h4 className='text-xl font-semibold my-1'>Question-3: Compare SQL and NoSQL databases?</h4>
      <p className='mb-1'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
      <h4 className='text-xl font-semibold my-1'>Question-4: What is express js? What is Nest JS?</h4>
      <p>Answer: Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
      <h4 className='text-xl font-semibold my-1'>Question-5: What is MongoDB aggregate and how does it work?</h4>
      <p>Answer: You can use aggregation operations to: Group values from multiple documents together. Perform operations on the grouped data to return a single result. Analyze data changes over time.
        <br />
        Instead of tables, a MongoDB database stores its data in collections. A collection holds one or more BSON documents. Documents are analogous to records or rows in a relational database table. Each document has one or more fields; fields are similar to the columns in a relational database table.
      </p>
    
    </div>
    <Footer></Footer>
    </>
  );
};

export default Blog;