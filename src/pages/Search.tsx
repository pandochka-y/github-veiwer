import React from 'react';

const Search = () => {
    return (
        <div className="container mx-auto max-w-4xl block-centered">
            <form className="border-solid  border border-gray-400 rounded-lg mx-auto mb-8 flex content-center">
                <label
                    className="w-full input 	">
                    <input placeholder="Search for Git..."
                           className="bg-transparent border-opacity-0 rounded-lg w-full p-4 h-full"/>
                </label>
                <div className='p-4 flex justify-center'>
                    <button
                        className="rounded-lg flex items-center px-3 py-2 text-white orange-background"

                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg" className="mr-1.5">
                            <path
                                d="M10.0057 8.80503H9.37336L9.14923 8.58891C9.93368 7.67639 10.4059 6.49171 10.4059 5.20297C10.4059 2.32933 8.07662 0 5.20297 0C2.32933 0 0 2.32933 0 5.20297C0 8.07662 2.32933 10.4059 5.20297 10.4059C6.49171 10.4059 7.67639 9.93368 8.58891 9.14923L8.80503 9.37336V10.0057L12.8073 14L14 12.8073L10.0057 8.80503ZM5.20297 8.80503C3.20983 8.80503 1.60091 7.19611 1.60091 5.20297C1.60091 3.20983 3.20983 1.60091 5.20297 1.60091C7.19611 1.60091 8.80503 3.20983 8.80503 5.20297C8.80503 7.19611 7.19611 8.80503 5.20297 8.80503Z"
                                fill="white"></path>
                        </svg>
                        Go!
                    </button>
                </div>
            </form>

            <div className='border-t pt-16'>
                {/*<div className='flex justify-center'>Начинайте искать...</div>*/}

                <div className='flex content-center border cursor-pointer'>
                    <div className='mr-5'>
                        <img className='h-20 w-20 rounded-lg' src="https://avatars.githubusercontent.com/u/74931559?v=4" alt=""/>
                    </div>
                    <div>
                        <div>
                            pandochka-y
                        </div>
                        <div>21 commits</div>
                    </div>
                    <div className='ml-auto flex'>
                        <button className='rounded-lg  flex items-center self-center px-3 py-2 border orange-border orange-text'>View</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Search;