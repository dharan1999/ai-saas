import React from 'react'
import Link from "next/link";
import { Button } from '@/components/ui/button';
const LandingPage = () => {
  return (
    <div>LandingPage (unprotected)
      <div>
        <Link href="/sign-in">
          <Button>
            Login
          </Button>
        </Link>

        
        <Link href="/sign-up">
          <Button>
            Signup
          </Button>
        </Link>
      </div>


    </div>
    

    
  )
}

export default LandingPage