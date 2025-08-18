import {PlusIcon } from 'lucide-react'
import { Link } from 'react-router'
import React from 'react'

const Navbar = () => {
    return (
        <header>
            <div className='bg-base-300 border-b border-base-content/10'>
                <div className='mx-auto max-w-6xl px-4 py-4'>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-bold text-3xl text-primary'>NoteFlow</h1>
                        <div className='flex items-center gap-4'>
                            <Link to={"/create"} className="btn btn-outline btn-primary">
                                <span className='text-lg'>Add Note</span><PlusIcon className='h-5 w-5'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar