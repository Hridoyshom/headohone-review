import React from 'react';

const Blogs = () => {
    return (
        <div className=' justify-center mt-11 ' >
            <div className=' w-1/2 ml-11    ' >
                <h1 className=' font-bold ' >  What Is Context API?</h1>
                <p>
                    Context API is used for sharing state throughout all the component in tha app. Context api can produce  global variables effectively. These variables are passed through the components. It is kind of alternative to  move props from one component to another. Context API is doing the job  by simply passing some functions to the component. Whenever any component needs to use that state it simply can import that state and can use it for further work.
                </p>
            </div>
            <div className=' w-1/2 ml-11 mt-11 ' >
                <h1 className=' font-bold ' >  What Is Semantic Tag?</h1>
                <p>
                    Semantic Tag is used in HTML. These tags  represent themselves like they can be literally understood by machine and human. Like header, footer, article. When we use these tags human and machine can easily understand what is inside in these tags. They are so accurate to describe their purpose. Like a table tag describe that it is associated with creating tables or table related purposes.
                </p>
            </div >
        </div >
    );
};

export default Blogs;