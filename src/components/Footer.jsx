import React from 'react'

export const Footer = () => {
  return (
    <footer className="px-4 pb-6 mt-auto">
      <div className="container mx-auto">
        <div className="text-sm mt-4 flex items-end gap-2">
        <a rel='noopener noreferrer' title='Pablo Sánchez' href="https://www.pasabaa.com/" className="underline hover:text-black/70">
                <svg
                className="fill-black"
                id="Layer_1"
                width="30"
                height="30"
                preserveAspectRatio="xMidYMid meet"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 634.41 855.64"
                >
                <path className="cls-1" d="M0,855.64V0H278.82V132.55h-105.13V723.09h105.13v132.55H0Z" />
                <path
                    className="cls-1"
                    d="M355.6,855.64V0h278.82V132.55h-105.13V723.09h105.13v132.55H355.6Z"
                />
                </svg>
        </a>
        &copy; {new Date().getFullYear()}
        <a rel='noopener noreferrer' title='Pablo Sánchez' href="https://www.pasabaa.com/" className="hover:text-black/70">
            Pablo Sánchez
        </a>
        </div>
      </div>
    </footer>
  )
}
