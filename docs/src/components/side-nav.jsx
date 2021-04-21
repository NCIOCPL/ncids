import { Link } from 'gatsby';
import React from 'react';

const SideNav = ({title}) => (
    <nav aria-label="Secondary navigation">
      <ul class="usa-sidenav">
        <li class="usa-sidenav__item">
        <Link to="/" title="Home" aria-label="Home">NCIDS Home</Link>
        </li><li class="usa-sidenav__item">
        <Link to="/components" title="components" aria-label="components" class="usa-current">Components</Link>
        <ul class="usa-sidenav__sublist">
        <li class="usa-sidenav__item">
        <a href="">Accordion</a>
        </li><li class="usa-sidenav__item">
        <a href="">Alert</a>
        </li><li class="usa-sidenav__item">
        <a href="">Breadcrumb</a>
        </li><li class="usa-sidenav__item usa-current">
        <Link to="/button" title="button" aria-label="button" class="usa-current">Button</Link>
        </li><li class="usa-sidenav__item">
        <a href="">Button Group</a>
        </li>
        </ul>
        </li>
        <li class="usa-sidenav__item">
        <Link to="/tokens" title="tokens" aria-label="tokens">Style Tokens</Link>
        </li>
        <li class="usa-sidenav__item">
        <a href="">Typography</a>
        </li>
        <li class="usa-sidenav__item">
        <a href="">Design Resources</a>
        </li>
      </ul>
    </nav>
  );

  export default SideNav;

