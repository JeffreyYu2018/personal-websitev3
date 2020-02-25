import React from 'react'
import SidebarView from '../views/SidebarView'

export default (props) => (
  <SidebarView>
    <sidebar-profile-pic
      src="/images/LinkedIn-Photo-Square.jpg"
      srcSet={`/images/LinkedIn-Photo-Square-p-500.jpeg 500w,
              /images/LinkedIn-Photo-Square-p-800.jpeg 800w,
              /images/LinkedIn-Photo-Square-p-1080.jpeg 1080w,
              /images/LinkedIn-Photo-Square-p-1600.jpeg 1600w,
              /images/LinkedIn-Photo-Square-p-2000.jpeg 2000w,
              /images/LinkedIn-Photo-Square-p-2600.jpeg 2600w,
              /images/LinkedIn-Photo-Square-p-3200.jpeg 3200w,
              /images/LinkedIn-Photo-Square.jpg 3456w`}
    />
    <sidebar-facebook src="/images/social-03.svg" />
    <sidebar-instagram src="/images/social-07.svg" />
    <sidebar-github src="/images/github.svg" />
    <sidebar-linkedin src="/images/social-09.svg" />
  </SidebarView>
)
