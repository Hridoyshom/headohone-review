import React from 'react';

const Blogs = () => {
    return (
        <div className=' justify-center ' >
            <div className=' w-1/2 ml-11    ' >
                <h1 className=' font-bold ' >  What Is Context API?</h1>
                <p>
                    Context API is used for sharing state throughout all the component in tha app. It is kind of alternative to  move props from one component to another. Context API is doing the job  by simply passing some functions to the component. Whenever any component needs to use that state it simply can import that state and can use it for further work.
                </p>
            </div>
        </div>
    );
};

export default Blogs;