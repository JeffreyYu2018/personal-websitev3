import React from 'react'
import SidebarView from '../views/SidebarView'

export default (props) => (
  <SidebarView>
    <sidebar-profile-pic
      src="/images/Cool_Profile_Pic.jpg"
      srcset={`/images/Cool_Profile_Pic.jpg 500w,
              /images/Cool_Profile_Pic.jpg 800w,
              /images/Cool_Profile_Pic.jpg 1080w,
              /images/Cool_Profile_Pic.jpg 2000w,
              /images/Cool_Profile_Pic.jpg 2100w`}
    />
    <sidebar-facebook src="/images/social-03.svg" />
    <sidebar-instagram src="/images/social-07.svg" />
    <sidebar-github src="/images/social-33.svg" />
    <sidebar-linkedin src="/images/social-09.svg" />
  </SidebarView>
)
