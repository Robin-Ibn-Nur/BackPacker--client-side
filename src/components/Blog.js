import React from 'react';
import UseTitle from '../TitleChangeHook/UseTitle';

const Blog = () => {

    UseTitle('Blog')
    return (
        <>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>The main difference between SQL and NoSQL is that they are known as relational and non-relational database structures, respectively, that are used in different modes for implementing and manipulating data. The data storage and data management systems are highly biased by these terms for their structure and arrangement, which helps to maintain the data structure as per requirements and needs. </p>
                </div>
            </div>
            <div className="collapse mt-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information or authorization/authentication requests between a client and a server. Each JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm by the token's issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token.</p>
                </div>
            </div>
            <div className="collapse mt-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google's v8 engine.

                        JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.

                        JavaScript can manipulate DOM or add HTML within whereas Node.js doesn't have the capability to add HTML.

                        JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development

                        JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.

                        JavaScript requires any running environment as it can execute on any engine such as Firefox's spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.</p>
                </div>
            </div>
            <div className="collapse mt-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Whenever we start up a node program, node automatically creates one thread and then executes all of our code. Inside of the single thread there is something called event loop . You can think of the event loop as being like a control structure that decides what our one thread should be doing at any given point in time.This event loop is the absolute core of every program that we run and every program that we run has exactly one event loop.
                        After first line of code is executed we enter in event-loop. This event loop is like a WHILE loop. so this event loop or this while loop essentially is going to execute again and again. So every single time the event loop runs inside of our node application we refer to that as one tick . Entire body executes in one tick.</p>
                </div>
            </div>
        </>
    );
};

export default Blog;