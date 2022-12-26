import Layout from "@/components/Main";

import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <Layout>
      <div className='container pt-5'>
        <div className='flex justify-end items-center relative'>
          <div className='absolute left-0   w-1/2 sm:w-1/3 z-20'>
            <div className='text-3xl md:text-5xl heading '>
              <span>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "I am Creative",
                    "I am Minimalist",
                    "Rudi, FullStack Devops",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
          </div>

          <img src='/bubble.png' alt='' className='w-3/4 dark:grayscale z-10' />
        </div>
      </div>
      <div className='container2'>
        <div className='content'>
          <div className='flex justify-start items-center'>
            <img src='/about.png' alt='' className='w-16 mr-2 dark:grayscale' />

            <h1 className='text-3xl font-bold'>About</h1>
          </div>
          <div className='text-xl  font-bold'>
            My name is Rudi. I am a full-stack JavaScript engineer specializing
            in React, Node.js, functional programming and serverless paradigms.
            I enjoy hacking on the latest tech and being automating workflows
            and processes. I am also passionate about mentoring, education and
            personal development in the workplace. I started Fresh Rudix Labs
            2010 under which I do development and consulting work, and I am
            actively involved in various other startups. When I’m not working,
            you can find me reading good books, watching great movies, geeking
            out over all things Star Wars.
          </div>
          <div className='clear'></div>
          <div className='flex justify-start items-center'>
            <img
              src='/portfolio.png'
              alt=''
              className='w-16 mr-2 dark:grayscale'
            />

            <h1 className='text-3xl font-bold'>Skills</h1>
          </div>
          <div className='clear'></div>
          <div className='skills fe clear-both'>
            <h2>Frontend</h2>
            <div className='flex flex-wrap justify-center'>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                TYPESCRIPT
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                tailwindcss
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                REACT NATIVE
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                Next.JS
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                REACT.JS
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                ES6 JS
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                SASS
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                JADE/PUG
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                SCSS
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                SKETCH MACOS
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                HTML5
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                MATERIAL UI
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                BOOTSTRAP
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                GATSBY
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                GRAPHQL
              </div>
            </div>
          </div>
          <div className='skills fe clear-both '>
            <h2>Backend</h2>
            <div className='flex flex-wrap justify-center'>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                NODE.JS
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                FEDORA OS
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                UBUNTU OS
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                AWS EC2
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                AWS LAMBDA
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                AWS DYNAMODB
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                AWS API GATEWAY
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                AWS ROUTE53
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                AWS S3
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                COUCHDB
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                FIREBASE
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                DOCKER
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                GITHUB
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                GITLAB
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                NETLIFY
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                STRAPI
              </div>
              <div className='mr-2 mb-2 max-w-fit grow rounded-full border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-4 py-1 text-center uppercase'>
                HASURA
              </div>
            </div>
          </div>
          <h1 className='text-3xl font-bold'>Work</h1>
          <div className=' mb-6 rounded-lg border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-6 py-3 '>
            <div className='left'>
              <div className='title text-3xl font-thin'>
                FullStack DevOps Engineer
              </div>
              <div className='company text-xl font-thin'>@ DataDots EU</div>
              <div className='date flex'>
                <div className='flex-1 self-start'>2021 November</div>
                <div className='self-end'>2022 March</div>
              </div>
              <div className='clear'></div>
              <div className='description font-bold'>
                Worked on 2 different cross-platform mobile applications , Web3
                application involving NFT's and smart contracts. Traveling to
                Israel. Techs/Stack involved: AWS , react,react-native, Next.JS
                ,PHP,Docker
              </div>
            </div>
          </div>
          <div className=' mb-6 rounded-lg border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-6 py-3 '>
            <div className='left'>
              <div className='title text-3xl font-thin'>
                FullStack Cloud Consultant
              </div>
              <div className='company text-xl font-thin'>@ dMedia Bulgaria</div>
              <div className='date flex'>
                <div className='flex-1 self-start'>2013 September</div>
                <div className='self-end'>2015 October</div>
              </div>
              <div className='clear'></div>
              <div className='description font-bold'>
                Online store development, cloud infrastructure, hosting, SEO
              </div>
            </div>
          </div>
          <div className=' mb-6 rounded-lg border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-6 py-3 '>
            <div className='left'>
              <div className='title text-3xl font-thin'>Web Developer</div>
              <div className='company text-xl font-thin'>
                @ Golgstrand Reisen
              </div>
              <div className='date flex'>
                <div className='flex-1 self-start'>2012 July</div>
                <div className='self-end'>2013 September</div>
              </div>
              <div className='clear'></div>
              <div className='description font-bold'>
                Gathering data Organizing and structuring the plan Translating
                all related documents
              </div>
            </div>
          </div>
          <div className=' mb-6 rounded-lg border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-6 py-3 '>
            <div className='left'>
              <div className='title text-3xl font-thin'>
                Print/Web Design touropearator
              </div>
              <div className='company text-xl font-thin'>
                @ Ballerman am Balkan
              </div>
              <div className='date flex'>
                <div className='flex-1 self-start'>2009 December</div>
                <div className='self-end'>2010 April</div>
              </div>
              <div className='clear'></div>
              <div className='description font-bold'>
                Responsible for the brand weekly newspaper design, PHP website
              </div>
            </div>
          </div>
          <div className='mb-6 rounded-lg border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-6 py-3 '>
            <div className='left'>
              <div className='title text-3xl font-thin'>
                Senior Web Developer
              </div>
              <div className='company text-xl font-thin'>@ Agency Venera</div>
              <div className='date flex'>
                <div className='flex-1 self-start'>2008 November</div>
                <div className='self-end'>2009 June</div>
              </div>
              <div className='clear'></div>
              <div className='description font-bold'>
                At SOAP I was required to carry out full stack duties across a
                broad range of projects including php/MySQL with front end
                technologies ranging from html/css to Flash.
              </div>
            </div>
          </div>
          <div className=' mb-6 rounded-lg border-2 dark:bg-white bg-gray-800 border-fuchsia-800 dark:border-gray-800 px-6 py-3   '>
            <div className='left'>
              <div className='title text-3xl font-thin'>
                Facebook App Developer
              </div>
              <div className='company text-xl font-thin'>@ Ringful</div>
              <div className='date flex'>
                <div className='flex-1 self-start'>2008 September</div>
                <div className='self-end'>2008 December</div>
              </div>
              <div className='clear'></div>
              <div className='description font-bold'>
                Facebook API integration, VOIP, Jboss
              </div>
            </div>
          </div>
          <div className='clear'></div>
          <div className='flex justify-start items-center'>
            <img
              src='/contact.png'
              alt=''
              className='w-16 mr-2 dark:grayscale'
            />

            <h1 className='text-3xl font-bold'>Contact</h1>
          </div>
          +359876358115, info@rudixops.com
          <div className='clear'></div>
          <form
            action='https://formspree.io/rudix.lab@gmail.com'
            method='POST'
            className='flex flex-col justify-center items-center'
          >
            <input
              type='text'
              name='_replyto'
              className='input input-bordered   w-full max-w-xs mb-2 text-white dark:text-black dark:bg-white'
              placeholder='Your email:'
            />
            <textarea
              name='message'
              placeholder='Your message:'
              className='textarea input-bordered  w-full max-w-xs mb-2 text-white dark:text-black dark:bg-white'
            ></textarea>
            <button
              type='submit'
              className='btn  w-full max-w-xs text-white dark:text-black dark:bg-white'
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className='staticbottom'></div>
    </Layout>
  );
}
export async function getStaticProps() {
  return {
    props: { date: new Date().toString() }, // will be passed to the page component as props
  };
}
