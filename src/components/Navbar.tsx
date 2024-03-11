import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <nav className="sm-4 w-100 d-flex align-items-center justify-content-center border-solid border-ccc mt-5">
      <Link href="/active" className='text-decoration-none me-5' passHref>
        <div className="nav-link fs-3 text text-secondary">
          Active Task
        </div>

      </Link>
      <Link href="/complete" style={{ marginLeft: "30px" }} className='text-decoration-none me-5' passHref>
        <div className="nav-link fs-3 text text-secondary font-weight-bold">
          Completed Tasks
        </div>

      </Link>
      <Link href="/tasklist" style={{ marginLeft: "30px" }} className='text-decoration-none me-5' passHref>
        <div className="nav-link fs-3 text text-secondary font-weight-bold">
          List of Tasks
        </div>

      </Link>
      <Link href="/mashhadapi" style={{ marginLeft: "30px" }} className='text-decoration-none me-5' passHref>
        <div className="nav-link fs-3 text text-secondary font-weight-bold">
          al-Mashhad API
        </div>

      </Link>

      <style jsx>{`
      .nav-link:hover {
        color: #008080 !important;
        font-weight: 600;
        text-decoration: underline;
        cursor: pointer;
      }
    `}</style>
    </nav>
  )
}

export default Navbar