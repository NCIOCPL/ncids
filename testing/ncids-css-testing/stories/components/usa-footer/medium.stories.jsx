import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from '!!raw-loader!sass-loader!./medium.scss';

const html = `
<footer class="usa-footer">
 <div class="grid-container usa-footer__return-to-top">
   <a href="#">Return to top</a>
 </div>
 <div class="usa-footer__primary-section">
   <nav class="usa-footer__nav" aria-label="Footer navigation">
     <ul class="grid-row grid-gap">
       <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
         <a class="usa-footer__primary-link" href="/">
            Primary link
         </a>
       </li>
       <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
         <a class="usa-footer__primary-link" href="/">
            Primary link
         </a>
       </li>
       <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
         <a class="usa-footer__primary-link" href="/">
            Primary link
         </a>
       </li>
       <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
         <a class="usa-footer__primary-link" href="/">
            Primary link
         </a>
       </li>
       <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
         <a class="usa-footer__primary-link" href="/">
            Primary link
         </a>
       </li>
     </ul>
   </nav>
 </div>
 <div class="usa-footer__secondary-section">
   <div class="grid-container">
     <div class="grid-row grid-gap">
       <div class="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
         <div class="mobile-lg:grid-col-auto">
           <img
              class="usa-footer__logo-img"
              src="/"
              alt=""
            />
         </div>
         <div class="mobile-lg:grid-col-auto">
           <p class="usa-footer__logo-heading">Name of Agency</p>
         </div>
       </div>
       <div class="usa-footer__contact-links mobile-lg:grid-col-6">
         <div class="usa-footer__social-links grid-row grid-gap-1">
           <div class="grid-col-auto">
             <a
                class="usa-social-link usa-social-link--facebook"
                href="/"
              >
               <span>Facebook</span>
             </a>
           </div>
           <div class="grid-col-auto">
             <a
                class="usa-social-link usa-social-link--twitter"
                href="/"
              >
               <span>Twitter</span>
             </a>
           </div>
           <div class="grid-col-auto">
             <a
                class="usa-social-link usa-social-link--youtube"
                href="/"
              >
               <span>YouTube</span>
             </a>
           </div>
           <div class="grid-col-auto">
             <a
                class="usa-social-link usa-social-link--instagram"
                href="/"
              >
               <span>Instagram</span>
             </a>
           </div>
           <div class="grid-col-auto">
             <a
                class="usa-social-link usa-social-link--rss"
                href="/"
              >
               <span>RSS</span>
             </a>
           </div>
         </div>
         <h3 class="usa-footer__contact-heading">
            Agency Contact Center
         </h3>
         <address class="usa-footer__address">
           <div class="usa-footer__contact-info grid-row grid-gap">
             <div class="grid-col-auto">
               <a href="tel:1-800-555-5555">(800) 555-GOVT</a>
             </div>
             <div class="grid-col-auto">
               <a href="mailto:info@agency.gov">
                  info@agency.gov
               </a>
             </div>
           </div>
         </address>
       </div>
     </div>
   </div>
 </div>
</footer>
`;

export const Medium = () => <TestCase css={css} html={html} />;