import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../IndexHeader/IndexHeader.css';

class IndexHeader extends Component {
  render() {
    return (
      <div className="IndexHeader">
        <nav>
          <Link to="/">
            <i className="fa fa-arrow-left fa-lg" aria-hidden="true" />
          </Link>
          <i className="fa fa-language fa-lg " aria-hidden="true" />
          <i className="fa fa-star-o fa-lg" aria-hidden="true" />
          <i className="fa fa-map-o fa-lg" aria-hidden="true" />
          <i className="fa fa-search fa-lg" aria-hidden="true" />
        </nav>
      </div>
    );
  }
}

export default IndexHeader;
