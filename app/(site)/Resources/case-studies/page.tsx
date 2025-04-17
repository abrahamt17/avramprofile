import Blog from '@/components/CaseStudies'
import CTA from '@/components/CTA'
import React from 'react'

type Props = {}

const CaseStudiesPage = (props: Props) => {
  return (
    <div>
        <Blog />
        <CTA />
    </div>
  )
}

export default CaseStudiesPage